import Base from "../base";
import moment from "moment";
import { betweenDateTimeAllHours } from "../../library/utils/index";
import ProjectModel from "../../model/project";
import DataHourModel from "../../model/data_hour_model";
import PageDataAnalysisModel from "../../model/page_analysis_model";

const projectModel = new ProjectModel();
const dataHourModel = new DataHourModel();
const pageDataAnalysisModel = new PageDataAnalysisModel();

class DataHourInit extends Base {
  static get signature() {
    return `
         Data:Table:Init
         `;
  }

  static get description() {
    return "[每天执行1次]， 初始化各类表数据";
  }

  /**
   * 脚本执行
   * @param {*} args
   * @param {*} options
   */
  async execute(args, options) {
    let time = moment().add(1, "day").format("YYYY-MM-DD");
    let dataHours = betweenDateTimeAllHours(
      `${time} 00:00:00`,
      `${time} 23:59:59`
    );
    let allProject = await projectModel.getStatusAll();
    allProject.forEach((item) => {
      dataHours.forEach((hour) => {
        // data_hour表数据初始化
        this.save({
          monitorAppId: item.monitorAppId,
          hour,
        });
      });
      this.savePageAnalysis({
        monitorAppId: item.monitorAppId,
        time,
      });
    });
  }

  /**
   * 每个小时的数据
   * @param {*} data
   */
  save(data) {
    dataHourModel.save({
      monitorAppId: data.monitorAppId,
      happenTime: data.hour,
      pvCount: 0,
      uvCount: 0,
      jsErrorCount: 0,
      resourceLinkCount: 0,
      resourceScriptCount: 0,
      resourceImgCount: 0,
    });
  }

  /**
   * 每天页面数据
   * @param {*} data
   */
  savePageAnalysis(data) {
    pageDataAnalysisModel.save({
      monitorAppId: data.monitorAppId,
      pvCount: 0,
      uvCount: 0,
      newUvCount: 0,
      ipCounct: 0,
      jumpCount: 0,
      visitFrequency: 0,
      happenTime: data.time,
    });
  }
}

export default DataHourInit;
