import Base from "./base";
import moment from "moment";
import AlertModel from "../model/alert";
import AlarmHistoryModel from '../model/alarm_history_model'

const aleryModel = new AlertModel();
const aleryHistoryModel = new AlarmHistoryModel();

export default class AlertController extends Base {
  /**
   * 保存
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async alertSave(req, res) {
    let data = req.body || {},
      time = moment().format("YYYY-MM-DD HH:mm:ss"),
      result = {};

    const monitorAppId = req.get("MonitorAppId") || "";
    data.monitorAppId = monitorAppId;
    if (data.id == 0 || !data.id) {
      result = await aleryModel.save({
        ...data,
        startTime: time,
        updateTime: time,
        alertType:
          data.alertType && data.alertType.length > 0
            ? JSON.stringify(data.alertType)
            : JSON.stringify([]),
      });
    } else {
      let param = {
        ...data,
        updateTime: time,
        alertType:
          data.alertType && data.alertType.length > 0
            ? JSON.stringify(data.alertType)
            : JSON.stringify([]),
      };
      result = await aleryModel.update(param, param.id);
    }
    return this.send(res, result);
  }

  /**
   * 列表
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async alertList(req, res) {
    let data = req.body || {},
      result = {};

    const monitorAppId = req.get("MonitorAppId") || "";
    data.monitorAppId = monitorAppId;

    result.list = await aleryModel.getPages(data);
    result.count = await aleryModel.getPagesCount(data);
    result.list.forEach((item) => {
      item.alertType = item.alertType ? JSON.parse(item.alertType) : [];
    });
    return this.send(res, result);
  }

  /**
   * 获取历史告警记录
   * @param {*} req 
   * @param {*} res 
   * @returns 
   */
  async alertHistory(req, res) {
    let data = req.body || {},
    result = {};
    result.list = await aleryHistoryModel.getPages(data)
    result.count = await aleryHistoryModel.getPagesCount(data)
    return this.send(res, result);
  }
}
