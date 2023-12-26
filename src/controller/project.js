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
        watch: JSON.stringify(data.watch)
      });

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
      startAt = moment().format("YYYY-MM-DD HH:mm:ss"),
      result = {};
    return this.send(res, result);
  }
}
