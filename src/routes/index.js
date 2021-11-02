var express = require('express')
var router = express.Router()

import RouterConfigBuilder from '../library/utils/router_config_builder'

/* GET home page. */
router.get('/', function (req, res) {
  res.json({ title: '根路径' })
})

export default router