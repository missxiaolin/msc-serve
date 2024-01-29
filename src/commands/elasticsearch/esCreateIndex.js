import Base from "../base";
import Es from "../../library/es/index"
const es = new Es();

class EsCreateIndex extends Base {
  static get signature() {
    return `
                Es:Create:Index
                {key:创建索引key}
            `;
  }

  static get description() {
    return "Elasticsearch 创建索引";
  }

  /**
   * ES 存储方便查询更快
   * @param {*} args
   * @param {*} options
   */
  async execute(args, options) {
    let { key } = args;
    console.log(es.createIndex(key))
  }
}

export default EsCreateIndex