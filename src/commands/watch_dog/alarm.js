import moment from "moment";
import Base from "../base";
import AlertModel from "../../model/alert";
import DATE_FORMAT from "../../constants/date_format";
import { isHourSlot } from "../../library/utils";

const alertModel = new AlertModel();
const BASE_REDIS_KEY = "plat_fe_fee_watch_alarm_";

class WatchAlarm extends Base {
  constructor() {
    super();
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
        endHour
      } = alarmConfig;
      // 不在当前时间段就停止往下运行
      if (
        !isHourSlot(timeHourSecond, startHour, endHour)
      ) {
        console.log(
          `项目${projectId}，${errorName}监听的不在时间段${startHour}-${endHour}，自动跳过`
        );
      }
    }
  }
}

export default WatchAlarm;
