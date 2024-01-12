import Base from "./base";
import moment from "moment";
import AlertModel from "../model/alert";

const aleryModel = new AlertModel();

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
    if (data.id == 0 || !data.id) {
      result = await aleryModel.save({
        ...data,
        startTime: time,
        updateTime: time,
        alertType: data.alertType && data.alertType.length > 0 ? JSON.stringify(data.alertType) : JSON.stringify([])
      });
    } else {
      let param = {
        ...data,
        updateTime: time,
        alertType: data.alertType && data.alertType.length > 0 ? JSON.stringify(data.alertType) : JSON.stringify([])
      };
      result = await projectModel.update(param, param.id);
    }
    return this.send(res, result);
  }

  async alertList(req, res) {}
}
