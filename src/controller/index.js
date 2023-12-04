import Base from "./base";
import moment from "moment";
import _ from "lodash";
import ErrorSave from "../common/err_save";
import LIpip from "../library/ipip";
import config from "../config/common";
import md5 from "md5";
import AdmUser from "../model/adm_user";
import Token from "../library/utils/token";

const errprSave = new ErrorSave();
const admUser = new AdmUser();

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
    if (config.use.mq) {
      mq.sendQueueMsg(
        "webLogSave",
        JSON.stringify(data) || {},
        (res) => {},
        (error) => {}
      );
    }
    if (!config.use.mq) {
      errprSave.save(data);
    }
    return this.send(res, { title: "保存成功" });
  }

  /**
   * adm 登录
   * @param {*} req
   * @param {*} res
   */
  async login(req, res) {
    let data = req.body || {};
    if (!data.username || !data.password) {
      return this.send(res, {}, false, "账号密码错误");
    }
    data.password = md5(data.password);
    let user = await admUser.getUser(data);
    if (user.id) {
      return this.send(res, {
        token: Token.encrypt({ id: user.id }),
      });
    } else {
      return this.send(res, {}, false, "账号密码错误");
    }
  }
}
