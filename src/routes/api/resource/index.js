import _ from 'lodash'
import Resource from '../../../controller/resource'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const resourceController = new Resource()

// 性能列表
const resourceList = RouterConfigBuilder.routerConfigBuilder('/adm/resource/list', RouterConfigBuilder.METHOD_TYPE_GET, (req, res) => {
    return resourceController.list(req, res)
}, false)


export default {
    ...resourceList,
}