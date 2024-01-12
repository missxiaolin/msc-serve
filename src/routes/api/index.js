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
    ...alert
}