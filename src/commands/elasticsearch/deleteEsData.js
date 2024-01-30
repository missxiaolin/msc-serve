import Base from "../base";
import Es from "../../library/es/index";
const es = new Es();

class EsDel extends Base {
  static get signature() {
    return `
                Es:Del:Data
                {time:创建索引key}
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
    let { time } = args;
    let query = {
      index: "msc-log",
      body: {
        query: {
          range: {
            happenTime: {
              lt: time,
            },
          },
        },
      },
    };
    const indexs = await es.deleteOldData(query);
    console.log(indexs);
  }
}

export default EsDel;
