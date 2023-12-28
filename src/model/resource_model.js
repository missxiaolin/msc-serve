import Knex from "../library/mysql";
import _ from "lodash";
import Logger from "../library/logger";
import * as config from "../config/err";

const BASE_TABLE_NAME = "resource_log";
const TABLE_COLUMN = [];

const DISOLAYT_TABLE_COLUMN = [];

function getTableName() {
  return BASE_TABLE_NAME;
}

export default class ResourceModel {
  constructor() {
    this.tableColumnArr = [
      "monitorAppId",
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
      "errorMsg",
      "url",
      "html",
      "resourceType",
      "paths",
      "pageUrl",
      "simpleUrl",
      "ip",
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
        Logger.log(err.message, "ResourceModel    add   出错");
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
      pageUrl = "", // 页面链接
      resourceType = "", // 资源类型
      url = "", // 资源链接
      startTime = "",
      endTime = "",
      pageSize = 10,
      page = 1,
      monitorAppId = "",
    } = params;
    let tableName = getTableName();
    let res = Knex.select(this.tableColumnArr)
      .from(tableName)
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime);
    if (monitorAppId) {
      res = res.andWhere("monitorAppId", monitorAppId);
    }
    if (pageUrl) {
      res = res.andWhere("pageUrl", pageUrl);
    }
    if (resourceType) {
      res = res.andWhere("resourceType", resourceType);
    }
    if (url) {
      res = res.andWhere("url", url);
    }
    res = await res
      .orderBy("happenTime", "desc")
      .limit(pageSize)
      .offset(page * pageSize - pageSize)
      .catch((err) => {
        console.log(err);
        return [];
      });
    return res;
  }

  /**
   * 总数
   * @param {*} params
   * @returns
   */
  async getPagesCount(params) {
    let {
      pageUrl = "", // 页面链接
      resourceType = "", // 资源类型
      url = "", // 资源链接
      startTime = "",
      endTime = "",
      monitorAppId = "",
    } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName)
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime);
    if (monitorAppId) {
      res = res.andWhere("monitorAppId", monitorAppId);
    }
    if (pageUrl) {
      res = res.andWhere("pageUrl", pageUrl);
    }
    if (resourceType) {
      res = res.andWhere("resourceType", resourceType);
    }
    if (url) {
      res = res.andWhere("url", url);
    }
    res = await res.count("* as resourceCount").catch((err) => {
      console.log(err);
      return [];
    });

    return res[0].resourceCount;
  }

  /**
   * 获取每小时数据
   * @returns
   */
  async getHoursCount(params) {
    let { startTime = "", endTime = "", monitorAppId = "" } = params;
    let sql = `select resourceType, DATE_FORMAT(happenTime,"%Y-%m-%d %H:00:00") as "hour", count("id") as count from resource_log where happenTime >= "${startTime}" and happenTime <= "${endTime}"`;
    if (monitorAppId) {
      sql = `${sql} and monitorAppId = "${monitorAppId}"`;
    }
    sql = `${sql} group by resourceType, DATE_FORMAT(happenTime,"%Y-%m-%d %H:00:00")`;
    let res = await Knex.raw(sql);
    return res[0];
  }
}
