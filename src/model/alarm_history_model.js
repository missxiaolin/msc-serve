import Knex from "../library/mysql";
import _ from "lodash";
import Logger from "../library/logger";

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
      "updateTime"
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

}
