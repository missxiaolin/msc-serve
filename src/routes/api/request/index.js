import _ from 'lodash'
import RequestController from '../../../controller/request'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const requestController = new RequestController()


// api 数据
const apiList = RouterConfigBuilder.routerConfigBuilder('/adm/api/agregate/list', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return requestController.byPathNameCount(req, res)
}, true)

export default {
    ...apiList
}