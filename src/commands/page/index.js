import Base from "../base";
import moment from "moment";
import PageModel from "../../model/page_model";
import PageDataAnalysisModel from "../../model/page_analysis_model";
import ProjectModel from "../../model/project";
import DATE_FORMAT from "../../constants/date_format";

const pageModel = new PageModel();
const projectModel = new ProjectModel();
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
    let happenTime = moment().format("YYYY-MM-DD");
    let agoDay = moment(endTime)
      .subtract(1, "day")
      .format(DATE_FORMAT.DISPLAY_BY_SECOND);
    let allProject = await projectModel.getStatusAll();
    allProject.forEach((item) => {
      this.getPageData({
        item,
        agoDay,
        startTime,
        endTime,
        happenTime,
      });
    });
  }

  /**
   * 分析page数据
   * @param {*} data
   */
  async getPageData(data) {
    const { item, agoDay, startTime, endTime, happenTime } = data;
    let result = {
      pvCount: await pageModel.getIsUCount({
        startTime,
        endTime,
        isUv: false,
        isIp: false,
        monitorAppId: item.monitorAppId
      }),
      uvCount: await pageModel.getIsUCount({
        startTime,
        endTime,
        isUv: true,
        isIp: false,
        monitorAppId: item.monitorAppId
      }),
      newUvCount: 0,
      ipCounct: await pageModel.getIsUCount({
        startTime,
        endTime,
        isUv: false,
        isIp: true,
        monitorAppId: item.monitorAppId
      }),
      jumpCount: 0,
      visitFrequency: 0,
      happenTime: happenTime,
    };
    let lists = await pageModel.getCountGroupByUuid({
      startTime,
      endTime,
      monitorAppId: item.monitorAppId
    });
    result.jumpCount = lists.filter((item) => item.pageCount === 1).length; // 小时内跳出率
    result.visitFrequency =
      result.uvCount == 0
        ? result.pvCount
        : (result.pvCount / result.uvCount).toFixed(2) * 1;
    let uuIdList = await pageModel.getUuid({
      startTime,
      endTime,
      monitorAppId: item.monitorAppId
    });
    const newUuid = uuIdList.map((item) => item.uuId)
    if (uuIdList.length == 0) {
      result.newUvCount = 0;
    } else {
      let oldUuidCount = await pageModel.getUuidCount({
        agoDay,
        uuIds: newUuid,
        monitorAppId: item.monitorAppId
      });
      result.newUvCount = uuIdList.length - oldUuidCount;
    }
    result.monitorAppId = item.monitorAppId;
    this.handleSavePage(result);
  }

  /**
   * 保存统计好的数据
   * @param {*} data
   */
  async handleSavePage(data) {
    await pageDataAnalysisModel.updateDataMonitorAppIdTime(data, data.monitorAppId, data.happenTime);
  }
}

export default PageAnalysis;
