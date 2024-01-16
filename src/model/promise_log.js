import Knex from "../library/mysql";
import _ from "lodash";
import Logger from "../library/logger";

const BASE_TABLE_NAME = "promise_log";
const TABLE_COLUMN = [];

const DISOLAYT_TABLE_COLUMN = [];
export const PROJECT_OPEN = 1
export const PROJECT_CLOSE = 2

function getTableName() {
  return BASE_TABLE_NAME;
}

export default class PromiseLog {
  constructor() {
    this.tableColumnArr = [
      "monitorAppId",
      "category",
      "userAgent",
      "uuId",
      "level",
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
      "ip",
      "country",
      "province",
      "city",
      "pageUrl",
      "simpleUrl",
      "errorMsg",
      "startTime"
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
        Logger.log(err.message, "PromiseLog    add   出错");
        return [];
      });
    let id = _.get(insertResult, [0], 0);

    return id > 0;
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
}
