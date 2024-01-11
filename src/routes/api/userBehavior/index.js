import _ from 'lodash'
import UserController from '../../../controller/user'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const userController = new UserController()

// js table
const getUserBehavior = RouterConfigBuilder.routerConfigBuilder('/adm/get/user/behavior', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return userController.getUserBehavior(req, res)
}, true)




export default {
    ...getUserBehavior,
}