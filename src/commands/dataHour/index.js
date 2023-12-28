import Base from "../base";
import moment from "moment";
import PageModel from "../../model/page_model";
import ProjectModel from "../../model/project";
import JsModel from '../../model/js_model';
import ResourceModel from '../../model/resource_model';
import DataHourModel from '../../model/data_hour_model';
import DATE_FORMAT from "../../constants/date_format";

const pageModel = new PageModel();
const projectModel = new ProjectModel();
const jsModel = new JsModel();
const resourceModel = new ResourceModel();
const dataHourModel = new DataHourModel();

class DataHour extends Base {
  static get signature() {
    return `
         Data:Hour
         `;
  }

  static get description() {
    return "[每个5分钟执行]， 分析刷新每小时数据";
  }

  /**
   * 脚本执行
   * @param {*} args
   * @param {*} options
   */
  async execute(args, options) {
    let startTime = moment().format(DATE_FORMAT.DISPLAY_BY_HOUR);
    let allProject = await projectModel.getStatusAll();
    allProject.forEach((item) => {
      this.save(
        {
          monitorAppId: item.monitorAppId,
          startTime: `${startTime}:00:00`,
          endTime: `${startTime}:59:59`,
        },
        `${startTime}:00:00`
      );
    });
  }

  /**
   * 存储数据
   * @param {*} data
   * @param {*} happenTime
   */
  async save(data, happenTime) {
    let updateData = {
      pvCount: await pageModel.getIsUCount({
        ...data,
        isUv: false,
      }),
      uvCount: await pageModel.getIsUCount({
        ...data,
        isUv: true,
      }),
      jsErrorCount: await jsModel.getPagesCount({
        ...data,
      }),
      resourceLinkCount: 0,
      resourceScriptCount: 0,
      resourceImgCount: 0,
    };
    let resourceCounts = await resourceModel.getHoursCount({
      ...data
    })
    resourceCounts.forEach(item => {
      if (item.resourceType == 'SCRIPT') {
        updateData.resourceScriptCount = item.count
      }
      if (item.resourceType == 'LINK') {
        updateData.resourceLinkCount = item.count
      }
      if (item.resourceType == 'IMG') {
        updateData.resourceImgCount = item.count
      }
    })
    dataHourModel.updateData(updateData, {
      happenTime,
      monitorAppId: data.monitorAppId,
    })
  }
}

export default DataHour;
