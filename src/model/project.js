import Knex from "../library/mysql";
import _ from "lodash";
import Logger from "../library/logger";

const BASE_TABLE_NAME = "projects";
const TABLE_COLUMN = [];

const DISOLAYT_TABLE_COLUMN = [];
export const PROJECT_OPEN = 1
export const PROJECT_CLOSE = 2

function getTableName() {
  return BASE_TABLE_NAME;
}

export default class ProjectModel {
  constructor() {
    this.tableColumnArr = [
      "name",
      "desc",
      "monitorAppId",
      "projectType",
      "delay",
      "encryption",
      "maxQueues",
      "watch",
      "status",
      "startTime",
      "cookieUserKey",
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
        Logger.log(err.message, "ProjectModel    add   出错");
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
    let updateResult = await Knex.from(tableName).update(data).where('id', id)
    return updateResult
  }

  /**
   * 获取项目
   * @param {*} data
   * @returns
   */
  async getFirstMonitorAppIdProject(data) {
    let { monitorAppId } = params;
    let tableName = getTableName();

    let res = await Knex.from(tableName)
      .select("*")
      .where("monitorAppId", "=", monitorAppId)
      .first()
      .catch((e) => {
        Logger.warn("查询失败, 错误原因 =>", e);
        return {};
      });

    return res;
  }

  /**
   * 获取所有开启的项目
   * @returns 
   */
  async getStatusAll() {
    let tableName = getTableName();
    let res = await Knex.select("*")
      .from(tableName)
      .where("status", PROJECT_OPEN)

    return res;
  }

  /**
   * 分页
   * @param {*} params
   * @returns
   */
  async getPages(params) {
    let { pageSize = 10, page = 1 } = params;
    let tableName = getTableName();
    
    let res = await Knex.select("*")
      .from(tableName)
      .orderBy("updateTime", "desc")
      .limit(pageSize)
      .offset(page * pageSize - pageSize)
      .catch((err) => {
        console.log(err);
        return [];
      });

    return res;
  }

  /**
   * 获取详情
   * @param {*} monitorAppId 
   * @returns 
   */
  async getMonitorAppIdDetail(monitorAppId) {
    let tableName = getTableName();
    
    let res = await Knex.select("*")
      .from(tableName)
      .where('monitorAppId', monitorAppId)
      .first()
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
    let tableName = getTableName();
    let res = Knex.from(tableName);

    res = await res.count("* as projectCount").catch((err) => {
      console.log(err);
      return 0;
    });

    return res[0].projectCount;
  }
}
