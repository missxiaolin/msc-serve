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
        browser: {
          axisData: [],
          seriesData: [],
        },
        cregion: {
          axisData: [],
          seriesData: [],
        },
        device: {
          axisData: [],
          seriesData: [],
        },
        os: {
          axisData: [],
          seriesData: [],
        },
        screen: {
          axisData: [],
          seriesData: [],
        },
        simpleUrl: {
          axisData: [],
          seriesData: [],
        },
      };

    // simpleUrl
    let urls = await pageModel.getGroupByCount({
      startTime: data.startTime,
      endTime: data.endTime,
      selKey: "simpleUrl",
    });
    urls = urls.reverse();
    result.simpleUrl.axisData = urls.map((item) => item.simpleUrl);
    result.simpleUrl.seriesData = urls.map((item) => item.count);

    return this.send(res, result);
  }
}
