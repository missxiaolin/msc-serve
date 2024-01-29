import dotenv from "dotenv";
import { Client } from "elasticsearch";
const appConfig = dotenv.config().parsed;

export default class Es {
  constructor() {
    if (!appConfig["ELASTICSEARCH_ISOPEN"]) {
      return;
    }
    // 创建 Elasticsearch 客户端实例
    const client = new Client({ node: appConfig["ELASTICSEARCH_URL"] });
    this.esClient = client;
  }

  /**
   * 保存数据
   * @param {*} data
   * @returns
   */
  async saveData(body) {
    return await this.esClient.bulk({
      body,
    });
  }

  /**
   * 查询
   * @param {*} query
   * @returns
   */
  async search(query) {
    try {
      const body = await this.esClient.search(query);
      return body;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  /**
   * 创建索引
   * @param {*} key
   */
  async createIndex(key) {
    return await this.esClient.indices.create({
      index: key,
      body: {
        mappings: {
          properties: {
            happenTime: { type: "keyword" },
            // 其他字段的映射配置
          },
        },
      },
    });
  }

  /**
   * 获取所有索引列表
   * @returns
   */
  async indicesList() {
    const { body } = await this.esClient.cat.indices({ format: "json" });
    if (body) {
      // 输出索引列表
      const indices = body.map((index) => index.index);
      return indices;
    } else {
      return {};
    }
  }
}
