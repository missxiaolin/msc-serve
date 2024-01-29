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

  async saveData(data) {
    return await this.esClient.bulk({
      body: data,
    });
  }

  /**
   * 创建索引
   * @param {*} key
   */
  async createIndex(key) {
    return await this.esClient.indices.create({
      index: key,
    });
  }

  /**
   * 获取所有索引列表
   * @returns
   */
  async indicesList() {
    const { body } = await this.esClient.cat.indices({ format: "json" });
    if (body) {
        console.log(body)
      // 输出索引列表
      const indices = body.map((index) => index.index);
      return indices;
    } else {
      return {}
    }
  }
}
