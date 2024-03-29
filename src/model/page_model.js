import Knex from "../library/mysql";
import _ from "lodash";
import Logger from "../library/logger";

const BASE_TABLE_NAME = "page_log";
const TABLE_COLUMN = [];

const DISOLAYT_TABLE_COLUMN = [];

function getTableName() {
  return BASE_TABLE_NAME;
}

export default class PageModel {
  constructor() {
    this.tableColumnArr = [
      "monitorAppId",
      "category",
      "ip",
      "userAgent",
      "uuId",
      "level",
      "category",
      "happenTime",
      "deviceType",
      "os",
      "browserInfo",
      "device",
      "deviceModel",
      "screenHeight",
      "screenWidth",
      "language",
      "netWork",
      "country",
      "province",
      "city",
      "pageUrl",
      "simpleUrl",
      "to",
      "from",
      "subType",
      "duration",
      "startTime",
      "referrer",
      "type",
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
      insertData[column] = data[column] || "";
    }
    let insertResult = await Knex.returning("id")
      .insert(insertData)
      .into(tableName)
      .catch((err) => {
        console.log(err);
        Logger.log(err.message, "PageModel    add   出错");
        return [];
      });
    let id = _.get(insertResult, [0], 0);

    return id;
  }

  async getIds(ids) {
    let select = this.tableColumnArr;
    select.push("id");
    let tableName = getTableName();
    let res = await Knex.select(this.tableColumnArr)
      .from(tableName)
      .select(select)
      .where("id", "in", ids);
    return res;
  }

