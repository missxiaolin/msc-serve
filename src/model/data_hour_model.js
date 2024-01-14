import Knex from "../library/mysql";
import _ from "lodash";
import Logger from "../library/logger";

const BASE_TABLE_NAME = "data_hour";
const TABLE_COLUMN = [];

const DISOLAYT_TABLE_COLUMN = [];

function getTableName() {
  return BASE_TABLE_NAME;
}

export default class DataHourModel {
  constructor() {
    this.tableColumnArr = [
      "monitorAppId",
      "happenTime",
      "pvCount",
      "uvCount",
      "jsErrorCount",
      "resourceLinkCount",
      "resourceScriptCount",
      "resourceImgCount",
    ];
  }

  /**
   * 保存
   * @param {*} data
   * @returns
   */
  async save(data, happenTime) {
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
        Logger.log(err.message, "DataHourModel    add   出错");
        return [];
      });
    let id = _.get(insertResult, [0], 0);

    return id > 0;
  }

  /**
   * 操作数据
   * @param {*} data 
   * @returns 
   */
  async updateData(data, whereData) {
    let tableName = getTableName();
    let updateResult = await Knex.from(tableName)
      .update(data)
      .where("happenTime", whereData.happenTime)
      .andWhere("monitorAppId", whereData.monitorAppId);
    return updateResult;
  }
}
