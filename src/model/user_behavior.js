import Knex from "../library/mysql";
import _ from "lodash";
import Logger from "../library/logger";
import * as config from "../config/err";

const BASE_TABLE_NAME = "user_behavior";
const TABLE_COLUMN = [];

const DISOLAYT_TABLE_COLUMN = [];
export const PROJECT_OPEN = 1;
export const PROJECT_CLOSE = 2;

function getTableName() {
  return BASE_TABLE_NAME;
}

export default class UserBehaviorModel {
  constructor() {
    this.tableColumnArr = [
      "monitorAppId",
      "uuId",
      "category",
      "tb_id",
      "createTime",
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
        Logger.log(err.message, "UserBehaviorModel    add   出错");
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
    let {
      pageSize = 10,
      page = 1,
      startTime = "",
      endTime = "",
      uuId = "",
      monitorAppId = "",
      categorys = []
    } = params;
    let tableName = getTableName();
    let res = Knex.select("*")
      .from(tableName)
      .where("createTime", "<", endTime)
      .andWhere("createTime", ">", startTime);

    if (monitorAppId) {
      res = res.andWhere("monitorAppId", monitorAppId);
    }
    if (uuId) {
      res = res.andWhere("uuId", uuId);
    }
    if (categorys && categorys.length > 0) {
      res = res.andWhere("category", 'in', categorys);
    }
    
    res = await res
      .orderBy("createTime", "desc")
      .limit(pageSize)
      .offset(page * pageSize - pageSize)
      .catch((err) => {
        console.log(err);
        return [];
      });

    return res;
  }

  /**
   * @param {*} params 
   * @returns 
   */
  async getPagesCount(params) {
    let { startTime = "", endTime = "", uuId = "", monitorAppId = "", categorys = [] } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName)
      .where("createTime", "<", endTime)
      .andWhere("createTime", ">", startTime);

    if (monitorAppId) {
      res = res.andWhere("monitorAppId", monitorAppId);
    }
    if (uuId) {
      res = res.andWhere("uuId", uuId);
    }
    if (categorys && categorys.length > 0) {
      res = res.andWhere("category", 'in', categorys);
    }
    res = await res.count("* as projectCount").catch((err) => {
      console.log(err);
      return 0;
    });

    return res[0].projectCount;
  }
}
