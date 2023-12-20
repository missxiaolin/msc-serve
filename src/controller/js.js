import Base from "./base";

import JsModel from "../model/js_model";

const jsModel = new JsModel();

/**
 * 首页
 */
export default class JsController extends Base {
  /**
   * js 图表
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async jsEchart(req, res) {
    let data = req.body || {},
      result = {};

    return this.send(res, result);
  }

  /**
   * 表格
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async jsList(req, res) {
    let data = req.body || {},
      result = {
        list: await jsModel.getPages(data),
        count: await jsModel.getPagesCount(data),
      };

    return this.send(res, result);
  }
}
