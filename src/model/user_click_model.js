import Knex from "../library/mysql";
import _ from "lodash";
import Logger from "../library/logger";

const BASE_TABLE_NAME = "click_log";
const TABLE_COLUMN = [];

const DISOLAYT_TABLE_COLUMN = [];

function getTableName() {
  return BASE_TABLE_NAME;
}

export default class UserClickeModel {
  constructor() {
    this.tableColumnArr = [
      "monitorAppId",
      "uuId",
      "level",
      "happenTime",
      "screenHeight",
      "screenWidth",
      "pageUrl",
      "simpleUrl",
      "tagName",
      "top",
      "left",
      "eventType",
      "pageHeight",
      "subType",
      "startTime",
      "innerHTML",
      "viewport",
      "targetInfo",
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
        Logger.log(err.message, "UserClickModel    add   出错");
        return [];
      });
    let id = _.get(insertResult, [0], 0);

    return id;
  }

  async getIds(ids) {
    let select = this.tableColumnArr
    select.push('id')
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
  async getPages(params) {}

}
