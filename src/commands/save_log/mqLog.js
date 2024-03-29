import Base from "../base";
import RabbitMq from "../../library/mq/index";
import ErrorSave from "../../common/err_save";
const errprSave = new ErrorSave();
import dotenv from "dotenv";
const appConfig = dotenv.config().parsed;

const cluster = require("cluster");
const os = require("os");
const numCPUs = os.cpus().length; // 获取CPU核心数
const consumerCount = 3; // 配置消费者数量

// const MAX_RUN_TIME = 29 * 1000 // 29s后自动关闭

// 安装
// docker pull rabbitmq:3.9.10-management
// docker run -d --hostname my-rabbit --name rabbitmq -p 15672:15672 -p 5672:5672 rabbitmq:3.9.10-management
class SaveLog extends Base {
  static get signature() {
    return `
            SaveLog:Mq
        `;
  }

  static get description() {
    return "解析mq日志, 按日志创建时间将原日志和解析后合法的json日志落在log文件中, 每运行30s自动退出";
  }

  /**
   * 收集log
   * @param {*} args
   * @param {*} options
   */
  async execute(args, options) {
    if (appConfig.RABBIT_MQ_IS_OPEN == 0) {
        return
    }
    if (cluster.isMaster) {
      // 创建子进程
      for (let i = 0; i < Math.min(numCPUs, consumerCount); i++) {
        this.createWorker();
      }

      // 监听子进程退出事件
      cluster.on("exit", (worker, code, signal) => {
        console.log(
          `Worker ${worker.process.pid} exited with code ${code} and signal ${signal}`
        );
        // 重启子进程
        this.createWorker();
      });
    } else {
      const mq = new RabbitMq();
      mq.receiveQueueMsg(
        "webLogSave",
        (res) => {
          errprSave.save(JSON.parse(res));
        },
        (error) => {}
      );
    }
    
  }

  createWorker() {
    const worker = cluster.fork();
    console.log(`Worker ${worker.process.pid} started`);
  }
}

export default SaveLog;
