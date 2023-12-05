import Base from "./base";
import _ from "lodash";
import PerformanceModel from "../model/performance_model";

const performanceModel = new PerformanceModel();

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
    let list = await performanceModel.getPages(data);
    let count = await performanceModel.getPagesCount(data);
    result.list = list;
    result.count = count;
    return this.send(res, result);
  }
}
