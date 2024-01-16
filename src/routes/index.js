var express = require("express");
import login from "../middleware/login";
import RouterConfigBuilder from "../library/utils/router_config_builder";
import Api from "./api";
import fs from 'fs'

const multer = require("multer");

// 设置存储目录和文件名
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (req.url == "/adm/sourcemap/save") {
      const monitorAppId = req.get("MonitorAppId") || "";
      const data = req.body;
      if (!fs.existsSync(`uploads/${monitorAppId}/${data.version}`)) {
        fs.mkdirSync(`uploads/${monitorAppId}/${data.version}`, { recursive: true });
      }
      cb(null, `uploads/${monitorAppId}/${data.version}`);
    } else {
      cb(null, 'uploads/');
    }
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// 路由分为以下部分
const baseRouter = express.Router();

// 不需要登录
const withoutLoginRouter = express.Router();
// 需要登录
const loginRouter = express.Router();

let routerConfigMap = {
  ...Api,
};

/**
 * 根据请求方法注册路由
 * @param {*} customerRouter
 * @param {*} routerConfig
 * @param {*} url
 */
function registerRouterByMethod(
  customerRouter,
  routerConfig,
  url,
  isUpdateFile = false
) {
  switch (routerConfig.methodType) {
    case RouterConfigBuilder.METHOD_TYPE_GET:
      customerRouter.get(url, routerConfig.func);
      break;
    case RouterConfigBuilder.METHOD_TYPE_POST:
      if (isUpdateFile) {
        customerRouter.post(url, upload.single("file"), (req, res) => {
          return routerConfig.func(req, res);
        });
      } else {
        customerRouter.post(url, (req, res) => {
          return routerConfig.func(req, res);
        });
      }

      break;
    default:
  }
}

// 注册路由中间件, 需要在注册路由地址之前使用
loginRouter.use(login);

// 自动注册
for (let url of Object.keys(routerConfigMap)) {
  let routerConfig = routerConfigMap[url];
  if (routerConfig.needLogin) {
    // 需要登录
    registerRouterByMethod(
      loginRouter,
      routerConfig,
      url,
      routerConfig.isUpdateFile
    );
  } else {
    // 不需要登录
    registerRouterByMethod(
      withoutLoginRouter,
      routerConfig,
      url,
      routerConfig.isUpdateFile
    );
  }
}

/* GET home page. */
// withoutLoginRouter.get('/', function (req, res) {
//   res.json({ title: '根路径' })
// })

// 处理逻辑为: 从上到下, 依次处理
baseRouter.use("/", withoutLoginRouter);
baseRouter.use("/", loginRouter);

export default baseRouter;
