import _ from 'lodash'
import Index from '../../../controller/index'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const indexController = new Index()

// 首页
const index = RouterConfigBuilder.routerConfigBuilder('/api/update', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return indexController.index(req, res)
}, false)


export default {
    ...index,
}