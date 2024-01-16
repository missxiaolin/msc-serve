import Base from "./base";
import moment from "moment";
import SourcemapModel from "../model/sourcemap_model";

const sourcemapModel = new SourcemapModel();

export default class SourcemapController extends Base {
  /**
   * 保存
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async sourcemapSave(req, res) {
    let data = req.body || {},
      result = {};

    const monitorAppId = req.get("MonitorAppId") || "";
    console.log(req.file)
    console.log(req.body)
    
    return this.send(res, result);
  }

  
}
