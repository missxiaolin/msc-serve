import moment from "moment";
import Base from "../base";
import AlertModel from "../../model/alert";
import DATE_FORMAT from "../../constants/date_format";
import utils, { isHourSlot, isType } from "../../library/utils";
import PageModel from "../../model/page_model";
import JsModel from "../../model/js_model";
import PromiseLog from "../../model/promise_log";
import ResourceModel from "../../model/resource_model";
import HttpModel from "../../model/http_model";
import * as alertEum from "../../constants/err";
import redisConfig from "../../config/redis";

import redis from "../../library/redis";

const alertModel = new AlertModel();
const pageModel = new PageModel();
const promiseLog = new PromiseLog();
const resourceModel = new ResourceModel();
const httpModel = new HttpModel();

const jsModel = new JsModel();
const BASE_REDIS_KEY = "plat_fe_fee_watch_alarm_";
const MAX_QUERY_COUNT = 10;
const MAX_SLEEP_COUNT = 60;

/**
 * @param {number} id 报警配置id
 */
function getRedisKey(id) {
  return BASE_REDIS_KEY + id;
}

function getRedisMsgKey(id, msg) {
  return BASE_REDIS_KEY + id + msg;
}

class WatchAlarm extends Base {
  constructor() {
    super();
    this.currentQueryCounter = 0;
  }

  static get signature() {
    return `
        WatchDog:Alarm
    `;
  }

  static get description() {
    return "[根据报警配置] 监测每一条报警配置对应的项目错误";
  }

  /**
   * @param {*} args
   * @param {*} options
   */
  async execute(args, options) {
    let timeHourSecond = moment().format(DATE_FORMAT.TIME_BY_SECOND);
    const alarmConfigList = await alertModel.getAllEnabled();
    for (let alarmConfig of alarmConfigList) {
      const {
        id,
        monitorAppId,
        errorName, // 要报警错误名字
        timerangeS: timeRange, // 报警时间范围_秒
        startHour,
        endHour,
      } = alarmConfig;

      if (!isHourSlot(timeHourSecond, startHour, endHour)) {
        // 不在当前时间段就停止往下运行
        console.log(
          `项目${monitorAppId}，${errorName}监听的不在时间段${startHour}-${endHour}，自动跳过`
        );
      } else {
        let waitForDispatch = true;
        let sleepCounter = 0;
        while (waitForDispatch) {
          if (this.currentQueryCounter < MAX_QUERY_COUNT) {
            // 查询
            this.autoAlarm(alarmConfig)
              .then(() => {
                this.currentQueryCounter = this.currentQueryCounter - 1;
              })
              .catch(() => {
                this.currentQueryCounter = this.currentQueryCounter - 1;
              });
            this.currentQueryCounter = this.currentQueryCounter + 1;
            waitForDispatch = false;
          } else {
            sleepCounter = sleepCounter + 1;
            if (sleepCounter > MAX_SLEEP_COUNT) {
              const sleepMinutes = sleepCounter / 60;
              // TOOD: 报警（系统可能有问题）
              console.log(
                `报警系统数据库查询已经睡眠${sleepMinutes}分钟，可能出问题了。`
              );
            }
            await utils.sleep(1000);
          }
        }
      }
    }
  }

  /**
   * 对比数据
   * @param {*} maxErrorCount 阈值
   * @param {*} serviceType = > <
   * @param {*} currentData 当前数据
   */
  contrastData(maxErrorCount, serviceType, currentData) {
    switch (serviceType) {
      case "=":
        return maxErrorCount == currentData;
        break;
      case ">":
        return maxErrorCount < currentData;
        break;
      case "<":
        return maxErrorCount > currentData;
        break;
      default:
        return "";
    }
  }

