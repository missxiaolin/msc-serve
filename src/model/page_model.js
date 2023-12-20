import Knex from "../library/mysql";
import _ from "lodash";
import Logger from "../library/logger";
import * as config from "../config/err";

const BASE_TABLE_NAME = "page_log";
const TABLE_COLUMN = [];

const DISOLAYT_TABLE_COLUMN = [];

function getTableName() {
  return BASE_TABLE_NAME;
}

export default class PageModel {
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
      "to",
      "from",
      "subType",
      "duration",
      "startTime",
      "referrer",
      "type",
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
        Logger.log(err.message, "PageModel    add   出错");
        return [];
      });
    let id = _.get(insertResult, [0], 0);

    return id > 0;
  }

  /**
   * uv pv
   * @param {*} params
   * @returns
   */
  async getIsUCount(params) {
    let { startTime, endTime, isUv = false, isIp = false } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName)
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime);

    if (isUv) {
      res = await res.countDistinct("uuId as pageCount").catch((err) => {
        console.log(err);
        return [];
      });
    } else if (isIp) {
      res = await res.countDistinct("ip as pageCount").catch((err) => {
        console.log(err);
        return [];
      });
    } else {
      res = await res.count("* as pageCount").catch((err) => {
        console.log(err);
        return [];
      });
    }

    return res[0].pageCount;
  }

  /**
   * @param {*} params
   * @returns
   */
  async getCountGroupByUuid(params) {
    let { startTime, endTime } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName)
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime);
    res = await res
      .select("ip", "os", "device", "browserInfo", "userAgent")
      .count("* as pageCount")
      .groupBy("ip", "os", "device", "browserInfo", "userAgent");
    return res;
  }

  /**
   * @param {*} params
   * @returns
   */
  async getUuidCount(params) {
    let { agoDay, uuIds } = params;
    let tableName = getTableName();
    let res = await Knex.from(tableName)
      .countDistinct("uuId as pageCount")
      .where("happenTime", "<", agoDay)
      .andWhere("uuId", "in", uuIds);
    return res[0].pageCount;
  }

  /**
   * @param {*} params
   */
  async getUuid(params) {
    let { startTime, endTime } = params;
    let tableName = getTableName();
    let res = await Knex.from(tableName)
      .select("uuId")
      .distinct("uuId")
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime);
    return res;
  }

  /**
   * @param {*} params
   */
  async getGroupByCount(params) {
    let {
      startTime,
      endTime,
      limit = 0,
      selKeys = "*",
      groupByKey = [],
    } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName)
      .select(selKeys)
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime)
      .groupBy(groupByKey)
      .countDistinct("uuId as count")
      .orderBy("count", "desc")

    if (limit != 0) {
      res = res.limit(limit);
    }

    res = await res;
      
    return res;
  }

  /**
   * 分页
   * @param {*} data
   * @returns
   */
  async getPages(params) {}

  /**
   * 获取每小时数据 pv
   * @returns
   */
  async getHoursCountPv(params) {
    let { startTime = "", endTime = "" } = params;
    let sql = `select DATE_FORMAT(happenTime,"%Y-%m-%d %H:00:00") as "hour", count("id") as count from page_log where happenTime > "${startTime}" and happenTime < "${endTime}" group by DATE_FORMAT(happenTime,"%Y-%m-%d %H:00:00")`;
    let res = await Knex.raw(sql);
    return res[0];
  }

  /**
   * 获取每小时数据 uv
   * @param {*} params
   * @returns
   */
  async getHoursCountUv(params) {
    let { startTime = "", endTime = "" } = params;
    let sql = `select DATE_FORMAT(happenTime,"%Y-%m-%d %H:00:00") as "hour", count(distinct uuId) as count from page_log where happenTime > "${startTime}" and happenTime < "${endTime}" group by DATE_FORMAT(happenTime,"%Y-%m-%d %H:00:00")`;
    let res = await Knex.raw(sql);
    return res[0];
  }
}
