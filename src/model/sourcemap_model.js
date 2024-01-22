import Knex from "../library/mysql";
import _ from "lodash";
import Logger from "../library/logger";
import moment from "moment";
import DATE_FORMAT from "../constants/date_format";

const BASE_TABLE_NAME = "sourcemap";
const TABLE_COLUMN = [];

const DISOLAYT_TABLE_COLUMN = [];
export const ALERT_OPEN = 1;
export const ALERT_CLOSE = 2;

function getTableName() {
  return BASE_TABLE_NAME;
}

export default class SourcemapModel {
  constructor() {
    this.tableColumnArr = [
      "monitorAppId",
      "filename",
      "originalname",
      "destination",
      "path",
      "size",
      "version",
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
   * 获取
   * @param {*} params
   * @returns
   */
  async getFirst(params) {
    let { monitorAppId, filename = "", version = "" } = params;
    let tableName = getTableName();

    let res = Knex.from(tableName)
      .select("*")
      .where("monitorAppId", "=", monitorAppId);

    if (filename) {
      res = res.andWhere("filename", filename);
    }

    if (version) {
      res = res.andWhere("version", version);
    }

    res = await res.first().catch((e) => {
      Logger.warn("查询失败, 错误原因 =>", e);
      return {};
    });

    return res;
  }

  /**
   * 分页
   * @param {*} params
   * @returns
   */
  async getPages(params) {
    let { pageSize = 10, page = 1, monitorAppId = "", version = "" } = params;
    let tableName = getTableName();

    let res = Knex.from(tableName).where("monitorAppId", monitorAppId);

    if (version) {
      res = res.andWhere("version", version);
    }
    res = await res
      .orderBy("updateTime", "desc")
      .limit(pageSize)
      .offset(page * pageSize - pageSize)
      .catch((err) => {
        console.log(err);
        return [];
      });

    res.forEach((item) => {
      item.updateTime = moment(item.updateTime).format(DATE_FORMAT.DISPLAY_BY_SECOND);
    });

    return res;
  }

  /**
   * 总数
   * @param {*} params
   * @returns
   */
  async getPagesCount(params) {
    const { monitorAppId = "", version = "" } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName);

    res = res.count("* as count").where("monitorAppId", monitorAppId);
    if (version) {
      res = res.andWhere("version", version);
    }

    res = await res.catch((err) => {
      console.log(err);
      return 0;
    });

    return res[0].count;
  }

  /**
   * 获取文件下所有版本号
   * @param {*} params
   */
  async getAllGruopByVersion(params) {
    const { monitorAppId = "", version = "", filename = "" } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName)
      .select(["version"])
      .where("monitorAppId", monitorAppId);
    if (version) {
      res = res.andWhere("version", version);
    }
    if (filename) {
      res = res.andWhere("filename", filename);
    }

    res = await res.groupBy(["version"]);

    return res
  }
}
