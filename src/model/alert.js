import Knex from "../library/mysql";
import _ from "lodash";
import Logger from "../library/logger";
import * as config from "../constants/err";

const BASE_TABLE_NAME = "alarm_config";
const TABLE_COLUMN = [];

const DISOLAYT_TABLE_COLUMN = [];
export const ALERT_OPEN = 1;
export const ALERT_CLOSE = 2;

function getTableName() {
  return BASE_TABLE_NAME;
}

export default class AlertModel {
  constructor() {
    this.tableColumnArr = [
      "monitorAppId",
      "serviceType",
      "errorType",
      "errorName",
      "timeRangeS",
      "maxErrorCount",
      "alarmIntervalS",
      "isEnable",
      "note",
      "startHour",
      "endHour",
      "alertType",
      "startTime",
      "updateTime",
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
        Logger.log(err.message, "AlertModel    add   出错");
        return [];
      });
    let id = _.get(insertResult, [0], 0);

    return id > 0;
  }

  /**
   * 修改
   * @param {*} data
   * @param {*} id
   * @returns
   */
  async update(data, id) {
    let tableName = getTableName();
    let updateResult = await Knex.from(tableName).update(data).where("id", id);
    return updateResult;
  }

  /**
   * 获取所有开启的告警
   * @returns
   */
  async getAllEnabled() {
    let tableName = getTableName();
    let res = await Knex.select("alarm_config.*", "projects.name")
      .from(tableName)
      .join(
        "projects",
        "alarm_config.monitorAppId",
        "=",
        "projects.monitorAppId"
      )
      .where("alarm_config.isEnable", ALERT_OPEN);

    return res;
  }

  /**
   * 分页
   * @param {*} params
   * @returns
   */
  async getPages(params) {
    let { pageSize = 10, page = 1, monitorAppId = "" } = params;
    let tableName = getTableName();

    let res = await Knex.select("alarm_config.*", "projects.name")
      .from(tableName)
      .join(
        "projects",
        "alarm_config.monitorAppId",
        "=",
        "projects.monitorAppId"
      )
      .where("alarm_config.monitorAppId", monitorAppId)
      .orderBy("projects.updateTime", "desc")
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
    const { monitorAppId = "" } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName);

    res = await res
      .count("* as alertCount")
      .where("monitorAppId", monitorAppId)
      .catch((err) => {
        console.log(err);
        return 0;
      });

    return res[0].alertCount;
  }
}
