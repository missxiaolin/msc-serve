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
      }),
      uvCount: await pageModel.getIsUCount({
        startTime,
        endTime,
        isUv: true,
      }),
      newUvCount: 0,
      ipCounct: 0,
      jumpCount: 0,
      visitFrequency: 0,
      happenTime: moment().format("YYYY-MM-DD"),
    };

    console.log(result)
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
