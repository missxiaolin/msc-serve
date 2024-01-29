import Base from "./base";
import PageModel from "../model/page_model";
import Es from '../library/es/index'

const pageModel = new PageModel();
const es = new Es();


export default class User extends Base {
  /**
   * 获取用户记录
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async getUserBehavior(req, res) {
    let data = req.body || {},
      result = {};

    const monitorAppId = req.get("MonitorAppId") || "";
    data.monitorAppId = monitorAppId;
    result.pageDetail = await pageModel.getPageDetail(data);
    const searchParams = {
      index: 'msc-log',
      body: {
        query: {
          bool: {
            must: [
              { match: { monitorAppId } }
            ]
          }
        },
        sort: [
          { happenTime: { order: 'desc' } }
        ],
        from: data.page * data.pageSize - data.pageSize,  // 从第几条开始
        size: data.pageSize  // 每页显示数量
      }
    };
    const esUserList = await await es.search(searchParams);
    let userList = []
    const esUserListData = esUserList && esUserList.hits && esUserList.hits.hits ? esUserList.hits.hits : []
    esUserListData.forEach(item => {
      userList.push(item._source)
    })
    result.userList = userList

    return this.send(res, result);
  }
}
