import Base from "./base";
import _ from "lodash";
import PerformanceModel from "../model/performance_model";
import ProjectModel from "../model/project";

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
      result = {
        
      };
    const monitorAppId = req.get("MonitorAppId") || "";
    data.monitorAppId = monitorAppId;
    result.project = await projectModel.getMonitorAppIdDetail(monitorAppId)
    let list = await performanceModel.getPages(data);
    let count = await performanceModel.getPagesCount(data);
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
      result = {
        NT: {
          // FP: 112.73581351156976,
          // TTI: 659.8831901984818,
          // DomReady: 660.1176923116576,
          // Load: 899.733389456246,
          // FirseByte: 104.0733477525911,
          // DNS: 0.021755225993362964,
          // TCP: 2.9860884567463306,
          // SSL: 2.9713077955348317,
          // TTFB: 94.93051951485415,
          // Trans: 8.596136853923412,
          // DomParse: 239.8066455571626,
          // Res: 239.6070929860476,
        },
        FP: {
          // startTime: 362.73965088893215,
        },
        FCP: {
          // startTime: 1280.0842817435969,
        },
      };

    const monitorAppId = req.get("MonitorAppId") || "";
    data.monitorAppId = monitorAppId;
    let ntAvg = await performanceModel.getAvgNtTimeDataSql(data);
    let fpAvg = await performanceModel.getAvgFpTimeDataSql(data);
    let fcpAvg = await performanceModel.getAvgFpTimeDataSql(data);
    result.NT = ntAvg[0] || {};
    result.FP = fpAvg[0] || {};
    result.FCP = fcpAvg[0] || {};

    return this.send(res, result);
  }
}
