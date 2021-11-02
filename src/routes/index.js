var express = require('express')
var router = express.Router()

import RouterConfigBuilder from '../library/utils/router_config_builder'
import Api from './api'

// 路由分为以下部分

let routerConfigMap = {
  ...Api
}

/**
 * 根据请求方法注册路由
 * @param {*} routerConfig
 * @param {*} url
 */
 function registerRouterByMethod(routerConfig, url) {
  switch (routerConfig.methodType) {
    case RouterConfigBuilder.METHOD_TYPE_GET:
      router.get(url, routerConfig.func)
      break
    case RouterConfigBuilder.METHOD_TYPE_POST:
      router.post(url, (req, res) => {
        return routerConfig.func(req, res)
      })
      break
    default:
  }
}


/* GET home page. */
router.get('/', function (req, res) {
  res.json({ title: '根路径' })
})

// 自动注册
for (let url of Object.keys(routerConfigMap)) {
  let routerConfig = routerConfigMap[url]
  // 不需要登录
  registerRouterByMethod(routerConfig, url)
}

export default router