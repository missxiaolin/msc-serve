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
            data: []
        }, {
            data: []
        }
      ];
    let pvData = await pageModel.getHoursCountPv({
        startTime: data.startTime,
        endTime: data.endTime
    })
    let uvData = await pageModel.getHoursCountUv({
        startTime: data.startTime,
        endTime: data.endTime
    })
    pvData.forEach(item => {
        result.pvTotal = result.pvTotal + item.count
    })
    uvData.forEach(item => {
        result.uvTotal = result.uvTotal + item.count
    })

    result.axisData = betweenDateTimeAllHours(data.startTime, data.endTime);

    result.axisData.forEach(item => {
        pvData.forEach(v => {
            if (v.hour == item) {
                seriesData[0].data.push(v.count)
            } else {
                seriesData[0].data.push(0)
            }
        })
        uvData.forEach(v => {
            if (v.hour == item) {
                seriesData[1].data.push(v.count)
            } else {
                seriesData[1].data.push(0)
            }
        })
    })
    result.seriesData = seriesData

    return this.send(res, result);
  }
}
