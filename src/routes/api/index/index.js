import _ from 'lodash'
import Index from '../../../controller/index'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const indexController = new Index()

// 保存
const index = RouterConfigBuilder.routerConfigBuilder('/api/update', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return indexController.index(req, res)
}, false)

// adm 首页数据
const analyseCore = RouterConfigBuilder.routerConfigBuilder('/adm/analyse/core', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return indexController.analyseCore(req, res)
}, true)

export default {
    ...index,
    ...analyseCore
}