import Knex from "../library/mysql";
import _ from "lodash";
import Logger from "../library/logger";

const BASE_TABLE_NAME = "performance";
const TABLE_COLUMN = [];

const DISOLAYT_TABLE_COLUMN = [];

function getTableName() {
  return BASE_TABLE_NAME;
}

export default class PerformanceModel {
  /* performance metrics */
  // NT = 'navigation-timing',
  // FP = 'first-paint',
  // FCP = 'first-contentful-paint',
  // LCP = 'largest-contentful-paint',
  // CCP = 'custom-contentful-paint',
  // FID = 'first-input-delay',
  // RL = 'resource-flow',
  // CLS = 'cumulative-layout-shift',
  // FPS = 'fps',
  // ACT = 'api-complete-time',
  // /* information */
  // DI = 'device-information',
  // NI = 'network-information',
  // PI = 'page-information'
  constructor() {
    this.tableColumnArr = [
      "monitorAppId",
      "uuId",
      "key",
      "sessionId",
      "score",
      "textValue",
      "numValue",
      "simpleUrl",
      "happenTime",
    ];
    this.performanceKye = [
      "navigation-timing",
      "first-paint",
      "first-contentful-paint",
      "largest-contentful-paint",
      "custom-contentful-paint",
      "first-input-delay",
      "resource-flow",
      "cumulative-layout-shift",
      "fps",
      "api-complete-time",
      "wx-resource-flow"
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
        Logger.log(err.message, "PerformanceModel    add   出错");
        return [];
      });
    let id = _.get(insertResult, [0], 0);

    return id > 0;
  }

  /**
   * page
   * @param {*} params
   * @returns
   */
  async getPages(params) {
    let {
      simpleUrl = "",
      key = "",
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
    if (simpleUrl) {
      res = res.andWhere("simpleUrl", simpleUrl);
    }
    if (key) {
      res = res.andWhere("key", key);
      res = res.andWhere("textValue", '!=', '');
      res = res.andWhere("textValue", '!=', '{}');
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
   * @param {*} params
   * @returns
   */
  async getPagesCount(params) {
    let {
      simpleUrl = "",
      key = "",
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
    if (simpleUrl) {
      res = res.andWhere("simpleUrl", simpleUrl);
    }
    if (key) {
      res = res.andWhere("key", key);
    }
    res = await res.count("* as performanceCount").catch((err) => {
      console.log(err);
      return 0;
    });

    return res[0].performanceCount;
  }

  /**
   * @param {*} sessionIds
   * @returns
   */
  async getPerformances(sessionIds) {
    let tableName = getTableName();
    let res = await Knex.select(this.tableColumnArr)
      .from(tableName)
      .where("sessionId", "in", sessionIds)
      .andWhere("key", "in", this.performanceKye);
    return res;
  }

  /**
   * 获取sessionId
   * @param {*} params
   */
  async getSessionIds(params) {
    let { monitorAppId, simpleUrl, startTime, endTime, key } = params;
    let tableName = getTableName();
    let res = Knex.select("sessionId")
      .from(tableName)
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime);
    if (monitorAppId) {
      res = res.andWhere("monitorAppId", monitorAppId);
    }
    if (key) {
      res = res.andWhere("key", key);
    }
    if (simpleUrl) {
      res = res.andWhere("simpleUrl", simpleUrl);
    }
    res = await res.groupBy("sessionId").catch((err) => {
      console.log(err);
      return [];
    });

    return res;
  }

  /**
   * @param {*} params
   * @returns
   */
  async getAvgNtTimeDataSql(params) {
    let {
      startTime = "",
      endTime = "",
      monitorAppId = "",
      sessionIds = [],
    } = params;
    let sql = `select avg(JSON_EXTRACT(textValue,'$.dnsLookup')) as "dnsLookup", avg(JSON_EXTRACT(textValue,'$.initialConnection')) as "initialConnection", avg(JSON_EXTRACT(textValue,'$.ssl')) as "ssl", avg(JSON_EXTRACT(textValue,'$.ttfb')) as "ttfb", avg(JSON_EXTRACT(textValue,'$.contentDownload')) as "contentDownload", avg(JSON_EXTRACT(textValue,'$.domParse')) as "domParse", avg(JSON_EXTRACT(textValue,'$.deferExecuteDuration')) as "deferExecuteDuration", avg(JSON_EXTRACT(textValue,'$.domContentLoadedCallback')) as "domContentLoadedCallback", avg(JSON_EXTRACT(textValue,'$.resourceLoad')) as "resourceLoad", avg(JSON_EXTRACT(textValue,'$.domReady')) as "domReady", avg(JSON_EXTRACT(textValue,'$.pageLoad')) as "pageLoad" from performance where happenTime > "${startTime}" and happenTime < "${endTime}" and textValue != ''`;
    if (monitorAppId) {
      sql = `${sql} and monitorAppId = "${monitorAppId}"`;
    }
    if (sessionIds) {
      let str = "";
      for (let i = 0; i < sessionIds.length; i++) {
        if (i == sessionIds.length - 1) {
          str = `'${sessionIds[i]}'` + str;
        } else {
          str = `,'${sessionIds[i]}'` + str;
        }
      }
      sql = `${sql} and sessionId in (${str})`;
    }
    let res = await Knex.raw(sql);
    if (res.length > 0) {
      return res[0];
    }

    return {};
  }

  /**
   * @param {*} params
   * @returns
   */
  async getWxAvgNtTimeDataSql(params) {
    let {
      startTime = "",
      endTime = "",
      monitorAppId = "",
      simpleUrl = ''
    } = params;
    let sql = `select avg(JSON_EXTRACT(textValue,'$.firstRenderduration')) as "firstRenderduration", avg(JSON_EXTRACT(textValue,'$.scriptduration')) as "scriptduration", avg(JSON_EXTRACT(textValue,'$.routeduration')) as "routeduration", avg(JSON_EXTRACT(textValue,'$.appLaunchduration')) as "appLaunchduration", avg(JSON_EXTRACT(textValue,'$.loadPackageduration')) as "loadPackageduration" from performance where happenTime > "${startTime}" and happenTime < "${endTime}" and textValue != '' and \`key\` = "wx-performance"`;
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
   * @param {*} params 
   * @returns 
   */
  async getAvgKey(params) {
    let {
      startTime = "",
      endTime = "",
      monitorAppId = "",
      simpleUrl = "",
      sessionIds = [],
      key,
    } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName)
      .avg("numValue as numValue")
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime);
    if (monitorAppId) {
      res = res.andWhere("monitorAppId", monitorAppId);
    }
    if (simpleUrl) {
      res = res.andWhere("simpleUrl", simpleUrl);
    }
    if (key) {
      res = res.andWhere("key", key);
    }
    if (sessionIds && sessionIds.length > 0) {
      res = res.andWhere("sessionId", "in", sessionIds)
    }

    return await res
  }
}
