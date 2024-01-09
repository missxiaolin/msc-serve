import Logger from "../library/logger";
import * as error from "../config/err";
import PerformanceModel from "../model/performance_model";
import ResourceModel from "../model/resource_model";
import PageModel from "../model/page_model";
import UserClickeModel from "../model/user_click_model";
import HttpModel from "../model/http_model";
import JsModel from "../model/js_model";
import Util from "./utils";

const performanceModel = new PerformanceModel();
const resourceModel = new ResourceModel();
const pageModel = new PageModel();
const userClickeModel = new UserClickeModel();
const httpModel = new HttpModel();
const js_model = new JsModel();

export default class ErrorSave {
  constructor() {}

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
    useData.forEach((item) => {
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
          data.stackTraces = item.stackTraces ? JSON.stringify(item.stackTraces) : "";
          data.componentName = item.componentName || "";
          data.subType = item.subType || "";
          data.propsData = item.propsData || "";
          data.hook = item.hook || "";
          data.componentNameTrace = item.componentNameTrace || "";
          js_model.save(data);
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
          data.requestText = item.requestText || "";
          data.responseText = item.responseText || "";
          data.httpOptions  = item.httpOptions || "";
          data.status = item.status || "";
          data.timeout = item.timeout || "";
          data.statusText = item.statusText || "";
          data.type = item.type || "";
          data.eventType = item.eventType || "";
          httpModel.save(data)
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
          data.scrollTop = item.scrollTop || "";
          data.subType = item.subType || "";
          data.paths = item.paths || "";
          data.startTime = item.startTime || "";
          data.innerHTML = item.innerHTML || "";
          data.viewport = item.viewport ? JSON.stringify(item.viewport) : "";
          data.targetInfo = item.targetInfo ? JSON.stringify(item.targetInfo)  : "";
          userClickeModel.save(data);
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
          pageModel.save(data);
          break;
        case error.PERFORMANCE:
          for (let key in item.metrics) {
            performanceModel.save({
              monitorAppId: data.monitorAppId,
              uuId: data.uuId,
              key,
              score: item.metrics[key].score || 0,
              numValue: Util.getInstance().isType().isNumeric(item.metrics[key].value) && item.metrics[key].value ? item.metrics[key].value : 0,
              textValue: Util.getInstance().isType().isPlainObject(item.metrics[key].value) && item.metrics[key].value ? JSON.stringify(item.metrics[key].value) : '',
              happenTime: item.happenDate
            });
          }
          break;
        default:
      }
    });
  }
}
