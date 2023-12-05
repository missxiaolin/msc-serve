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
    res = await res
      .limit(pageSize)
      .offset(page * pageSize - pageSize)
      .catch((err) => {
        console.log(err);
        return [];
      });

    for (let item of res) {
      item.nt = JSON.parse(item.nt)
      item.rf = JSON.parse(item.rf)
    }

    return res;
  }

  /**
   * 总数
   * @param {*} params
   * @returns
   */
  async getPagesCount(params) {
    let { pageUrl = "", startTime = "", endTime = "" } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName)
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime);
    if (pageUrl) {
      res = res.andWhere("pageUrl", pageUrl);
    }
    res = await res.count("* as performanceCount").catch((err) => {
      console.log(err);
      return [];
    });

    return res[0].performanceCount;
  }
}
