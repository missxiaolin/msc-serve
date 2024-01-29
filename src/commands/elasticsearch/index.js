import Base from "../base";
import Es from "../../library/es/index"
import PageModel from "../../model/page_model"
import JsModel from "../../model/js_model"
import UserClickeModel from "../../model/user_click_model"
import HttpModel from "../../model/http_model"
import dotenv from "dotenv";
const appConfig = dotenv.config().parsed;


const es = new Es();
const pageModel = new PageModel();
const jsModel = new JsModel();
const userClickeModel = new UserClickeModel();
const httpModel = new HttpModel();

// 安装
// docker pull docker.elastic.co/elasticsearch/elasticsearch:7.15.1
// docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.15.1
// 可视化界面
// docker pull docker.elastic.co/kibana/kibana:7.15.1
// docker run -d --name kibana --link elasticsearch:elasticsearch -p 5601:5601 docker.elastic.co/kibana/kibana:7.15.1

class EsSave extends Base {
  static get signature() {
    return `
                Es:Save
                {startTime:日志扫描范围上限格式}
                {endTime:日志扫描范围下限格式}
            `;
  }

  static get description() {
    return "Elasticsearch 存储";
  }

  /**
   * ES 存储方便查询更快
   * @param {*} args
   * @param {*} options
   */
  async execute(args, options) {
    if (!appConfig["ELASTICSEARCH_ISOPEN"]) {
      return;
    }
    let { startTime, endTime } = args;
    this.pageEsSave(startTime, endTime)
    this.httpEsSave(startTime, endTime)
    this.userClickEsSave(startTime, endTime)
    this.jsEsSave(startTime, endTime)
  }

  /**
   * js 错误保存
   * @param {*} startTime 
   * @param {*} endTime 
   */
  async jsEsSave(startTime, endTime) {
    let res = await jsModel.getTimeData({
      startTime,
      endTime
    })
    if (!res || res.length === 0) return
    const body = res.flatMap(doc => [
      { index: { _index: 'msc-log' } },
      doc
    ]);
    console.log(await es.saveData(body))
  }

  /**
   * 用户点击
   * @param {*} startTime 
   * @param {*} endTime 
   */
  async userClickEsSave(startTime, endTime) {
    let res = await userClickeModel.getTimeData({
      startTime,
      endTime
    })
    if (!res || res.length === 0) return
    const body = res.flatMap(doc => [
      { index: { _index: 'msc-log' } },
      doc
    ]);
    console.log(await es.saveData(body))
  }

  /**
   * 网络请求
   * @param {*} startTime 
   * @param {*} endTime 
   */
  async httpEsSave(startTime, endTime) {
    let res = await httpModel.getTimeData({
      startTime,
      endTime
    })
    if (!res || res.length === 0) return
    const body = res.flatMap(doc => [
      { index: { _index: 'msc-log' } },
      doc
    ]);
    console.log(await es.saveData(body))
  }

  /**
   * 页面信息存储
   * @param {*} startTime 
   * @param {*} endTime 
   */
  async pageEsSave(startTime, endTime) {
    let res = await pageModel.getTimeData({
      startTime,
      endTime
    })
    if (!res || res.length === 0) return
    const body = res.flatMap(doc => [
      { index: { _index: 'msc-log' } },
      doc
    ]);
    console.log(await es.saveData(body))
  }
}

export default EsSave