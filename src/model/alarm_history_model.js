import Knex from "../library/mysql";
import _ from "lodash";
import Logger from "../library/logger";
import moment from "moment/moment";
import DATE_FORMAT from "../constants/date_format";

const BASE_TABLE_NAME = "alarm_history";
const TABLE_COLUMN = [];

const DISOLAYT_TABLE_COLUMN = [];
export const ALERT_OPEN = 1;
export const ALERT_CLOSE = 2;

function getTableName() {
  return BASE_TABLE_NAME;
}

export default class AlarmHistoryModel {
  constructor() {
    this.tableColumnArr = [
      "alarmId",
      "errorMsg",
      "isSuccess",
      "updateTime",
      "sendContent",
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
        Logger.log(err.message, "AlarmHistoryModel    add   出错");
        return [];
      });
    let id = _.get(insertResult, [0], 0);

    return id > 0;
  }

  /**
   * 分页
   * @param {*} params
   * @returns
   */
  async getPages(params) {
    let { pageSize = 10, page = 1, alarmId = "" } = params;
    let tableName = getTableName();

    let res = await Knex.from(tableName)
      .where("alarmId", alarmId)
      .orderBy("updateTime", "desc")
      .limit(pageSize)
      .offset(page * pageSize - pageSize)
      .catch((err) => {
        console.log(err);
        return [];
      });

    res.forEach((item) => {
      item.updateTime = moment(item.updateTime).format(DATE_FORMAT.DISPLAY_BY_SECOND)
    });

    return res;
  }

  /**
   * 总数
   * @param {*} params
   * @returns
   */
  async getPagesCount(params) {
    const { alarmId = "" } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName);

    res = await res
      .count("* as alertHistoryCount")
      .where("alarmId", alarmId)
      .catch((err) => {
        console.log(err);
        return 0;
      });

    return res[0].alertHistoryCount;
  }
}
