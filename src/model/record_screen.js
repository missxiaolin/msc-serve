import Knex from "../library/mysql";
import _ from "lodash";
import Logger from "../library/logger";
import DATE_FORMAT from "../constants/date_format";
import moment from "moment";
import { ERROR_STEMMER } from "../constants/err";

const BASE_TABLE_NAME = "record_screen";
const TABLE_COLUMN = [];

const DISOLAYT_TABLE_COLUMN = [];
export const PROJECT_OPEN = 1;
export const PROJECT_CLOSE = 2;

function getTableName() {
  return BASE_TABLE_NAME;
}

export default class RecordScreenModel {
  constructor() {
    this.tableColumnArr = [
      "monitorAppId",
      "uuId",
      "category",
      "level",
      "pageUrl",
      "simpleUrl",
      "happenTime",
      "url",
      "errorType",
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
        Logger.log(err.message, "RecordScreenModel    add   出错");
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
    let { pageSize = 10, page = 1, simpleUrl } = params;
    let tableName = getTableName();

    let res = Knex.select("*").from(tableName);

    if (simpleUrl) {
      res = res.where("simpleUrl", simpleUrl);
    }

    res = await res
      .orderBy("happenTime", "desc")
      .limit(pageSize)
      .offset(page * pageSize - pageSize)
      .catch((err) => {
        console.log(err);
        return [];
      });

    res.forEach((item) => {
      item.happenTime = moment(item.happenTime).format(
        DATE_FORMAT.DISPLAY_BY_SECOND
      );
      item.error_desc = ERROR_STEMMER[item.errorType]
    });

    return res;
  }

  /**
   * 总数
   * @param {*} params
   * @returns
   */
  async getPagesCount(params) {
    let { simpleUrl } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName);

    res = res.count("* as recordScreenCount");

    if (simpleUrl) {
      res = res.where("simpleUrl", simpleUrl);
    }
    res = await res.catch((err) => {
      console.log(err);
      return 0;
    });

    return res[0].recordScreenCount;
  }
}
