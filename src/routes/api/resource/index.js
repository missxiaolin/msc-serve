import _ from 'lodash'
import Resource from '../../../controller/resource'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const resourceController = new Resource()

// 性能列表
const resourceList = RouterConfigBuilder.routerConfigBuilder('/adm/resource/list', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return resourceController.list(req, res)
}, true)

// 图表
const resourceHours = RouterConfigBuilder.routerConfigBuilder('/adm/resource/hour', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return resourceController.getGroupByHours(req, res)
}, true)


export default {
    ...resourceList,
    ...resourceHours
}