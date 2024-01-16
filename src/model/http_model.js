import Knex from "../library/mysql";
import _ from "lodash";
import Logger from "../library/logger";

const BASE_TABLE_NAME = "http_log";
const TABLE_COLUMN = [];

const DISOLAYT_TABLE_COLUMN = [];

function getTableName() {
  return BASE_TABLE_NAME;
}

export default class HttpModel {
  constructor() {
    this.tableColumnArr = [
      "monitorAppId",
      "category",
      "uuId",
      "level",
      "happenTime",
      "netWork",
      "ip",
      "country",
      "province",
      "city",
      "pageUrl",
      "simpleUrl",
      "duration",
      "method",
      "pathName",
      "requestText",
      "responseText",
      "httpOptions",
      "status",
      "timeout",
      "statusText",
      "type",
      "eventType",
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
      insertData[column] = data[column];
    }
    let insertResult = await Knex.returning("id")
      .insert(insertData)
      .into(tableName)
      .catch((err) => {
        console.log(err);
        Logger.log(err.message, "HttpModel    add   出错");
        return [];
      });
    let id = _.get(insertResult, [0], 0);

    return id;
  }

  /**
   * 获取id
   * @param {*} ids
   * @returns
   */
  async getIds(ids) {
    let select = this.tableColumnArr;
    select.push("id");
    let tableName = getTableName();
    let res = await Knex.select(this.tableColumnArr)
      .from(tableName)
      .select(select)
      .where("id", "in", ids);
    return res;
  }

  /**
   * 分页
   * @param {*} data
   * @returns
   */
  async getPages(params) {}

  /**
   * 获取表格数据
   * @param {*} params
   * @returns
   */
  async byPathNameCountPages(params) {
    let {
      simpleUrl = "",
      startTime = "",
      endTime = "",
      selKeys = "*",
      groupByKey = [],
      isUuIdDistinct = false,
      status = "",
      monitorAppId = "",
    } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName)
      .select(selKeys)
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime);
    if (monitorAppId) {
      res = res.andWhere("monitorAppId", monitorAppId);
    }
    if (simpleUrl) {
      res = res.andWhere("simpleUrl", simpleUrl);
    }
    if (status) {
      res = res.andWhere("status", status);
    }
    if (groupByKey && groupByKey.length > 0) {
      res = res.groupBy(groupByKey);
    }
    if (isUuIdDistinct) {
      res = res.countDistinct("uuId as count");
    } else {
      res = res.count("* as count");
    }

    res = await res;

    return res;
  }

  /**
   * 平均耗时
   * @param {*} params
   * @returns
   */
  async getAvgDuration(params) {
    let {
      simpleUrl = "",
      startTime = "",
      endTime = "",
      status = "",
      pathNames = [],
      monitorAppId = "",
    } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName)
      .select("pathName")
      .avg("duration as avgDuration")
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime);
    if (monitorAppId) {
      res = res.andWhere("monitorAppId", monitorAppId);
    }
    if (simpleUrl) {
      res = res.andWhere("simpleUrl", simpleUrl);
    }
    if (pathNames && pathNames.length > 0) {
      res = res.andWhere("pathName", "in", pathNames);
    }
    if (status) {
      res = res.andWhere("status", status);
    }
    res = res.groupBy("pathName");
    return await res;
  }

  /**
   * 报警用
   * @param {*} params
   * @returns
   */
  async getAlertCount(params) {
    let {
      startTime = "",
      endTime = "",
      monitorAppId = "",
      whereType = "sum",
      maxErrorCount = 0,
      serviceType = "=",
    } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName)
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime);
    if (monitorAppId) {
      res = res.andWhere("monitorAppId", monitorAppId);
    }
    if (whereType == "sum") {
      res = await res
        .andWhere("status", "!=", 200)
        .count("* as count")
        .catch((err) => {
          console.log(err);
          return 0;
        });
      return res[0].count;
    } else if (whereType == "single") {
      res = await res
        .andWhere("status", "!=", 200)
        .select(["pathName"])
        .count("* as count")
        .having("count", serviceType, maxErrorCount)
        .groupBy(["pathName"])
        .catch((err) => {
          console.log(err);
          return [];
        });
      return res;
    } else {
      return 0;
    }
  }
}
