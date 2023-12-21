import Base from "./base";
import moment from "moment";
import _ from "lodash";
import PageModel from "../model/page_model";
import { betweenDateTimeAllHours } from "../library/utils/index";

const pageModel = new PageModel();

/**
 * 页面数据
 */
export default class PageIndex extends Base {
  /**
   * 获取uv pv 图表
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async getGroupByHours(req, res) {
    let data = req.body || {},
      result = {
        pvTotal: 0,
        uvTotal: 0,
      },
      seriesData = [
        {
          data: [],
        },
        {
          data: [],
        },
      ];
    let pvData = await pageModel.getHoursCountPv({
      startTime: data.startTime,
      endTime: data.endTime,
    });
    let uvData = await pageModel.getHoursCountUv({
      startTime: data.startTime,
      endTime: data.endTime,
    });
    pvData.forEach((item) => {
      result.pvTotal = result.pvTotal + item.count;
    });
    uvData.forEach((item) => {
      result.uvTotal = result.uvTotal + item.count;
    });

    result.axisData = betweenDateTimeAllHours(data.startTime, data.endTime);

    result.axisData.forEach((item) => {
      let pD = 0;
      pvData.forEach((v) => {
        if (v.hour == item) {
          pD = v.count;
        }
      });
      seriesData[0].data.push(pD);
      let uD = 0;
      uvData.forEach((v) => {
        if (v.hour == item) {
          uD = v.count;
        }
      });
      seriesData[1].data.push(uD);
    });
    result.seriesData = seriesData;

    return this.send(res, result);
  }

  /**
   * 获取各个维度的count
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async getGropyBuUuId(req, res) {
    let data = req.body || {},
      result = {
        simpleUrl: {
          // 页面
          axisData: [],
          seriesData: [],
        },
        browser: {
          // 浏览器版本
          axisData: [],
          seriesData: [],
        },
        cregion: {
          // 城市
          axisData: [],
          seriesData: [],
        },
        device: {
          // 浏览设备
          axisData: [],
          seriesData: [],
        },
        os: {
          // 系统版本
          axisData: [],
          seriesData: [],
        },
        screen: {
          // 设备分辨率
          axisData: [],
          seriesData: [],
        },
      };

    // url
    let urls = await pageModel.getGroupByCount({
      startTime: data.startTime,
      endTime: data.endTime,
      limit: data.limit || 30,
      selKeys: ["simpleUrl"],
      groupByKey: ["simpleUrl"],
    });
    urls = urls.reverse();
    result.simpleUrl.axisData = urls.map((item) => item.simpleUrl);
    result.simpleUrl.seriesData = urls.map((item) => item.count);

    // 城市
    let cregions = await pageModel.getGroupByCount({
      startTime: data.startTime,
      endTime: data.endTime,
      limit: data.limit || 30,
      selKeys: ["country", "province", "city"],
      groupByKey: ["country", "province", "city"],
    });
    cregions = cregions.reverse();
    result.cregion.axisData = cregions.map(
      (item) => `${item.country} ${item.province} ${item.city}`
    );
    result.cregion.seriesData = cregions.map((item) => item.count);

    // 浏览器设备
    let devices = await pageModel.getGroupByCount({
      startTime: data.startTime,
      endTime: data.endTime,
      limit: data.limit || 30,
      selKeys: ["device"],
      groupByKey: ["device"],
    });
    devices = devices.reverse();
    result.device.axisData = devices.map((item) => item.device);
    result.device.seriesData = devices.map((item) => item.count);

    // 系统版本
    let oss = await pageModel.getGroupByCount({
      startTime: data.startTime,
      endTime: data.endTime,
      limit: data.limit || 30,
      selKeys: ["os"],
      groupByKey: ["os"],
    });

    oss = oss.reverse();
    result.os.axisData = oss.map((item) => item.os);
    result.os.seriesData = oss.map((item) => item.count);

    // 系统版本
    let browsers = await pageModel.getGroupByCount({
      startTime: data.startTime,
      endTime: data.endTime,
      limit: data.limit || 30,
      selKeys: ["browserInfo"],
      groupByKey: ["browserInfo"],
    });

    browsers = browsers.reverse();
    result.browser.axisData = browsers.map((item) => item.browserInfo);
    result.browser.seriesData = browsers.map((item) => item.count);

    let screens = await pageModel.getGroupByCount({
      startTime: data.startTime,
      endTime: data.endTime,
      limit: data.limit || 30,
      selKeys: ["screenWidth", "screenHeight"],
      groupByKey: ["screenWidth", "screenHeight"],
    });

    screens = screens.reverse();
    result.screen.axisData = screens.map(
      (item) => `${item.screenWidth}x${item.screenHeight}`
    );
    result.screen.seriesData = screens.map((item) => item.count);

    return this.send(res, result);
  }

  /**
   * 世界地图图表
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async groupByCity(req, res) {
    let data = req.body || {},
      result = [];

    // 城市
    let cregions = await pageModel.getGroupByCount({
      startTime: data.startTime,
      endTime: data.endTime,
      selKeys: ["country", "province", "city"],
      groupByKey: ["country", "province", "city"],
    });
    cregions.forEach((item) => {
      let obj = {
        name: `${item.country} ${item.province} ${item.city}`,
        value: item.count,
      };
      result.push(obj);
    });
    return this.send(res, result);
  }

  /**
   * 页面列表
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async pageList(req, res) {
    let data = req.body || {},
      result = {};

    result.list = await pageModel.getGroupPages(data)
    result.count = await pageModel.getPagesGroupCount(data)
    return this.send(res, result);
  }
}
