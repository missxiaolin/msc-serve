import Knex from "../library/mysql";
import _ from "lodash";
import Logger from "../library/logger";
import * as config from "../config/err";

const BASE_TABLE_NAME = "page_data_analysis";
const TABLE_COLUMN = [];

const DISOLAYT_TABLE_COLUMN = [];

function getTableName() {
  return BASE_TABLE_NAME;
}

export default class PageDataAnalysisModel {
  constructor() {
    this.tableColumnArr = [
      "pvCount",
      "uvCount",
      "newUvCount",
      "ipCounct",
      "jumpCount",
      "visitFrequency",
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
        Logger.log(err.message, "PageDataAnalysisModel    add   出错");
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
  async updateData(data, id) {
    let tableName = getTableName();
    let updateResult = await Knex.from(tableName).update(data).where('id', id)
    return updateResult
  }

  /**
   * 获取某个时间段数据
   * @param {*} happenTime
   * @returns
   */
  async getTimeData(happenTime) {
    let tableName = getTableName();
    let res = await Knex.select("*")
      .from(tableName)
      .where("happenTime", happenTime)
      .first();

    return res;
  }

  /**
   * 获取时间内数据
   * @param {*} timeData
   * @returns
   */
  async getTimeInData(timeData) {
    let tableName = getTableName();
    let res = await Knex.select("*")
      .from(tableName)
      .whereIn("happenTime", timeData);

    return res;
  }
}
