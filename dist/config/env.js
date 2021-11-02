"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 *  === env config ===
 *  环境配置
 *
 */
// 环境变量值=>
// development
// testing
// production
let env = process.env.NODE_ENV || 'development';
var _default = env;
exports.default = _default;