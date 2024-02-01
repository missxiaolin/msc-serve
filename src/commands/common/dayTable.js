import Base from "../base";
import moment from "moment";
import { betweenDateTimeAllHours } from "../../library/utils/index";
import ProjectModel from "../../model/project";
import DataHourModel from "../../model/data_hour_model"

const projectModel = new ProjectModel()
const dataHourModel = new DataHourModel()

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
    let time = moment().add(1, "day").format("YYYY-MM-DD")
    let dataHours = betweenDateTimeAllHours(`${time} 00:00:00`, `${time} 23:59:59`)
    let allProject = await projectModel.getStatusAll();
    allProject.forEach((item) => {
      dataHours.forEach((hour) => {
        // data_hour表数据初始化
        this.save({
          monitorAppId: item.monitorAppId,
          hour
        })
      })
      
    });
  }

  save(data) {
    dataHourModel.save({
      monitorAppId: data.monitorAppId,
      happenTime: data.hour,
      pvCount: 0,
      uvCount: 0,
      jsErrorCount: 0,
      resourceLinkCount: 0,
      resourceScriptCount: 0,
      resourceImgCount: 0
    })
  }
}

export default DataHourInit;
