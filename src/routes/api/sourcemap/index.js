import _ from 'lodash'
import SourcemapController from '../../../controller/sourcemap'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const sourcemapController = new SourcemapController()

// sourcemap保存
const sourcemapSave = RouterConfigBuilder.routerConfigBuilder('/adm/sourcemap/save', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return sourcemapController.sourcemapSave(req, res)
}, true, true)

// sourcemap列表
const sourcemapList = RouterConfigBuilder.routerConfigBuilder('/adm/sourcemap/list', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return sourcemapController.sourcemapList(req, res)
}, true)

export default {
    ...sourcemapSave,
    ...sourcemapList
}