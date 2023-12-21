import _ from 'lodash'
import PageIndex from '../../../controller/page'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const pageController = new PageIndex()

// 页面UV PV 图表
const pageHoursList = RouterConfigBuilder.routerConfigBuilder('/adm/page/hours/list', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return pageController.getGroupByHours(req, res)
}, true)

// 综合数据
const allRoundPage = RouterConfigBuilder.routerConfigBuilder('/adm/page/echart/by/uuid', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return pageController.getGropyBuUuId(req, res)
}, true)

// 地图数据
const geoDistribution = RouterConfigBuilder.routerConfigBuilder('/adm/page/echart/geo/distribution', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return pageController.groupByCity(req, res)
}, true)

// 列表
const pageList = RouterConfigBuilder.routerConfigBuilder('/adm/page/list', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return pageController.pageList(req, res)
}, true)


export default {
    ...pageHoursList,
    ...allRoundPage,
    ...geoDistribution,
    ...pageList
}