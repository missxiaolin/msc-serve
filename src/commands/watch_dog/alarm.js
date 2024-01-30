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
import AlarmHistoryModel from '../../model/alarm_history_model'
import * as alertEum from "../../constants/err";
import dotenv from "dotenv";
import redis from "../../library/redis";
import { sendDingTalkMessage } from "../../library/dingTalk/index";

const alertModel = new AlertModel();
const pageModel = new PageModel();
const promiseLog = new PromiseLog();
const resourceModel = new ResourceModel();
const httpModel = new HttpModel();
const alarmHistoryModel = new AlarmHistoryModel();

const jsModel = new JsModel();
const BASE_REDIS_KEY = "plat_fe_fee_watch_alarm_";
const MAX_QUERY_COUNT = 10;
const MAX_SLEEP_COUNT = 60;

const appConfig = dotenv.config().parsed;

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
        monitorAppId,
        errorName, // 要报警错误名字
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
    switch (errorType) {
      case alertEum.ALERT_PAGE_PV: // pv
        const pvCount = await pageModel.getIsUCount({
          ...param,
          isUv: false,
          isIp: false,
        });
        if (this.contrastData(maxErrorCount, serviceType, pvCount) == true) {
          await this.sendAlert(
            {
              alarmConfig,
              currentData: pvCount,
            },
            param
          );
        }
        break;
      case alertEum.ALERT_PAGE_UV: // uv
        const uvCount = await pageModel.getIsUCount({
          ...param,
          isUv: true,
          isIp: false,
        });
        if (this.contrastData(maxErrorCount, serviceType, uvCount) == true) {
          await this.sendAlert(
            {
              alarmConfig,
              currentData: uvCount,
            },
            param
          );
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
          await this.sendAlert(
            {
              alarmConfig,
              currentData: jsRes,
            },
            param
          );
        }
        // 单个对比
        if (alarmConfig.whereType == "single" && jsRes && jsRes.length > 0) {
          // 单个错误推送
          jsRes.forEach(async (item) => {
            // 短时间内报警过静默
            await this.sendAlert(
              {
                alarmConfig,
                currentData: item.count,
                errorMsg: item.errorMsg,
              },
              param
            );
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
          await this.sendAlert(
            {
              alarmConfig,
              currentData: resourceRes,
            },
            param
          );
        }
        // 单个对比
        if (
          alarmConfig.whereType == "single" &&
          resourceRes &&
          resourceRes.length > 0
        ) {
          // 单个错误推送
          resourceRes.forEach(async (item) => {
            await this.sendAlert(
              {
                alarmConfig,
                currentData: item.count,
                errorMsg: item.url,
              },
              param
            );
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
          await this.sendAlert(
            {
              alarmConfig,
              currentData: httpRes,
            },
            param
          );
        }
        // 单个对比
        if (
          alarmConfig.whereType == "single" &&
          httpRes &&
          httpRes.length > 0
        ) {
          // 单个错误推送
          httpRes.forEach(async (item) => {
            await this.sendAlert(
              {
                alarmConfig,
                currentData: item.count,
                errorMsg: item.pathName,
              },
              param
            );
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
          await this.sendAlert(
            {
              alarmConfig,
              currentData: promiseRes,
            },
            param
          );
        }
        // 单个对比
        if (
          alarmConfig.whereType == "single" &&
          promiseRes &&
          promiseRes.length > 0
        ) {
          // 单个错误推送
          promiseRes.forEach(async (item) => {
            await this.sendAlert(
              {
                alarmConfig,
                currentData: item.count,
                errorMsg: item.errorMsg,
              },
              param
            );
          });
        }
        break;
      default:
    }
  }

  /**
   * 发送报警
   * @param {*} data
   * @param {*} param
   */
  async sendAlert(data, param) {
    const { alarmConfig, currentData, errorMsg = "" } = data;
    let { startTime, endTime } = param;
    const redisKey = errorMsg
      ? getRedisMsgKey(alarmConfig.id, errorMsg)
      : getRedisKey(alarmConfig.id);

    // 之前报警过就静默推送
    if (appConfig.REDIS_IS_OPEN == 1 && (await redis.asyncGet(redisKey))) {
      console.log(
        `项目${alarmConfig.name}监听的${alarmConfig.errorName}错误在${alarmConfig.alarmIntervalS}秒内报警过，自动跳过`
      );
      return;
    }

    let alertTypes = alarmConfig.alertType
      ? JSON.parse(alarmConfig.alertType)
      : [];
    // 多种告警模式推送（本期只支持钉钉）
    alertTypes.forEach(async (v) => {
      if (v == 1) {
        let alarmMsg = `项目：${alarmConfig.name}\n\n 告警名称：${
          alarmConfig.errorName
        } \n\n 告警时间：${startTime} - ${endTime} \n\n 阈值：${
          alarmConfig.timeRangeS
        }秒内, ${alarmConfig.whereType == "sum" ? "总和" : "单次"} ${
          alarmConfig.serviceType
        } ${alarmConfig.maxErrorCount} \n\n 错误：${
          errorMsg ? `${errorMsg}` : ""
        } \n\n 总量：${currentData} \n\n 备注：${alarmConfig.note} \n\n`;
        // 发送告警
        let dingRes = await sendDingTalkMessage({
          title: alarmConfig.errorName,
          alarmMsg,
          dingConfig: alarmConfig.dingConfig || ""
        });
        // 记录当前错误到数据库，后续检查报警用
        await alarmHistoryModel.save({
          alarmId: alarmConfig.id,
          sendContent: alarmMsg,
          errorMsg: utils.isType().isString(dingRes) && dingRes ? dingRes : '',
          isSuccess: dingRes == true ? 1 : 0,
          updateTime: moment().format(DATE_FORMAT.DISPLAY_BY_SECOND)
        })
        // redis 记录
        appConfig.REDIS_IS_OPEN == 1 &&
          (await redis.asyncSetex(redisKey, alarmConfig.alarmIntervalS, 1));
      }
    });
  }
}

export default WatchAlarm;
