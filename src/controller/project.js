import Base from "./base";
import moment from "moment";
import ProjectModel from "../model/project";

const projectModel = new ProjectModel();

export default class Project extends Base {
  /**
   * 项目保存/编辑
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async projectSave(req, res) {
    let data = req.body || {},
      startAt = moment().format("YYYY-MM-DD HH:mm:ss"),
      result = {};

    if (data.id == 0 || !data.id) {
      result = await projectModel.save({
        ...data,
        startTime: startAt,
        updateTime: startAt,
        watch: JSON.stringify(data.watch),
      });
    } else {
      let param = {
        ...data,
        updateTime: startAt,
        watch: JSON.stringify(data.watch),
      };
      delete param.monitorAppId;
      result = await projectModel.update(param, param.id);
    }

    return this.send(res, result);
  }

  /**
   * 获取项目列表
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async projectList(req, res) {
    let data = req.body || {},
      result = {};

    result.list = await projectModel.getPages(data);
    result.count = await projectModel.getPagesCount(data);
    return this.send(res, result);
  }

  /**
   * 获取所有没有被禁用的项目
   * @param {*} req 
   * @param {*} res 
   * @returns 
   */
  async projectStatusAllList(req, res) {
    let data = req.body || {},
      result = {};

    result = await projectModel.getStatusAll();
    return this.send(res, result);
  }
}
