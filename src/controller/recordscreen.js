import Base from "./base";
import _ from "lodash";
import RecordScreenModel from "../model/record_screen";

const recordScreenModel = new RecordScreenModel();

/**
 * 首页
 */
export default class Recordscreen extends Base {
  /**
   * 列表
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async recordscreenList(req, res) {
    let data = req.body || {},
      result = {};
    const monitorAppId = req.get("MonitorAppId") || "";
    data.monitorAppId = monitorAppId;
    result.list = await recordScreenModel.getPages(data);
    result.count = await recordScreenModel.getPagesCount(data);
    return this.send(res, result);
  }
}
