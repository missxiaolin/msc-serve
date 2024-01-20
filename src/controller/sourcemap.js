import Base from "./base";
import moment from "moment";
import SourcemapModel from "../model/sourcemap_model";

const fs = require("fs");
const { SourceMapConsumer } = require("source-map");
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
    if (!monitorAppId) {
      return this.send(res, {}, false, "请先选择项目，在进行配置！"); 
    }
    const file = req.file;
    
    let param = {
      monitorAppId,
      filename: file.filename,
      originalname: file.originalname,
      destination: file.destination,
      path: file.path,
      size: file.size,
      version: data.version,
      updateTime: startAt,
    };
    const sourcemap = await sourcemapModel.getFirst({
      monitorAppId: monitorAppId,
      version: data.version,
      filename: param.filename
    });
    if (sourcemap) {
      result = await sourcemapModel.update(
        {
          ...param,
        },
        sourcemap.id
      );
    } else {
      result = await sourcemapModel.save(param);
    }

    return this.send(res, result);
  }

  /**
   * 列表
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async sourcemapList(req, res) {
    let data = req.body || {},
      result = {};

    const monitorAppId = req.get("MonitorAppId") || "";
    data.monitorAppId = monitorAppId;
    result.list = await sourcemapModel.getPages(data);
    result.count = await sourcemapModel.getPagesCount(data);
    return this.send(res, result);
  }

  /**
   * 根据版本分组拿到所有结果
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async getAllGruopByVersion(req, res) {
    let data = req.body || {},
      result = [];
    const monitorAppId = req.get("MonitorAppId") || "";
    data.monitorAppId = monitorAppId;
    result = await sourcemapModel.getAllGruopByVersion(data);
    return this.send(res, result);
  }

  /**
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async SourcemapAnalysis(req, res) {
    let data = req.body || {},
      result = {};

    const monitorAppId = req.get("MonitorAppId") || "";
    data.monitorAppId = monitorAppId;
    const sourcemap = await sourcemapModel.getFirst({
      monitorAppId: monitorAppId,
      version: data.version,
      filename: data.filename
    });
    if (!sourcemap) {
      return this.send(res, {}, false, "未找到该版本文件(1000)");
    }
    if (fs.existsSync(`/${sourcemap.path}`)) {
      return this.send(res, {}, false, "未找到该版本文件(1001)");
    }
    // 读取 Source Map 文件
    const sourceMapData = fs.readFileSync(sourcemap.path, "utf-8");
    
    // 创建 SourceMapConsumer 对象
    SourceMapConsumer.with(
      sourceMapData,
      null,
      (consumer) => {
        // 通过调用 consumer.originalPositionFor() 方法获取原始代码中的位置信息
        const originalPosition = consumer.originalPositionFor({
          line: data.line,
          column: data.column,
        });

        // 输出原始位置信息
        console.log("originalPosition", originalPosition);
        // 这个是源码
        result.sourcesContent = JSON.parse(sourceMapData).sourcesContent[0];
        result.originalPosition = originalPosition
        return this.send(res, result);
      },
      (error) => {
        return this.send(res, {}, false, "错误解析失败");
      }
    );

    
  }
}
