import _ from 'lodash'
import Performance from '../../../controller/performance'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const performanceController = new Performance()

// 性能列表
const performanceList = RouterConfigBuilder.routerConfigBuilder('/adm/performance/list', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return performanceController.list(req, res)
}, true)

// 页面平均性能
const pageAvgDetail = RouterConfigBuilder.routerConfigBuilder('/adm/performance/echart/by/url', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return performanceController.pageAvgDetail(req, res)
}, true)


export default {
    ...performanceList,
    ...pageAvgDetail
}