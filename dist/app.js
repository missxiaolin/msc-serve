"use strict";

require("@babel/polyfill");

var _path = _interopRequireDefault(require("path"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _lodash = _interopRequireDefault(require("lodash"));

var _ejs = _interopRequireDefault(require("ejs"));

var _app = _interopRequireDefault(require("./config/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var app = express();
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
// module.exports = app;

/*
Copyright(c)  2017  Lianjia, Inc. All Rights Reserved

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
process.env.TZ = 'Asia/Shanghai';

var indexRouter = require('./routes/index');

var usersRouter = require('./routes/users');

const startup = () => {
  const app = (0, _express.default)();
  app.use(_bodyParser.default.urlencoded({
    "limit": "10000000kb"
  })); //

  app.use(_bodyParser.default.json({
    "limit": "10000000kb"
  })); //
  // view engine setup

  app.set('views', _path.default.join(__dirname, 'views')); // 设置模板引擎为ejs
  // 设置模板引擎为ejs
  // app.set('view engine', 'ejs')

  app.engine('html', _ejs.default.renderFile); // app.set('view engine', 'html')

  app.set('view engine', 'ejs');
  app.use((0, _morgan.default)('dev')); // app.use(express.json())
  // app.use(express.urlencoded({ extended: false }))
  // 设置body-parser

  app.use(_bodyParser.default.urlencoded({
    extended: false
  })); // 解析json请求

  app.use(_bodyParser.default.json({
    extended: false
  })); // 设置cookie-parse

  app.use((0, _cookieParser.default)());
  /* 添加静态路径 */

  app.use(_express.default.static(_path.default.join(__dirname, 'public'))); // app.options('*', cors())

  app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  }); // 支持跨域

  app.use((0, _cors.default)({
    origin: true,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    credentials: true
  })); // 支持前端History模式 => https://router.vuejs.org/zh/guide/essentials/history-mode.html#后端配置例子
  // 将所有404页面均返回index.html

  app.use('*', (req, res) => {
    res.render('index');
  }); // catch 404 and forward to error handler
  // app.use(function(req, res, next) {
  //   next(createError(404))
  // })

  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.set('port', _app.default.port);
  app.listen(_app.default.port, function () {
    console.log(`${_app.default.name} listening on port ${_app.default.port}`);
  });
};

startup();