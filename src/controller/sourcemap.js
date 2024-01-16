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
   * {
  fieldname: 'file',
  originalname: 'web.esm.js.map',
  encoding: '7bit',
  mimetype: 'application/octet-stream',
  destination: 'uploads/adm/1.0.0',
  filename: 'web.esm.js.map',
  path: 'uploads/adm/1.0.0/web.esm.js.map',
  size: 333192
} */
  async sourcemapSave(req, res) {
    let data = req.body || {},
      startAt = moment().format("YYYY-MM-DD HH:mm:ss"),
      result = {};

    const monitorAppId = req.get("MonitorAppId") || "";
    const file = req.file;
    let param = {
        monitorAppId,
        filename: file.fieldname,
        originalname: file.originalname,
        destination: file.destination,
        path: file.path,
        size: file.size,
        version: data.version,
        updateTime: startAt
    }
    const sourcemap = await sourcemapModel.getFirst({
        monitorAppId: monitorAppId,
        version: data.version
    })
    if (sourcemap) {
        result = await sourcemapModel.update({
            ...param
        }, sourcemap.id);
    } else {
        result = await sourcemapModel.save(param)
    }

    return this.send(res, result);
  }
}
