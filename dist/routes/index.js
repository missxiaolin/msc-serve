"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _router_config_builder = _interopRequireDefault(require("../library/utils/router_config_builder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  console.log('ssssss');
  res.json({
    title: '根路径'
  });
});
var _default = router;
exports.default = _default;