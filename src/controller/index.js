import Base from './base'

/**
 * 首页
 */
export default class Index extends Base {
    /**
     * 首页测试
     * @param {*} req 
     * @param {*} res 
     */
    index(req, res) {
        let data = req.body || {}
        console.log(data)
        return this.send(res, { title: '保存成功' })
    }
}