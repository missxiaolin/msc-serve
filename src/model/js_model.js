import Knex from "../library/mysql";
import _ from "lodash";
import Logger from "../library/logger";
import * as config from "../config/err";

const BASE_TABLE_NAME = "js_log";
const TABLE_COLUMN = [];

const DISOLAYT_TABLE_COLUMN = [];

function getTableName() {
  return BASE_TABLE_NAME;
}

export default class JsModel {
  constructor() {
    this.tableColumnArr = [
      "monitorAppId",
      "ip",
      "userAgent",
      "uuId",
      "level",
      "category",
      "happenTime",
      "deviceType",
      "os",
      "browserInfo",
      "device",
      "deviceModel",
      "screenHeight",
      "screenWidth",
      "language",
      "netWork",
      "country",
      "province",
      "city",
      "pageUrl",
      "simpleUrl",
      "errorMsg",
      "line",
      "type",
      "col",
      "stackTraces",
      "componentName",
      "subType",
      "propsData",
      "hook",
      "componentNameTrace",
    ];
  }

  /**
   * 保存
   * @param {*} data
   * @returns
   */
  async save(data) {
    let tableName = getTableName();
    let insertData = {};
    for (let column of this.tableColumnArr) {
      insertData[column] = data[column] || "";
    }
    let insertResult = await Knex.returning("id")
      .insert(insertData)
      .into(tableName)
      .catch((err) => {
        console.log(err);
        Logger.log(err.message, "JsModel    add   出错");
        return [];
      });
    let id = _.get(insertResult, [0], 0);

    return id > 0;
  }

  /**
   * 分页
   * @param {*} data
   * @returns
   */
  async getPages(params) {
    let {
      pageUrl = "",
      startTime = "",
      endTime = "",
      errorMsg = "",
      pageSize = 10,
      page = 1,
    } = params;
    let tableName = getTableName();
    let res = Knex.select(this.tableColumnArr)
      .from(tableName)
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime);
    if (pageUrl) {
      res = res.andWhere("pageUrl", pageUrl);
    }
    if (errorMsg) {
      res = res.andWhere("errorMsg", errorMsg);
    }
    res = await res
    .orderBy("happenTime", "desc")
      .limit(pageSize)
      .offset(page * pageSize - pageSize)
      .catch((err) => {
        console.log(err);
        return [];
      });

    return res
  }

  /**
   * 分页总数
   * @param {*} params 
   * @returns 
   */
  async getPagesCount(params) {
    let { pageUrl = "", startTime = "", endTime = "", errorMsg = "" } = params;

    let tableName = getTableName();
    let res = Knex.from(tableName)
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime);
    if (pageUrl) {
      res = res.andWhere("pageUrl", pageUrl);
    }
    if (errorMsg) {
      res = res.andWhere("errorMsg", errorMsg);
    }
    res = await res.count("* as jsCount").catch((err) => {
      console.log(err);
      return 0;
    });

    return res[0].jsCount;
  }

  /**
   * 获取每小时数据
   * @returns
   */
  async getHoursCount(params) {
    let {
      pageUrl = "",
      startTime = "",
      endTime = "",
      errorMsg = "",
    } = params;

    let sql = `select DATE_FORMAT(happenTime,"%Y-%m-%d %H:00:00") as "hour", count("id") as count from js_log where happenTime > "${startTime}" and happenTime < "${endTime}"`;
    if (pageUrl) {
      sql = `${sql} pageUrl = "${pageUrl}"`
    }
    if (errorMsg) {
      sql = `${sql} errorMsg = "${errorMsg}"`
    }
    sql = `${sql} group by DATE_FORMAT(happenTime,"%Y-%m-%d %H:00:00")`
    let res = await Knex.raw(sql);
    return res[0];
  }
}
