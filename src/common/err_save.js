import Logger from "../library/logger";
import * as error from "../config/err";
import PerformanceModel from "../model/performance_model";
import ResourceModel from '../model/resource_model';

const performanceModel = new PerformanceModel();
const resourceModel = new ResourceModel();
export default class ErrorSave {
  constructor() {}

  save(res) {
    let useData = res.data.lists;
    console.log(res)
    let data = {
      monitorAppId: res.data.appUid.monitorAppId || "",
      uuId: res.data.appUid.uuId || "",
      userAgent: res.data.deviceInfo.userAgent || "",
      deviceType: res.data.deviceInfo.deviceType || "",
      os: res.data.deviceInfo.OS || "",
      browserInfo: res.data.deviceInfo.browserInfo || "",
      device: res.data.deviceInfo.device || "",
      deviceModel: res.data.deviceInfo.deviceModel || "",
      screenHeight: res.data.deviceInfo.screenHeight || "",
      screenWidth: res.data.deviceInfo.screenWidth || "",
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
          resourceModel.save(data)
          break;
        case error.HTTP_LOG:
          break;
        case error.PAGE_PV:
          break;
        case error.PERFORMANCE:
          data.level = item.level || "";
          data.category = item.category || "";
          data.happenDate = item.happenDate || "";
          data.pageUrl = item.pageUrl || "";
          data.simpleUrl = item.simpleUrl || "";
          data.happenTime = item.happenDate || "";
          data.nt = item.NT ? JSON.stringify(item.NT) : "";
          data.rf = item.RF ? JSON.stringify(item.RF) : "";
          data.fcp = item.FCP ? JSON.stringify(item.FCP) : "";
          data.fp = item.FP ? JSON.stringify(item.FP) : "";
          data.fmp = item.FMP ? JSON.stringify(item.FMP): "";
          data.lcp = item.LCP ? JSON.stringify(item.LCP): "";
          performanceModel.save(data)
          break;
        default:
      }
    });
  }
}
