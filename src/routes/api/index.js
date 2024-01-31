import index from './index/index'
import login from './login/index'
import performance from './performance/index'
import resource from './resource/index'
import page from './page/index'
import js from './js/index'
import request from './request/index'
import project from './project'
import userBehavior from './userBehavior'
import alert from './alert'
import sourcemap from './sourcemap'
import recordScreen from './recordScreen'

export default {
    ...index,
    ...login,
    ...performance,
    ...resource,
    ...page,
    ...js,
    ...request,
    ...project,
    ...userBehavior,
    ...alert,
    ...sourcemap,
    ...recordScreen
}