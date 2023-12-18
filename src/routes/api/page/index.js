import _ from 'lodash'
import PageIndex from '../../../controller/page'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const pageController = new PageIndex()

// 页面UV PV
const pageHoursList = RouterConfigBuilder.routerConfigBuilder('/adm/page/hours/list', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return pageController.list(req, res)
}, true)


export default {
    ...pageHoursList,
}