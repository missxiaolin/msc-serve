import Base from "./base";
import HttpModel from "../model/http_model";

const httpModel = new HttpModel();

export default class RequestController extends Base {
  /**
   * api数据
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async byPathNameCount(req, res) {
    let data = req.body || {},
      result = {};

    let totalList = await httpModel.byPathNameCountPages({
      ...data,
      selKeys: ["pathName", "method"],
      groupByKey: ["pathName", "method"],
    });
    let pathNames = totalList.map(item => item.pathName)

    let successList = await httpModel.byPathNameCountPages({
      ...data,
      selKeys: ["pathName", "method"],
      groupByKey: ["pathName", "method"],
      status: 200,
    });
    let avgList = await httpModel.getAvgDuration({
        ...data,
        status: 200,
        pathNames
    })
    
    totalList.forEach(item => {
        // 成功数量
        successList.forEach(v => {
            if (item.pathName == v.pathName) {
                item.successCount = v.count
            }
        })
        // 平均耗时
        avgList.forEach(v => {
            if (item.pathName == v.pathName) {
                item.avgDuration = v.avgDuration.toFixed(2)
            }
        })
    })

    result = totalList

    return this.send(res, result);
  }
}
