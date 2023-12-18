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
    
  }

  /**
   * 获取时间内数据
   * @param {*} timeData 
   * @returns 
   */
  async getTimeInData(timeData) {
    let tableName = getTableName();
    let res = await Knex.select('*')
      .from(tableName)
      .whereIn('happenTime', timeData)

    return res
  }

}
