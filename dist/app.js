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

var _index = _interopRequireDefault(require("./routes/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

process.env.TZ = 'Asia/Shanghai';

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

  app.use('/', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (req, res, next) {
      let path = req.path; // 只对以 /api & /project/${projectId}/api 路径开头的接口进行响应

      let projectApiReg = /^\/project\/\d+\/api/i;

      if (_lodash.default.startsWith(path, '/api') || path.search(projectApiReg) === 0 || path == '/') {
        return (0, _index.default)(req, res, next);
      } else {
        next();
      }
    });

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
  app.set('port', _app.default.port);
  app.listen(_app.default.port, function () {
    console.log(`${_app.default.name} listening on port ${_app.default.port}`);
  });
};

startup();