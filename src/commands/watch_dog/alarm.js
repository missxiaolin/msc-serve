import moment from "moment";
import Base from "../base";
import AlertModel from "../../model/alert";
import DATE_FORMAT from "../../constants/date_format";
import utils, { isHourSlot } from "../../library/utils";
import redis from "../../library/redis";

const alertModel = new AlertModel();
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
        project_id: projectId,
        error_name: errorName,
        time_range_s: timeRange,
        max_error_count: maxErrorCount,
        alarm_interval_s: alarmInterval,
        note,
        startHour,
        endHour,
      } = alarmConfig;
      const redisKey = getRedisKey(id);
      const hasAlertInAlarmInterval = await redis.asyncGet(redisKey);

      if (!isHourSlot(timeHourSecond, startHour, endHour)) {
        // 不在当前时间段就停止往下运行
        console.log(
          `项目${projectId}，${errorName}监听的不在时间段${startHour}-${endHour}，自动跳过`
        );
      } else if (hasAlertInAlarmInterval) {
        // 静默时间
        console.log(
          `项目${projectId}监听的${errorName}错误在${timeRange}秒内报警过，自动跳过`
        );
      } else {
        let waitForDispatch = true;
        let sleepCounter = 0;
        while (waitForDispatch) {
          if (this.currentQueryCounter < MAX_QUERY_COUNT) {
            // 查询
            this.autoAlarm(
              projectId,
              errorName,
              timeRange,
              maxErrorCount,
              alarmInterval,
              redisKey,
              note,
              id
            )
              .then(() => {
                this.currentQueryCounter = this.currentQueryCounter - 1
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
   * 报警
   * @param {*} projectId 
   * @param {*} errorName 
   * @param {*} timeRange 
   * @param {*} maxErrorCount 
   * @param {*} alarmInterval 
   * @param {*} redisKey 
   * @param {*} note 
   * @param {*} configId 
   */
  async autoAlarm (projectId, errorName, timeRange, maxErrorCount, alarmInterval, redisKey, note, configId) {
    const nowAt = moment().unix()
    const timeAgoAt = nowAt - timeRange
    // const errorCount = await MMonitor.getErrorCountForAlarm(projectId, errorName, timeAgoAt, nowAt)


    await redis.asyncSetex(redisKey, alarmInterval, 1)
  }
}

export default WatchAlarm;
