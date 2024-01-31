import Logger from "../library/logger";
import * as error from "../constants/err";
import PerformanceModel from "../model/performance_model";
import ResourceModel from "../model/resource_model";
import PageModel from "../model/page_model";
import UserClickeModel from "../model/user_click_model";
import HttpModel from "../model/http_model";
import JsModel from "../model/js_model";
import PromiseLog from "../model/promise_log";
import RecordScreenModel from "../model/record_screen";
import Util from "./utils";
import fs from "fs";
import DATE_FORMAT from "../constants/date_format";
import moment from "moment";

const performanceModel = new PerformanceModel();
const resourceModel = new ResourceModel();
const pageModel = new PageModel();
const userClickeModel = new UserClickeModel();
const httpModel = new HttpModel();
const js_model = new JsModel();
const promise_log = new PromiseLog();
const recordScreenModel = new RecordScreenModel();

export default class ErrorSave {
  constructor() {}

  /**
   * 分类数据
   * @param {*} res
   */
  save(res) {
    let useData = res.data.lists;
    let data = {
      monitorAppId: res.data.appUid.monitorAppId || "",
      uuId: res.data.appUid.uuId || "",
      userAgent: res.data.deviceInfo.userAgent || "",
      deviceType: res.data.deviceInfo.deviceType || "",
      os: res.data.deviceInfo.OS || "",
      browserInfo: res.data.deviceInfo.browserInfo || "",
      device: res.data.deviceInfo.device || "",
      deviceModel: res.data.deviceInfo.deviceModel || "",
      screenHeight: res.data.deviceInfo.screenHeight || 0,
      screenWidth: res.data.deviceInfo.screenWidth || 0,
      language: res.data.deviceInfo.language || "",
      netWork: res.data.deviceInfo.netWork || "",
      country: res.cregion.country || "",
      province: res.cregion.province || "",
      city: res.cregion.city || "",
      ip: res.monitorIp || "",
    };
    useData.forEach(async (item) => {
      switch (item.category) {
        case error.JS_ERROR:
          data.level = item.level || "";
          data.category = item.category || "";
          data.happenDate = item.happenDate || "";
          data.happenTime = item.happenDate || "";
          data.pageUrl = item.pageUrl || "";
          data.simpleUrl = item.simpleUrl || "";
          data.errorMsg = item.errorMsg || "";
          data.line = item.line || 0;
          data.type = item.type || "";
          data.col = item.col || 0;
          data.stackTraces = item.stackTraces
            ? JSON.stringify(item.stackTraces)
            : "";
          data.componentName = item.componentName || "";
          data.subType = item.subType || "";
          data.propsData = item.propsData || "";
          data.hook = item.hook || "";
          data.componentNameTrace = item.componentNameTrace || "";
          const jsId = await js_model.save(data);
          break;
        case error.RESOURCE_ERROR:
          data.level = item.level || "";
          data.category = item.category || "";
          data.happenDate = item.happenDate || "";
          data.happenTime = item.happenDate || "";
          data.errorMsg = item.errorMsg || "";
          data.url = item.url || "";
          data.html = item.html || "";
          data.resourceType = item.resourceType || "";
          data.paths = item.paths || "";
          data.pageUrl = item.pageUrl || "";
          data.simpleUrl = item.simpleUrl || "";
          resourceModel.save(data);
          break;
        case error.HTTP_LOG:
          data.level = item.level || "";
          data.category = item.category || "";
          data.happenDate = item.happenDate || "";
          data.happenTime = item.happenDate || "";
          data.pageUrl = item.pageUrl || "";
          data.simpleUrl = item.simpleUrl || "";
          data.duration = item.duration || "";
          data.method = item.method || "";
          data.pathName = item.pathName || "";
          data.requestText =
            Util.getInstance().isType().isString(item.requestText) &&
            item.requestText
              ? item.requestText
              : Util.getInstance().isType().isPlainObject(item.requestText) &&
                item.requestText
              ? JSON.stringify(item.requestText)
              : "";
          data.responseText = item.responseText || "";
          data.httpOptions = item.httpOptions || "";
          data.status = item.status || "";
          data.timeout = item.timeout || "";
          data.statusText = item.statusText || "";
          data.type = item.type || "";
          data.eventType = item.eventType || "";
          if (data.requestText.length > 2000) {
            data.requestText = "内容过大";
          }
          if (data.responseText.length > 2000) {
            data.responseText = "内容过大";
          }
          const httpId = await httpModel.save(data);

          break;
        case error.USER_CLICK:
          data.level = item.level || "";
          data.category = item.category || "";
          data.happenDate = item.happenDate || "";
          data.happenTime = item.happenDate || "";
          data.pageUrl = item.pageUrl || "";
          data.simpleUrl = item.simpleUrl || "";
          data.tagName = item.tagName || "";
          data.top = item.top || "";
          data.left = item.left || "";
          data.eventType = item.eventType || "";
          data.pageHeight = item.pageHeight || "";
          data.subType = item.subType || "";
          data.startTime = item.startTime || "";
          data.innerHTML = item.innerHTML || "";
          data.viewport = item.viewport ? JSON.stringify(item.viewport) : "";
          data.targetInfo = item.targetInfo
            ? JSON.stringify(item.targetInfo)
            : "";
          const clickId = await userClickeModel.save(data);
          break;
        case error.PAGE_PV:
          data.level = item.level || "";
          data.category = item.category || "";
          data.happenDate = item.happenDate || "";
          data.happenTime = item.happenDate || "";
          data.pageUrl = item.pageUrl || "";
          data.simpleUrl = item.simpleUrl || "";
          data.to = item.to || "";
          data.from = item.from || "";
          data.subType = item.subType || "";
          data.duration = item.duration || "";
          data.startTime = item.startTime || "";
          data.referrer = item.referrer || "";
          data.type = item.type || "";
          const pageId = await pageModel.save(data);
          break;
        case error.PERFORMANCE:
          const sessionId = item.metrics.sessionId || "";
          for (let key in item.metrics.objs) {
            performanceModel.save({
              monitorAppId: data.monitorAppId,
              uuId: data.uuId,
              key,
              sessionId,
              score: item.metrics.objs[key].score || 0,
              numValue:
                Util.getInstance()
                  .isType()
                  .isNumeric(item.metrics.objs[key].value) &&
                item.metrics.objs[key].value
                  ? item.metrics.objs[key].value
                  : 0,
              textValue:
                (Util.getInstance()
                  .isType()
                  .isPlainObject(item.metrics.objs[key].value) ||
                  Util.getInstance()
                    .isType()
                    .isArray(item.metrics.objs[key].value)) &&
                item.metrics.objs[key].value
                  ? JSON.stringify(item.metrics.objs[key].value)
                  : "",
              simpleUrl:
                key == "page-information" &&
                item.metrics.objs[key].value.simpleUrl
                  ? item.metrics.objs[key].value.simpleUrl
                  : key == "wx-performance" || key == "ali-performance"
                  ? item.metrics.objs[key].page
                  : "",
              happenTime: item.happenDate,
            });
          }
          break;
        case error.PROMISE_ERROR:
          data.level = item.level || "";
          data.category = item.category || "";
          data.happenDate = item.happenDate || "";
          data.happenTime = item.happenDate || "";
          data.pageUrl = item.pageUrl || "";
          data.simpleUrl = item.simpleUrl || "";
          data.errorMsg =
            Util.getInstance().isType().isPlainObject(item.errorMsg) &&
            item.errorMsg.message
              ? item.errorMsg.message
              : Util.getInstance().isType().isString(item.errorMsg) &&
                item.errorMsg
              ? item.errorMsg
              : "";
          data.startTime = item.startTime || "";
          promise_log.save(data);
          break;
        case error.RECORD_SCREEN:
          if (!item.events) {
            return;
          }
          const dir = `uploads/video/${data.monitorAppId}`;
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }
          const fileNmae = `${data.uuId}-${
            item.sessionId
          }-${moment().valueOf()}.text`;
          const filePath = `${dir}/${fileNmae}`;
          if (fs.existsSync(filePath)) {
            return;
          }
          fs.writeFile(filePath, item.events, (err) => {
            if (err) {
              console.error("文件创建失败:", err);
            } else {
              data.level = item.level || "";
              data.category = item.category || "";
              data.happenDate = item.happenDate || "";
              data.happenTime = item.happenDate || "";
              data.pageUrl = item.pageUrl || "";
              data.simpleUrl = item.simpleUrl || "";
              data.url = filePath;
              recordScreenModel.save(data);
            }
          });
          
          break;
        default:
      }
    });
  }
}
