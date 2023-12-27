import Knex from "../library/mysql";
import _ from "lodash";
import Logger from "../library/logger";
import * as config from "../config/err";

const BASE_TABLE_NAME = "performance_log";
const TABLE_COLUMN = [];

const DISOLAYT_TABLE_COLUMN = [];

function getTableName() {
  return BASE_TABLE_NAME;
}

export default class PerformanceModel {
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
      "pageUrl",
      "simpleUrl",
      "fcp",
      "fp",
      "fmp",
      "lcp",
      "nt",
      "rf",
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
        Logger.log(err.message, "PerformanceModel    add   出错");
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
      monitorAppId = "",
      pageSize = 10,
      page = 1,
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
    res = await res
      .orderBy("happenTime", "desc")
      .limit(pageSize)
      .offset(page * pageSize - pageSize)
      .catch((err) => {
        console.log(err);
        return [];
      });

    for (let item of res) {
      item.nt = item.nt ? JSON.parse(item.nt) : "";
      item.rf = item.rf ? JSON.parse(item.rf) : "";
      item.fcp = item.fcp ? JSON.parse(item.fcp) : "";
      item.fp = item.fp ? JSON.parse(item.fp) : "";
      item.fmp = item.fmp ? JSON.parse(item.fmp) : "";
      item.lcp = item.lcp ? JSON.parse(item.lcp) : "";
    }

    return res;
  }

  /**
   * 总数
   * @param {*} params
   * @returns
   */
  async getPagesCount(params) {
    let {
      pageUrl = "",
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
    res = await res.count("* as performanceCount").catch((err) => {
      console.log(err);
      return 0;
    });

    return res[0].performanceCount;
  }

  /**
   * 获取NT 平均数据
   * @param {*} params
   */
  async getAvgNtTimeDataSql(params) {
    let { simpleUrl = "", startTime = "", endTime = "", monitorAppId = "" } = params;
    let sql = `select avg(JSON_EXTRACT(nt,'$.FP')) as "FP", avg(JSON_EXTRACT(nt,'$.TTI')) as "TTI", avg(JSON_EXTRACT(nt,'$.DomReady')) as "DomReady", avg(JSON_EXTRACT(nt,'$.Load')) as "Load", avg(JSON_EXTRACT(nt,'$.FirseByte')) as "FirseByte", avg(JSON_EXTRACT(nt,'$.DNS')) as "DNS", avg(JSON_EXTRACT(nt,'$.TCP')) as "TCP", avg(JSON_EXTRACT(nt,'$.SSL')) as "SSL", avg(JSON_EXTRACT(nt,'$.TTFB')) as "TTFB", avg(JSON_EXTRACT(nt,'$.Trans')) as "Trans", avg(JSON_EXTRACT(nt,'$.DomParse')) as "DomParse", avg(JSON_EXTRACT(nt,'$.Res'))  as "Res" from performance_log where nt != "" and happenTime > "${startTime}" and happenTime < "${endTime}"`;
    if (monitorAppId) {
      sql = `${sql} and monitorAppId = "${monitorAppId}"`;
    }
    if (simpleUrl) {
      sql = `${sql} and simpleUrl = "${simpleUrl}"`;
    }
    let res = await Knex.raw(sql);
    if (res.length > 0) {
      return res[0];
    }

    return {};
  }

  /**
   * 获取FP 平均数据
   * @param {*} params
   */
  async getAvgFpTimeDataSql(params) {
    let { simpleUrl = "", startTime = "", endTime = "", monitorAppId = "" } = params;
    let sql = `select avg(JSON_EXTRACT(fp,'$.startTime')) as "startTime" from performance_log where fp != "" and happenTime > "${startTime}" and happenTime < "${endTime}"`;
    if (monitorAppId) {
      sql = `${sql} and monitorAppId = "${monitorAppId}"`;
    }
    if (simpleUrl) {
      sql = `${sql} and simpleUrl = "${simpleUrl}"`;
    }
    let res = await Knex.raw(sql);
    if (res.length > 0) {
      return res[0];
    }

    return {};
  }

  /**
   * 获取FCP 平均数据
   * @param {*} params
   */
  async getAvgFpTimeDataSql(params) {
    let { simpleUrl = "", startTime = "", endTime = "", monitorAppId = "" } = params;
    let sql = `select avg(JSON_EXTRACT(fcp,'$.startTime')) as "startTime" from performance_log where fcp != "" and happenTime > "${startTime}" and happenTime < "${endTime}"`;
    if (monitorAppId) {
      sql = `${sql} and monitorAppId = "${monitorAppId}"`;
    }
    if (simpleUrl) {
      sql = `${sql} and simpleUrl = "${simpleUrl}"`;
    }
    let res = await Knex.raw(sql);
    if (res.length > 0) {
      return res[0];
    }

    return {};
  }
}