  /**
   * 报警
   * @param {*} alarmConfig
   */
  async autoAlarm(alarmConfig) {
    const {
      monitorAppId,
      errorType, // 错误类型
      maxErrorCount, // 报警错误数阈值
      serviceType,
    } = alarmConfig;
    const endTime = moment().format(DATE_FORMAT.DISPLAY_BY_SECOND);
    const startTime = moment(endTime, "YYYY-MM-DD HH:mm:ss")
      .subtract(alarmConfig.timeRangeS, "seconds")
      .format(DATE_FORMAT.DISPLAY_BY_SECOND);
    let param = {
      startTime,
      endTime,
      monitorAppId,
    };
    const redisKey = getRedisKey(id);
    // 如果是算总数的 报警过久直接return掉
    if (!redisConfig.isOpen || alarmConfig.whereType == 'sum' && await redis.asyncGet(redisKey)) {
      return
    }
    switch (errorType) {
      case alertEum.ALERT_PAGE_PV: // pv
        const pvCount = await pageModel.getIsUCount({
          ...param,
          isUv: false,
          isIp: false,
        });
        if (this.contrastData(maxErrorCount, serviceType, pvCount) == true) {
          await this.sendAlert({
            alarmConfig,
            currentData: pvCount,
          });
        }
        break;
      case alertEum.ALERT_PAGE_UV: // uv
        const uvCount = await pageModel.getIsUCount({
          ...param,
          isUv: true,
          isIp: false,
        });
        if (this.contrastData(maxErrorCount, serviceType, uvCount) == true) {
          await this.sendAlert({
            alarmConfig,
            currentData: uvCount,
          });
        }
        break;
      case alertEum.ALERT_JS_ERROR: // js 错误
        let jsRes = await jsModel.getAlertCount({
          whereType: alarmConfig.whereType,
          ...param,
          maxErrorCount: alarmConfig.maxErrorCount,
          serviceType: alarmConfig.serviceType,
        });
        // 总数
        if (
          alarmConfig.whereType == "sum" &&
          this.contrastData(maxErrorCount, serviceType, res) == true
        ) {
          
          await this.sendAlert({
            alarmConfig,
            currentData: jsRes,
          });
        }
        // 单个对比
        if (alarmConfig.whereType == "single" && jsRes && jsRes.length > 0) {
          // 单个错误推送
          jsRes.forEach(async (item) => {
            // 短时间内报警过静默
            if (!redisConfig.isOpen || !await redis.asyncGet(getRedisMsgKey(alarmConfig.id, item.errorMsg))) {
              await this.sendAlert({
                alarmConfig,
                currentData: item.count,
                errorMsg: item.errorMsg,
              });
            }
          });
        }

        break;
      case alertEum.ALERT_RESOURCE_ERROR:
        let resourceRes = await resourceModel.getAlertCount({
          ...param,
          whereType: alarmConfig.whereType,
          maxErrorCount: alarmConfig.maxErrorCount,
          serviceType: alarmConfig.serviceType,
        });
        // 总数
        if (
          alarmConfig.whereType == "sum" &&
          this.contrastData(maxErrorCount, serviceType, resourceRes) == true
        ) {
          await this.sendAlert({
            alarmConfig,
            currentData: resourceRes,
          });
        }
        // 单个对比
        if (
          alarmConfig.whereType == "single" &&
          resourceRes &&
          resourceRes.length > 0
        ) {
          // 单个错误推送
          resourceRes.forEach(async (item) => {
            if (!redisConfig.isOpen || !await redis.asyncGet(getRedisMsgKey(alarmConfig.id, item.url))) {
              await this.sendAlert({
                alarmConfig,
                currentData: item.count,
                errorMsg: item.url,
              });
            }
          });
        }
        break;
      case alertEum.ALERT_HTTP_LOG:
        let httpRes = await httpModel.getAlertCount({
          ...param,
          whereType: alarmConfig.whereType,
          maxErrorCount: alarmConfig.maxErrorCount,
          serviceType: alarmConfig.serviceType,
        });
        // 总数
        if (
          alarmConfig.whereType == "sum" &&
          this.contrastData(maxErrorCount, serviceType, httpRes) == true
        ) {
          await this.sendAlert({
            alarmConfig,
            currentData: httpRes,
          });
        }
        // 单个对比
        if (
          alarmConfig.whereType == "single" &&
          httpRes &&
          httpRes.length > 0
        ) {
          // 单个错误推送
          httpRes.forEach(async (item) => {
            if (!redisConfig.isOpen || !await redis.asyncGet(getRedisMsgKey(alarmConfig.id, item.pathName))) {
              await this.sendAlert({
                alarmConfig,
                currentData: item.count,
                errorMsg: item.pathName,
              });
            }
          });
        }

        break;
      case alertEum.ALERT_PROMISE_ERROR:
        let promiseRes = await promiseLog.getAlertCount({
          ...param,
          whereType: alarmConfig.whereType,
          maxErrorCount: alarmConfig.maxErrorCount,
          serviceType: alarmConfig.serviceType,
        });
        // 总数
        if (
          alarmConfig.whereType == "sum" &&
          this.contrastData(maxErrorCount, serviceType, promiseRes) == true
        ) {
          await this.sendAlert({
            alarmConfig,
            currentData: promiseRes,
          });
        }
        // 单个对比
        if (
          alarmConfig.whereType == "single" &&
          promiseRes &&
          promiseRes.length > 0
        ) {
          // 单个错误推送
          promiseRes.forEach(async (item) => {
            if (!redisConfig.isOpen || !await redis.asyncGet(getRedisMsgKey(alarmConfig.id, item.errorMsg))) {
              await this.sendAlert({
                alarmConfig,
                currentData: item.count,
                errorMsg: item.errorMsg,
              });
            }
          });
        }
        break;
      default:
    }
  }

  /**
   * 发送报警
   * @param {*} ucidList
   * @param {*} message
   */
  async sendAlert(data) {
    const { alarmConfig, currentData, errorMsg = "" } = data;
    let alarmMsg = `项目【${alarmConfig.name}】监控的【${
      alarmConfig.errorName
    }】错误， 最近${errorMsg ? `【${errorMsg}】 错误 ` : ""}【${
      alarmConfig.timeRangeS
    }】秒内达到数量【${currentData}】, 达到阈值【${
      alarmConfig.maxErrorCount
    }】${
      alarmConfig.note ? `,触发报警, 报警备注【${alarmConfig.note}】。` : "。"
    }`;
    // TODO: 发送告警
    console.log(alarmMsg);
    // TODO:记录当前错误到数据库，后续检查报警用

    // redis 记录
    let redisKey = errorMsg ? getRedisMsgKey(alarmConfig.id, errorMsg) : getRedisKey(alarmConfig.id)
    !redisConfig.isOpen && await redis.asyncSetex(redisKey, alarmConfig.alarmIntervalS, 1);
  }
}

export default WatchAlarm;
