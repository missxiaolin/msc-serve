import _ from 'lodash'
import Recordscreen from '../../../controller/recordscreen'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const recordscreenController = new Recordscreen()

// 项目列表
const recordScreenList = RouterConfigBuilder.routerConfigBuilder('/adm/recordscreen/list', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return recordscreenController.recordscreenList(req, res)
}, true)

// 解析视频返回
const recordScreenVideo = RouterConfigBuilder.routerConfigBuilder('/adm/recordscreen/video', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return recordscreenController.recordscreenGetVideo(req, res)
}, true)

export default {
    ...recordScreenList,
    ...recordScreenVideo
}