  /**
   * 获取单个详情
   * @param {*} params
   * @returns
   */
  async getPageDetail(params) {
    let {
      startTime,
      endTime,
      monitorAppId = "",
      simpleUrl = "",
      uuId = "",
    } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName)
      .select(this.tableColumnArr)
      .where("happenTime", "<=", endTime)
      .andWhere("happenTime", ">=", startTime);
    if (monitorAppId) {
      res = res.andWhere("monitorAppId", monitorAppId);
    }
    if (simpleUrl) {
      res = res.andWhere("simpleUrl", simpleUrl);
    }
    if (uuId) {
      res = res.andWhere("uuId", uuId);
    }
    return await res.first();
  }

  /**
   * uv pv
   * @param {*} params
   * @returns
   */
  async getIsUCount(params) {
    let {
      startTime,
      endTime,
      isUv = false,
      isIp = false,
      monitorAppId = "",
      simpleUrl = "",
    } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName)
      .where("happenTime", "<=", endTime)
      .andWhere("happenTime", ">=", startTime);

    if (monitorAppId) {
      res = res.andWhere("monitorAppId", monitorAppId);
    }
    if (simpleUrl) {
      res = res.andWhere("simpleUrl", simpleUrl);
    }
    if (isUv) {
      res = res.andWhere("uuId", "!=", "");
      res = await res.countDistinct("uuId as pageCount").catch((err) => {
        console.log(err);
        return [];
      });
    } else if (isIp) {
      res = await res.countDistinct("ip as pageCount").catch((err) => {
        console.log(err);
        return [];
      });
    } else {
      res = await res.count("* as pageCount").catch((err) => {
        console.log(err);
        return [];
      });
    }

    return res[0].pageCount;
  }

  /**
   * @param {*} params
   * @returns
   */
  async getCountGroupByUuid(params) {
    let { startTime, endTime, monitorAppId = "" } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName)
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime);
    if (monitorAppId) {
      res = res.andWhere("monitorAppId", monitorAppId);
    }
    res = await res
      .select("ip", "os", "device", "browserInfo", "userAgent")
      .count("* as pageCount")
      .groupBy("ip", "os", "device", "browserInfo", "userAgent");
    return res;
  }

  /**
   * @param {*} params
   * @returns
   */
  async getUuidCount(params) {
    let { agoDay, uuIds, monitorAppId } = params;
    let tableName = getTableName();
    let res = await Knex.from(tableName)
      .countDistinct("uuId as pageCount")
      .where("happenTime", "<", agoDay)
      .andWhere("uuId", "in", uuIds)
      .andWhere("monitorAppId", monitorAppId);
    return res[0].pageCount;
  }

  /**
   * @param {*} params
   */
  async getUuid(params) {
    let { startTime, endTime, monitorAppId } = params;
    let tableName = getTableName();
    let res = await Knex.from(tableName)
      .select("uuId")
      .distinct("uuId")
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime)
      .andWhere("monitorAppId", monitorAppId);
    return res;
  }

  /**
   * @param {*} params
   */
  async getGroupByCount(params) {
    let {
      startTime,
      endTime,
      limit = 0,
      simpleUrl = "",
      selKeys = "*",
      monitorAppId = "",
      groupByKey = [],
    } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName)
      .select(selKeys)
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime);
    if (monitorAppId) {
      res = res.andWhere("monitorAppId", monitorAppId);
    }

    if (simpleUrl) {
      res = res.andWhere("simpleUrl", simpleUrl);
    }
    res = res
      .groupBy(groupByKey)
      .countDistinct("uuId as count")
      .orderBy("count", "desc");
    if (limit != 0) {
      res = res.limit(limit);
    }

    res = await res;

    return res;
  }

  /**
   * 获取指定时间内的数据
   * @param {*} params
   * @returns
   */
  async getTimeData(params) {
    let { startTime, endTime, monitorAppId = "" } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName)
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime);

    if (monitorAppId) {
      res = res.andWhere("monitorAppId", monitorAppId);
    }
    res = await res.catch((err) => {
      console.log(err);
      return [];
    });

    return res;
  }

  /**
   * 分页
   * @param {*} data
   * @returns
   */
  async getGroupPages(params) {
    let {
      startTime,
      endTime,
      simpleUrl = "",
      pageSize = 10,
      page = 1,
      monitorAppId = "",
    } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName)
      .select("simpleUrl")
      .groupBy("simpleUrl")
      .count("* as pageCount")
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime);

    if (simpleUrl) {
      res = res.andWhere("simpleUrl", simpleUrl);
    }
    if (monitorAppId) {
      res = res.andWhere("monitorAppId", monitorAppId);
    }
    res = await res
      .limit(pageSize)
      .offset(page * pageSize - pageSize)
      .catch((err) => {
        console.log(err);
        return [];
      });

    return res;
  }

  /**
   * 分页总数
   * @param {*} params
   * @returns
   */
  async getPagesGroupCount(params) {
    let { startTime, endTime, simpleUrl = "", monitorAppId = "" } = params;
    let tableName = getTableName();
    let res = Knex.from(tableName)
      .where("happenTime", "<", endTime)
      .andWhere("happenTime", ">", startTime);
    if (simpleUrl) {
      res = res.andWhere("simpleUrl", simpleUrl);
    }
    if (monitorAppId) {
      res = res.andWhere("monitorAppId", monitorAppId);
    }
    res = await res.countDistinct("simpleUrl as pageCount").catch(() => {
      return 0;
    });

    return res[0].pageCount;
  }

  /**
   * 获取每小时数据 pv
   * @returns
   */
  async getHoursCountPv(params) {
    let {
      startTime = "",
      endTime = "",
      simpleUrl = "",
      monitorAppId = "",
    } = params;
    let sql = `select DATE_FORMAT(happenTime,"%Y-%m-%d %H:00:00") as "hour", count("id") as count from page_log where happenTime > "${startTime}" and happenTime < "${endTime}"`;
    if (simpleUrl) {
      sql = `${sql} and simpleUrl = "${simpleUrl}"`;
    }
    if (monitorAppId) {
      sql = `${sql} and monitorAppId = "${monitorAppId}"`;
    }
    sql = `${sql} group by DATE_FORMAT(happenTime,"%Y-%m-%d %H:00:00")`;
    let res = await Knex.raw(sql);
    return res[0];
  }

  /**
   * 获取每小时数据 uv
   * @param {*} params
   * @returns
   */
  async getHoursCountUv(params) {
    let {
      startTime = "",
      endTime = "",
      simpleUrl = "",
      monitorAppId = "",
    } = params;
    let sql = `select DATE_FORMAT(happenTime,"%Y-%m-%d %H:00:00") as "hour", count(distinct uuId) as count from page_log where happenTime > "${startTime}" and happenTime < "${endTime}"`;
    if (simpleUrl) {
      sql = `${sql} and simpleUrl = "${simpleUrl}"`;
    }
    if (monitorAppId) {
      sql = `${sql} and MonitorAppId = "${monitorAppId}"`;
    }
    sql = `${sql} group by DATE_FORMAT(happenTime,"%Y-%m-%d %H:00:00")`;
    let res = await Knex.raw(sql);
    return res[0];
  }
}
