// redis 配置。 redis 使用参见 http://devdocs.io/redis/

import env from "./env";

const mqKey = {
  // 消息频道名称
  name: "QUEUE_MY_MQ",
  // 阻塞式取值超时配置
  brPopTimeout: 100,
};

const development = {
  host: "127.0.0.1",
  port: "6379",
  password: "",
  isOpen: true,
  mqKey
};

// 测试环境配置
const testing = development;

// 线上环境配置
const production = {
  host: "106.15.43.125",
  port: "6666",
  password: "eY7NusYCgb6ClhOB",
  isOpen: true,
  mqKey
};

let config = {
  development,
  testing,
  production,
};

export default config[env];
