import Base from "../base";
import Es from "../../library/es/index"
const es = new Es();

class EsIndexList extends Base {
  static get signature() {
    return `
                Es:Index:List
            `;
  }

  static get description() {
    return "Elasticsearch 获取所有索引列表";
  }

  /**
   * ES 存储方便查询更快
   * @param {*} args
   * @param {*} options
   */
  async execute(args, options) {
    const body = await es.indicesList()
    // 输出索引列表
    const indices = body.map((item) => item.index);
    console.log(indices);
  }
}

export default EsIndexList