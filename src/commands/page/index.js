import Base from "../base";
import moment from "moment";
import PageModel from "../../model/page_model";
import PageDataAnalysisModel from "../../model/page_analysis_model";
import DATE_FORMAT from "../../constants/date_format";

const pageModel = new PageModel();
const pageDataAnalysisModel = new PageDataAnalysisModel();

class PageAnalysis extends Base {
  static get signature() {
    return `
         Page:Analysis
         {startTime:日志扫描范围上限格式}
         {endTime:日志扫描范围下限格式}
         `;
  }

  static get description() {
    return "[每个1小时的59分59秒执行]， 分析记录指定时间的页面分析";
  }

  /**
   * 脚本执行
   * @param {*} args
   * @param {*} options
   */
  async execute(args, options) {
    let { startTime, endTime } = args;
    if (!startTime || !endTime) {
      this.warn("参数不正确, 自动退出");
      return;
    }
    let result = {
      pvCount: await pageModel.getIsUCount({
        startTime,
        endTime,
        isUv: false,
        isIp: false,
      }),
      uvCount: await pageModel.getIsUCount({
        startTime,
        endTime,
        isUv: true,
        isIp: false,
      }),
      newUvCount: 0,
      ipCounct: await pageModel.getIsUCount({
        startTime,
        endTime,
        isUv: false,
        isIp: true,
      }),
      jumpCount: 0,
      visitFrequency: 0,
      happenTime: moment().format("YYYY-MM-DD"),
    };
    let lists = await pageModel.getCountGroupByUuid({
      startTime,
      endTime,
    })
    result.jumpCount = lists.filter(item => item.pageCount === 1).length; // 小时内跳出率
    result.visitFrequency = result.uvCount == 0 ? result.pvCount :  (result.pvCount / result.uvCount).toFixed(2) * 1 
    console.log(result);
    this.handleSavePage(result);
  }

  /**
   * 保存统计好的数据
   * @param {*} data
   */
  async handleSavePage(data) {
    let res = await pageDataAnalysisModel.getTimeData(data.happenTime);
    if (res && res.id) {
      // 修改
      await pageDataAnalysisModel.updateData(data, res.id);
    } else {
      // 保存
      await pageDataAnalysisModel.save(data);
    }
  }
}

export default PageAnalysis;
