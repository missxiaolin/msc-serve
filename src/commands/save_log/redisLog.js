import Base from "../base";
import ErrorSave from "../../common/err_save";
const errprSave = new ErrorSave();
const cluster = require("cluster");
const os = require("os");

const numCPUs = os.cpus().length; // 获取CPU核心数
const consumerCount = 3; // 配置消费者数量
let workers = []; // 存储子进程实例

class SaveLog extends Base {
  static get signature() {
    return `
            Redie:Mq
        `;
  }

  static get description() {
    return "解析redis日志, 按日志创建时间将原日志和解析后合法的json日志落在log文件中";
  }

  /**
   * 收集log
   * @param {*} args
   * @param {*} options
   */
  async execute(args, options) {
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

      // 重新启动服务
    //   function restart() {
    //     // 关闭所有子进程
    //     cluster.disconnect(() => {
    //       // 重新创建子进程
    //       for (let i = 0; i < Math.min(numCPUs, consumerCount); i++) {
    //         this.createWorker();
    //       }
    //     });
    //   }

      // 示例：按需调整消费者数量
      //   setTimeout(() => {
      //     consumerCount = 5; // 更新消费者数量为5
      //     restart(); // 重新启动服务
      //   }, 60000);
    } else { // 开始做子进程的队列逻辑
      console.log(2);
    }
  }

  createWorker() {
    const worker = cluster.fork();
    console.log(`Worker ${worker.process.pid} started`);
  }
}

export default SaveLog;
