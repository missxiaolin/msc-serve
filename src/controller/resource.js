import Base from "./base";
import _ from "lodash";
import ResourceModel from "../model/resource_model";
import { betweenDateTimeAllHours } from "../library/utils/index";

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
    const monitorAppId = req.get("MonitorAppId") || "";
    data.monitorAppId = monitorAppId;
    result.list = await resourceModel.getPages(data);
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
    const monitorAppId = req.get("MonitorAppId") || "";
    data.monitorAppId = monitorAppId;
    let tbData = await resourceModel.getHoursCount(data);
    let imgTbData = {},
      linkTbData = {},
      scriptTbData = {};
    tbData.forEach((item) => {
      if (item.resourceType == "LINK") {
        linkTbData[item.hour] = item.count;
      }
      if (item.resourceType == "IMG") {
        imgTbData[item.hour] = item.count;
      }
      if (item.resourceType == "SCRIPT") {
        scriptTbData[item.hour] = item.count;
      }
    });
    let seriesData = [],
      imgData = [],
      linkData = [],
      scriptData = [];
    result.axisData = betweenDateTimeAllHours(data.startTime, data.endTime);
    result.seriesName = ["LINK", "IMG", "SCRIPT"];
    result.axisData.forEach((item) => {
      if (linkTbData[item]) {
        linkData.push(linkTbData[item]);
      } else {
        linkData.push(0);
      }
      if (imgTbData[item]) {
        imgData.push(imgTbData[item]);
      } else {
        imgData.push(0);
      }
      if (scriptTbData[item]) {
        scriptData.push(scriptTbData[item]);
      } else {
        scriptData.push(0);
      }
    });
    seriesData.push({ data: linkData });
    seriesData.push({ data: imgData });
    seriesData.push({ data: scriptData });
    result.seriesData = seriesData;
    return this.send(res, result);
  }
}
