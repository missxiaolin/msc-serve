import moment from "moment";
import Base from "../base";
import AlertModel from "../../model/alert";
import DATE_FORMAT from "../../constants/date_format";
import utils, { isHourSlot } from "../../library/utils";
import PageModel from '../../model/page_model'
import * as alertEum from "../../constants/err";

import redis from "../../library/redis";

const alertModel = new AlertModel();
const pageModel = new PageModel();
const BASE_REDIS_KEY = "plat_fe_fee_watch_alarm_";
const MAX_QUERY_COUNT = 10;
const MAX_SLEEP_COUNT = 60;

/**
 * @param {number} id 报警配置id
 */
function getRedisKey(id) {
  return BASE_REDIS_KEY + id;
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
      const redisKey = getRedisKey(id);
      const hasAlertInAlarmInterval = await redis.asyncGet(redisKey);

      if (!isHourSlot(timeHourSecond, startHour, endHour)) {
        // 不在当前时间段就停止往下运行
        console.log(
          `项目${monitorAppId}，${errorName}监听的不在时间段${startHour}-${endHour}，自动跳过`
        );
      } else if (hasAlertInAlarmInterval) {
        // 之前报警过的静默
        // 静默时间
        console.log(
          `项目${monitorAppId}监听的${errorName}错误在${timeRange}秒内报警过，自动跳过`
        );
      } else {
        let waitForDispatch = true;
        let sleepCounter = 0;
        while (waitForDispatch) {
          if (this.currentQueryCounter < MAX_QUERY_COUNT) {
            // 查询
            this.autoAlarm(
              alarmConfig,
              redisKey
            )
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
  contrastData(maxErrorCount,serviceType, currentData) {
    switch(serviceType) {
      case '=':
        return maxErrorCount == currentData
        break;
      case '>':
        return maxErrorCount < currentData
        break;
      case '<':
        return maxErrorCount > currentData
        break;
      default:
        return ''
    }
  }

  /**
   * 报警
   * @param {*} alarmConfig
   * @param {*} redisKey
   */
  async autoAlarm(
    alarmConfig,
    redisKey
  ) {
    const {
      id,
      name: projectName,
      monitorAppId,
      errorType, // 错误类型
      errorName, // 要报警错误名字
      timerangeS: timeRange, // 报警时间范围_秒
      alarmIntervalS: alarmInterval,// 报警时间间隔_秒
      maxErrorCount, // 报警错误数阈值
      note,
      serviceType
    } = alarmConfig;
    const endTime = moment().format(DATE_FORMAT.DISPLAY_BY_SECOND);
    const startTime = moment(endTime, "YYYY-MM-DD HH:mm:ss").subtract(timeRange, 'seconds').format(DATE_FORMAT.DISPLAY_BY_SECOND);
    let alarmMsg = ''
    switch (errorType) {
      case alertEum.ALERT_PAGE_PV: // pv
        const pvCount = await pageModel.getIsUCount({
          startTime,
          endTime,
          isUv: false,
          isIp: false,
          monitorAppId
        })
        if (this.contrastData(maxErrorCount, serviceType, pvCount) == true) {
          alarmMsg = `项目【${projectName}】监控的【${errorName}】错误， 最近【${timeRange}】秒内错误数【${pvCount}】, 达到阈值【${maxErrorCount}】,触发报警, 报警备注【${note}】。`
          await this.sendAlert({
            redisKey,
            alarmInterval,
            alarmMsg
          })
        }
        break;
      case alertEum.ALERT_PAGE_UV: // uv
        const uvCount = await pageModel.getIsUCount({
          startTime,
          endTime,
          isUv: true,
          isIp: false,
          monitorAppId
        })
        if (this.contrastData(maxErrorCount, serviceType, uvCount) == true) {
          alarmMsg = `项目【${projectName}】监控的【${errorName}】错误， 最近【${timeRange}】秒内错误数【${uvCount}】, 达到阈值【${maxErrorCount}】,触发报警, 报警备注【${note}】。`
          await this.sendAlert({
            redisKey,
            alarmInterval,
            alarmMsg
          })
        }
        break;
      case ALERT_JS_ERROR:
        break;
      case ALERT_RESOURCE_ERROR:
        break;
      case ALERT_HTTP_LOG:
        break;
      case ALERT_PROMISE_ERROR:
        break;
      default:
    }
    
  }

  /**
   * 发送报警
   * @param {*} ucidList 
   * @param {*} message 
   */
  async sendAlert (data) {
    const { alarmMsg, redisKey, alarmInterval } = data
    // TODO: 发送告警

    // redis 记录
    await redis.asyncSetex(redisKey, alarmInterval, 1);
  }
}

export default WatchAlarm;
