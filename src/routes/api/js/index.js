import _ from 'lodash'
import JsController from '../../../controller/js'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const jsController = new JsController()

// js table
const jsList = RouterConfigBuilder.routerConfigBuilder('/adm/js/list', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return jsController.jsList(req, res)
}, true)

// js图表
const jsEchat = RouterConfigBuilder.routerConfigBuilder('/adm/js/echart/hour/by/pageurl', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return jsController.jsEchart(req, res)
}, true)


export default {
    ...jsEchat,
    ...jsList
}