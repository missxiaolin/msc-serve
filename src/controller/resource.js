import Base from "./base";
import _ from "lodash";
import ResourceModel from "../model/resource_model";

const resourceModel = new ResourceModel();

/**
 * 首页
 */
export default class Resource extends Base {
  /**
   * 性能列表
   * @param {*} req
   * @param {*} res
   */
  async list(req, res) {
    let data = req.body || {},
      result = {};
    result.list = await resourceModel.getPages(data)
    result.count = await resourceModel.getPagesCount(data);
    return this.send(res, result);
  }

  /**
   * 获取一个时间段数据
   * @param {*} req 
   * @param {*} res 
   * @returns 
   */
  async getGroupByHours(req, res) {
    let data = req.body || {},
      result = {};
    result.tb = await resourceModel.getHoursCount()
    return this.send(res, result);
  }
}
