import Knex from "../library/mysql";
import _ from "lodash";
import Logger from "../library/logger";

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
      insertData[column] = data[column];
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
  async getPages(params) {
    let {
      pageUrl = "",
      startTime = "",
      endTime = "",
      errorMsg = "",
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

    return res;
  }

  /**
   * 分页总数
   * @param {*} params
   * @returns
   */
  async getPagesCount(params) {
    let {
      pageUrl = "",
      startTime = "",
      endTime = "",
      errorMsg = "",
      simpleUrl = "",
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
    if (simpleUrl) {
      res = res.andWhere("simpleUrl", simpleUrl);
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
      serviceType = '='
    } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName)
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime);
    if (monitorAppId) {
      res = res.andWhere("monitorAppId", monitorAppId);
    }
    if (whereType == "sum") {
      res = await res.count("* as count").catch((err) => {
        console.log(err);
        return 0;
      });
      return res[0].count;
    } else if (whereType == "single") {
      res = await res
        .select(["errorMsg"])
        .count("* as count")
        .having("count", serviceType, maxErrorCount)
        .groupBy(["errorMsg"])
        .catch((err) => {
          console.log(err);
          return [];
        });
      return res;
    } else {
      return 0;
    }
  }

  /**
   * @param {*} params
   */
  async getGroupByCount(params) {
    let {
      startTime,
      endTime,
      limit = 0,
      pageUrl = "",
      simpleUrl = "",
      errorMsg = "",
      monitorAppId = "",
      selKeys = "*",
      groupByKey = [],
      errorMsgs = [],
      isUuIdDistinct = false,
    } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName)
      .select(selKeys)
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime);

    if (monitorAppId) {
      res = res.andWhere("monitorAppId", monitorAppId);
    }
    if (pageUrl) {
      res = res.andWhere("pageUrl", pageUrl);
    }
    if (simpleUrl) {
      res = res.andWhere("simpleUrl", simpleUrl);
    }
    if (errorMsg) {
      res = res.andWhere("errorMsg", errorMsg);
    }
    if (errorMsgs && errorMsgs.length > 0) {
      res = res.andWhere("errorMsg", "in", errorMsgs);
    }
    if (isUuIdDistinct) {
      res = res.countDistinct("uuId as count");
    } else {
      res = res.count("* as count");
    }
    if (groupByKey && groupByKey.length > 0) {
      res = res.groupBy(groupByKey);
    }

    if (limit != 0) {
      res = res.limit(limit);
    }

    res = await res;

    return res;
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
      simpleUrl = "",
      monitorAppId = "",
    } = params;

    let sql = `select DATE_FORMAT(happenTime,"%Y-%m-%d %H:00:00") as "hour", count("id") as count from js_log where happenTime > "${startTime}" and happenTime < "${endTime}"`;
    if (monitorAppId) {
      sql = `${sql} and monitorAppId = "${monitorAppId}"`;
    }
    if (pageUrl) {
      sql = `${sql} and pageUrl = "${pageUrl}"`;
    }
    if (simpleUrl) {
      sql = `${sql} and simpleUrl = "${simpleUrl}"`;
    }
    if (errorMsg) {
      sql = `${sql} and errorMsg = "${errorMsg}"`;
    }
    sql = `${sql} group by DATE_FORMAT(happenTime,"%Y-%m-%d %H:00:00")`;
    let res = await Knex.raw(sql);
    return res[0];
  }
}
