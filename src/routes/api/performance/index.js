import _ from 'lodash'
import Performance from '../../../controller/performance'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const performanceController = new Performance()

// 性能列表
const performanceList = RouterConfigBuilder.routerConfigBuilder('/adm/performance/list', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return performanceController.list(req, res)
}, true)


export default {
    ...performanceList,
}