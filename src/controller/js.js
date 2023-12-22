import Base from "./base";
import JsModel from "../model/js_model";
import { betweenDateTimeAllHours } from "../library/utils/index";

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
      result = {
        axisData: betweenDateTimeAllHours(data.startTime, data.endTime),
        seriesData: [],
        errorCount: await jsModel.getPagesCount(data),
        errorTypeList: await jsModel.getGroupByCount({
          ...data,
          selKeys: ["type"],
          groupByKey: ["type"],
        }),
        userList: await jsModel.getGroupByCount({
          ...data,
          selKeys: ["uuId"],
          groupByKey: ["uuId"],
        }),
        cregionList: await jsModel.getGroupByCount({
          ...data,
          selKeys: ["province"],
          groupByKey: ["province"],
        }),
        pageList: await jsModel.getGroupByCount({
          ...data,
          selKeys: ["pageUrl"],
          groupByKey: ["pageUrl"],
        }),
      };

    // 图表数据
    let hourData = await jsModel.getHoursCount(data);
    result.axisData.forEach((time) => {
      let value = 0;
      hourData.forEach((v) => {
        if (v.hour == time) {
          value = v.count;
        }
      });
      result.seriesData.push(value);
    });

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

  /**
   * js 按照errorMsg 进行分组
   * @param {*} req 
   * @param {*} res 
   * @returns 
   */
  async errorByErrormsg(req, res) {
    let data = req.body || {},
      result = [];
    let jsCounts = await jsModel.getGroupByCount({
      ...data,
      selKeys: ["errorMsg"],
      groupByKey: ["errorMsg"],
    })
    let errorMsgs = jsCounts.map((item) => item.errorMsg);
    let dataErrorMsg = await jsModel.getGroupByCount({
      startTime: data.startTime,
      endTime: data.endTime,
      simpleUrl: data.simpleUrl,
      selKeys: ["errorMsg"],
      groupByKey: ["errorMsg"],
      isUuIdDistinct: true
    })

    jsCounts.forEach(err => {
      let userCount = 0
      dataErrorMsg.forEach(item => {
        if (err.errorMsg == item.errorMsg) {
          userCount = item.count
        }
      })
      err.userCount = userCount
    })

    

    result = jsCounts
    return this.send(res, result);
  }
}
