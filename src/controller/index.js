import Base from "./base";
import moment from "moment";
import _ from "lodash";
import ErrorSave from "../common/err_save";
import LIpip from "../library/ipip";

const errprSave = new ErrorSave();

/**
 * 首页
 */
export default class Index extends Base {
  /**
   * 保存
   * @param {*} req
   * @param {*} res
   */
  index(req, res) {
    let data = req.body || {},
      startAt = moment().format("YYYY-MM-DD HH:mm:ss"),
      endAt = moment().format("YYYY-MM-DD HH:mm:ss");

    data.createdAt = startAt;
    data.updatedAt = endAt;
    data.dataDay = moment().format("YYYY-MM-DD");
    data.monitorIp = LIpip.getIp(req) || "";
    if (data.monitorIp) {
      data.cregion = LIpip.ip2Locate(data.monitorIp) || "";
    }
    errprSave.save(data);
    return this.send(res, { title: "保存成功" });
  }
}
