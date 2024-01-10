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
  constructor() {
    this.tableColumnArr = [
      "monitorAppId",
      "uuId",
      "key",
      "sessionId",
      "score",
      "textValue",
      "numValue",
      "happenTime",
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
   * 获取sessionId
   * @param {*} params 
   */
  async getSessionIds(params) {
    let { monitorAppId, simpleUrl, startTime, endTime, key } = params
    let tableName = getTableName();
    let res = Knex.select('sessionId')
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
      res = res.andWhere("textValue", 'like', `%${simpleUrl}%`);
    }
    res = await res.groupBy('sessionId')
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
  async getWxAvgNtTimeDataSql(params) {
    let { startTime = "", endTime = "", monitorAppId = "", sessionIds = [] } = params;
    let sql = `select avg(JSON_EXTRACT(textValue,'$.dnsLookup')) as "dnsLookup", avg(JSON_EXTRACT(textValue,'$.initialConnection')) as "initialConnection", avg(JSON_EXTRACT(textValue,'$.ssl')) as "ssl", avg(JSON_EXTRACT(textValue,'$.ttfb')) as "ttfb", avg(JSON_EXTRACT(textValue,'$.contentDownload')) as "contentDownload", avg(JSON_EXTRACT(textValue,'$.domParse')) as "domParse", avg(JSON_EXTRACT(textValue,'$.deferExecuteDuration')) as "deferExecuteDuration", avg(JSON_EXTRACT(textValue,'$.domContentLoadedCallback')) as "domContentLoadedCallback", avg(JSON_EXTRACT(textValue,'$.resourceLoad')) as "resourceLoad", avg(JSON_EXTRACT(textValue,'$.domReady')) as "domReady", avg(JSON_EXTRACT(textValue,'$.pageLoad')) as "pageLoad" from performance where happenTime > "${startTime}" and happenTime < "${endTime}" and textValue != ''`;
    if (monitorAppId) {
      sql = `${sql} and monitorAppId = "${monitorAppId}"`;
    }
    if (sessionIds) {
      let str = ''
      for(let i = 0; i < sessionIds.length; i++) {
        if (i == sessionIds.length - 1) {
          str = `'${sessionIds[i]}'` + str
        } else {
          str = `,'${sessionIds[i]}'` + str
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
}
