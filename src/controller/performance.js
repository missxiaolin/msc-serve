import Base from "./base";
import _ from "lodash";
import PerformanceModel from "../model/performance_model";
import ProjectModel from "../model/project";
import Util from "../common/utils";

const performanceModel = new PerformanceModel();
const projectModel = new ProjectModel();

/**
 * 首页
 */
export default class Performance extends Base {
  /**
   * 性能列表
   * @param {*} req
   * @param {*} res
   */
  async list(req, res) {
    let data = req.body || {},
      result = {};
    const monitorAppId = req.get("MonitorAppId") || "";
    data.monitorAppId = monitorAppId;
    const project = await projectModel.getMonitorAppIdDetail(monitorAppId);
    result.project = project;
    if (!project) {
      return this.send(res, {}, false, "未找到项目");
    }
    let list = await performanceModel.getPages({
      ...data,
      key:
        project.projectType == 1
          ? "page-information"
          : project.projectType == 2
          ? "wx-performance"
          : "",
    });
    let sessionIds = list.map((item) => item.sessionId);
    let performances = await performanceModel.getPerformances(sessionIds);
    list.forEach((pageItem) => {
      if (
        pageItem.textValue &&
        Util.getInstance().isType().isString(pageItem.textValue)
      ) {
        pageItem.textValue = JSON.parse(pageItem.textValue);
      }
      performances.forEach((p) => {
        if (p.textValue && Util.getInstance().isType().isString(p.textValue)) {
          p.textValue = JSON.parse(p.textValue);
        }
        if (pageItem.sessionId == p.sessionId) {
          pageItem[p.key] = p;
        }
      });
    });

    let count = await performanceModel.getPagesCount({
      ...data,
      key:
        project.projectType == 1
          ? "page-information"
          : project.projectType == 2
          ? "wx-performance"
          : "",
    });
    result.list = list;

    result.count = count;
    return this.send(res, result);
  }

  /**
   * 页面平均性能
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async pageAvgDetail(req, res) {
    let data = req.body || {},
      result = {};

    const monitorAppId = req.get("MonitorAppId") || "";
    data.monitorAppId = monitorAppId;
    result.project = await projectModel.getMonitorAppIdDetail(monitorAppId);
    if (result.project.projectType == 1) {
      let sItems = await performanceModel.getSessionIds({
        ...data,
        key: "page-information",
      });
      let sessionIds = sItems.map((item) => item.sessionId);
      if (sessionIds.length != 0) {
        let nt = await performanceModel.getAvgNtTimeDataSql({
          ...data,
          sessionIds,
        });
        result.nt = nt[0];
        const fpNum = await performanceModel.getAvgKey({
          ...data,
          key: "first-paint",
        });
        result.fp = {
          value: fpNum[0].numValue || 0,
        };
      } else {
        result.nt = {
          dnsLookup: 0,
          initialConnection: 0,
          ssl: 0,
          ttfb: 0,
          contentDownload: 0,
          domParse: 0,
          deferExecuteDuration: 0,
          domContentLoadedCallback: 0,
          resourceLoad: 0,
          domReady: 0,
          pageLoad: 0,
        };
        result.fp = 0;
      }
    }

    if (result.project.projectType == 2) {
      let nt = await performanceModel.getWxAvgNtTimeDataSql({
        ...data,
      });
      result.nt = nt[0];
    }

    return this.send(res, result);
  }
}
