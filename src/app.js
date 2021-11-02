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
import '@babel/polyfill'

process.env.TZ = 'Asia/Shanghai';

import path from 'path'
import createError from 'http-errors'
import express from 'express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import _ from 'lodash'
import ejs from 'ejs'
import appConfig from './config/app'

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const startup = () => {
  const app = express()

  app.use(bodyParser.urlencoded({ "limit": "10000000kb" })); //

  app.use(bodyParser.json({ "limit": "10000000kb" })); //

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  // 设置模板引擎为ejs
  // 设置模板引擎为ejs
  // app.set('view engine', 'ejs')
  app.engine('html', ejs.renderFile)
  // app.set('view engine', 'html')
  app.set('view engine', 'ejs')

  app.use(morgan('dev'))
  // app.use(express.json())
  // app.use(express.urlencoded({ extended: false }))
  // 设置body-parser
  app.use(bodyParser.urlencoded({ extended: false }))
  // 解析json请求
  app.use(bodyParser.json({ extended: false }))
  // 设置cookie-parse
  app.use(cookieParser())

  /* 添加静态路径 */
  app.use(express.static(path.join(__dirname, 'public')))

  // app.options('*', cors())

  app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });

  // 支持跨域
  app.use(cors({
    origin: true,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    credentials: true
  }))

  // 支持前端History模式 => https://router.vuejs.org/zh/guide/essentials/history-mode.html#后端配置例子
  // 将所有404页面均返回index.html
  app.use('*', (req, res) => {
    res.render('index')
  })

  // catch 404 and forward to error handler
  // app.use(function(req, res, next) {
  //   next(createError(404))
  // })

  app.use('/', indexRouter);
  app.use('/users', usersRouter);

  app.set('port', appConfig.port)

  app.listen(appConfig.port, function () {
    console.log(`${appConfig.name} listening on port ${appConfig.port}`)
  })

}


startup()