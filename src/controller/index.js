import Base from "./base";
import moment from "moment";
import _ from "lodash";
import ErrorSave from "../common/err_save";
import LIpip from "../library/ipip";
import config from "../config/common";
import md5 from "md5";
import AdmUser from "../model/adm_user";
import ProjectModel from "../model/project";
import Token from "../library/utils/token";
import PageDataAnalysisModel from "../model/page_analysis_model";

const errprSave = new ErrorSave();
const admUser = new AdmUser();
const pageDataAnalysisModel = new PageDataAnalysisModel();
const projectModel = new ProjectModel();

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
        userId: user.id,
        token: Token.encrypt({ id: user.id }),
        projectAll: await projectModel.getStatusAll(),
      });
    } else {
      return this.send(res, {}, false, "账号密码错误");
    }
  }

  /**
   * 首页头部数据
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async analyseCore(req, res) {
    let data = req.body || {},
      result = {
        todayData: {},
        yesterdayData: {},
      },
      { analyseTime } = data;

    const monitorAppId = req.get("MonitorAppId") || "";
    analyseTime = moment(analyseTime).format("YYYY-MM-DD");
    const preDate = moment(analyseTime)
      .subtract(1, "days")
      .format("YYYY-MM-DD");

    const pageData = await pageDataAnalysisModel.getTimeInData(
      [analyseTime, preDate],
      monitorAppId
    );

    pageData.forEach((item) => {
      if (item.happenTime == preDate) {
        result.yesterdayData = item;
      }
      if (item.happenTime == analyseTime) {
        result.todayData = item;
      }
    });

    return this.send(res, result);
  }
}
