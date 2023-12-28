import Base from "../base";
import moment from "moment";
import PageModel from "../../model/page_model";
import PageDataAnalysisModel from "../../model/page_analysis_model";
import ProjectModel from "../../model/project";
import DATE_FORMAT from "../../constants/date_format";

const pageModel = new PageModel();
const projectModel = new ProjectModel();
const pageDataAnalysisModel = new PageDataAnalysisModel();

class DataHour extends Base {
  static get signature() {
    return `
         Data:Hour
         `;
  }

  static get description() {
    return "[每个5分钟执行]， 分析记录每小时数据";
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

}

export default DataHour;
