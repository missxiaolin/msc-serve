import Base from "./base";
import _ from "lodash";
import RecordScreenModel from "../model/record_screen";
import fs from 'fs'

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

  /**
   * 解析视频返回
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async recordscreenGetVideo(req, res) {
    let data = req.body || {},
      result = {};
    
    result = await recordScreenModel.getIdDetail(data)
    result.events = fs.readFileSync(`${result.url}`, 'utf8');
    return this.send(res, result);
  }
}
