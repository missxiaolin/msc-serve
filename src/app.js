import "@babel/polyfill";

process.env.TZ = "Asia/Shanghai";

import path from "path";
import createError from "http-errors";
import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import router from "./routes/index";
import cors from "cors";
import appConfig from "./config/app";
import bodyParser from "body-parser";
import _ from "lodash";
import ejs from "ejs";

const startup = () => {
  const app = express();

  // view engine setup
  app.set("views", path.join(__dirname, "views"));

  // 设置模板引擎为ejs
  app.engine("html", ejs.__express);
  // app.engine('html', ejs.renderFile)
  app.set("view engine", "html");
  // app.set('view engine', 'ejs')

  app.use(morgan("dev"));
  // app.use(express.json())
  // app.use(express.urlencoded({ extended: false }))
  app.use(bodyParser.urlencoded({ limit: "10000000kb" }));
  // 设置body-parser
  // app.use(bodyParser.urlencoded({ extended: false }))
  // 解析json请求
  // app.use(bodyParser.json({ extended: false }))
  app.use(bodyParser.json({ limit: "10000000kb" }));
  // 设置cookie-parse
  app.use(cookieParser());

  /* 添加静态路径 */
  // app.use(express.static(path.join(__dirname, './views/static')))

  app.use(
    express.static(path.join(__dirname, "./views/static"), {
      etag: false,
      setHeaders: (res, path, stat) => {
        res.set("Cache-Control", "no-store");
      },
    })
  );

  // app.options('*', cors())

  app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });

  // 支持跨域
  app.use(
    cors({
      origin: true,
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
      credentials: true,
    })
  );

  app.use("/", async (req, res, next) => {
    let path = req.path;
    // 只对以 /api & /project/${projectId}/api 路径开头的接口进行响应
    let projectApiReg = /^\/project\/\d+\/api/i;
    if (
      _.startsWith(path, "/api") ||
      _.startsWith(path, "/adm") ||
      path.search(projectApiReg) === 0
    ) {
      return router(req, res, next);
    } else {
      next();
    }
  });

  // 支持前端History模式 => https://router.vuejs.org/zh/guide/essentials/history-mode.html#后端配置例子
  // 将所有404页面均返回index.html
  // 设置正确的 MIME 类型
  // app.use((req, res, next) => {
  //   const ext = path.extname(req.url);
  //   if (ext === ".js") {
  //     res.type("application/javascript");
  //   } else if (ext === ".css") {
  //     res.type("text/css");
  //   } else {
  //     res.type("html");
  //   }
  //   next();
  // });
  app.use("*", (req, res) => {
    res.json({
      success: false,
      errorMessage: '接口不存在',
      model: {}
    })
    // res.render("index");
    // res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
  // app.use('*', (req, res) => {
  //   res.json({
  //     success: false,
  //     errorMessage: '接口不存在',
  //     model: {}
  //   })
  // })

  // catch 404 and forward to error handler
  // app.use(function(req, res, next) {
  //   next(createError(404))
  // })

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });

  app.set("port", appConfig.port);

  app.listen(appConfig.port, function () {
    console.log(`${appConfig.name} listening on port ${appConfig.port}`);
  });
};

startup();
