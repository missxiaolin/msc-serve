import Base from "./base";
import UserBehaviorModel from "../model/user_behavior";
import PageModel from "../model/page_model";
import JsModel from "../model/js_model";
import HttpModel from "../model/http_model";
import UserClickeModel from "../model/user_click_model";

const pageModel = new PageModel();
const jsModel = new JsModel();
const httpModel = new HttpModel();
const userClickeModel = new UserClickeModel();
const userBehavior = new UserBehaviorModel();

export default class User extends Base {
  /**
   * 获取用户记录
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async getUserBehavior(req, res) {
    let data = req.body || {},
      result = {};

    const monitorAppId = req.get("MonitorAppId") || "";
    data.monitorAppId = monitorAppId;
    result.pageDetail = await pageModel.getPageDetail(data);
    let userList = await userBehavior.getPages(data);
    let jsId = [],
      jsList = [],
      pageId = [],
      pageList = [],
      httpId = [],
      httpList = [],
      clickId = [],
      clickList = [];
    userList.forEach((item) => {
      switch (item.category) {
        case "PAGE_CHANGE":
          pageId.push(item.tb_id);
          break;
        case "USER_CLICK":
          clickId.push(item.tb_id);
          break;
        case "HTTP_LOG":
          httpId.push(item.tb_id);
          break;
        case "JS_ERROR":
          jsId.push(item.tb_id);
          break;
        default:
      }
    });
    if (jsId.length > 0) {
      jsList = await jsModel.getIds(jsId);
    }
    if (pageId.length > 0) {
      pageList = await pageModel.getIds(pageId);
    }
    if (httpId.length > 0) {
      httpList = await httpModel.getIds(httpId);
    }
    if (clickId.length > 0) {
      clickList = await userClickeModel.getIds(clickId);
    }

    userList.forEach((item, index) => {
      jsList.forEach((jsItem) => {
        if (item.tb_id == jsItem.id) {
          userList[index] = Object.assign(item, jsItem);
        }
      });
      pageList.forEach((pageItem) => {
        if (item.tb_id == pageItem.id) {
          userList[index] = Object.assign(item, pageItem);
        }
      });
      httpList.forEach((httpItem) => {
        if (item.tb_id == httpItem.id) {
          userList[index] = Object.assign(item, httpItem);
        }
      });
      clickList.forEach((clickItem) => {
        if (item.tb_id == clickItem.id) {
          userList[index] = Object.assign(item, clickItem);
        }
      });
    });

    result.userList = userList;
    result.count = await userBehavior.getPagesCount(data);

    return this.send(res, result);
  }
}
