import Base from "../base";
import Util from "../../common/utils";
import moment from "moment";
import shell from "shelljs";
import _ from "lodash";
import schedule from "node-schedule";

// https://www.npmjs.com/package/node-schedule
// *  *  *  *  *  *
// ┬ ┬ ┬ ┬ ┬ ┬
// │ │ │ │ │  |
// │ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
// │ │ │ │ └───── month (1 - 12)
// │ │ │ └────────── day of month (1 - 31)
// │ │ └─────────────── hour (0 - 23)
// │ └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)

export default class TaskManager extends Base {
  static get signature() {
    return `
         Task:Manager
         `;
  }

  static get description() {
    return "任务调度主进程, 只能启动一次";
  }

  async handle() {
    this.log("任务主进程启动");
    // 启动先关闭其他TaskManager进程
    await this.closeOtherTaskManager();

    this.log("开始休眠");
    for (let i = 0; i < 10; i++) {
      await Util.getInstance().sleep(1 * 1000);
      console.log(`休眠中, 第${i + 1}秒`);
    }
    this.log("休眠完毕");
    this.log("开始注册cron任务");
    // 注册定时任务
    this.registerTaskRepeatPer59Minute();

    // 1分钟任务
    this.registerTaskRepeatPer1Minute()

    // 5分钟任务
    this.registerTaskRepeatPer5Minute()

    // 每天凌晨执行一次任务
    this.registerTaskRepeatPer1Day()
  }



  /**
   * 每1分钟启动一次
   */
  async registerTaskRepeatPer1Minute() {
    schedule.scheduleJob("0 */1 * * * *", () => {
      console.log('每分钟任务')
    });
  }

  /**
   * 每5分钟启动一次
   */
  async registerTaskRepeatPer5Minute() {
    schedule.scheduleJob("59 */4 * * * *", () => {
      const summaryCommandList = ["Data:Hour"];
      for (let summaryCommand of summaryCommandList) {
        this.dispatchParseCommand(summaryCommand);
      }
    });
  }

  /**
   * 每小时59分59秒执行
   */
  async registerTaskRepeatPer59Minute() {
    schedule.scheduleJob("59 59 * * * *", () => {
      const startTime = moment().format("YYYY-MM-DD 00:00:00"),
        endTime = moment().format("YYYY-MM-DD 23:59:59");
      const summaryCommandList = ["Page:Analysis"];
      for (let summaryCommand of summaryCommandList) {
        this.dispatchParseCommand(summaryCommand, startTime, endTime);
      }
    });
  }

  /**
   * 每天凌晨执行一次任务
   */
  async registerTaskRepeatPer1Day() {
    schedule.scheduleJob("0 0 0 * * *", () => {
      const summaryCommandList = ["Data:Hour:Init"];
      for (let summaryCommand of summaryCommandList) {
        this.dispatchParseCommand(summaryCommand);
      }
    })
  }

  /**
   * 注册每10分钟执行一次的任务
   */
  async registerTaskRepeatPer10Minute() {
    // 每10分钟的第30秒启动
    schedule.scheduleJob("15 */10 * * * * *", function () {});
  }

  /**
   * 注册每6小时执行一次的任务
   */
  async registerTaskRepeatPer6Hour() {
    // 每过6小时, 在35分45秒启动
    schedule.scheduleJob("45 35 */6 * * * *", function () {});
  }

  async getOtherTaskMangerPidList() {
    // 命令本身也会被检测出来, sh -c npm run warning && NODE_ENV=development node dist/fee.js "Task:Manager"
    let command =
      "ps aS|grep Task:Manager|grep node|grep command|grep -v grep | grep -v  '\"Task:Manager\"'";
    this.log(`检测命令 => ${command}`);
    let rawCommandOutput = shell.exec(command, {
      async: false,
      silent: true,
    });
    let rawCommandOutputList = rawCommandOutput.split("\n");
    let taskManagerPidList = [];
    for (let rawCommandOutput of rawCommandOutputList) {
      var commandOutput = _.trim(rawCommandOutput);
      commandOutput = _.replace(commandOutput, "\t", " ");
      let pid = commandOutput.split(" ")[0];
      pid = parseInt(pid);
      if (_.isNumber(pid) && pid > 0) {
        if (pid !== process.pid) {
          taskManagerPidList.push(pid);
        }
      }
    }
    return taskManagerPidList;
  }

  /**
   * 启动先关闭其他TaskManager进程
   */
  async closeOtherTaskManager() {
    let taskManagerPidList = await this.getOtherTaskMangerPidList();
    this.log("当前process.pid =>", process.pid);
    this.log(`其余TaskManger进程Pid列表 => `, taskManagerPidList);
    this.log("执行kill操作, 关闭其余进程");
    for (let pid of taskManagerPidList) {
      this.log(`kill pid => ${pid}`);
      try {
        process.kill(pid);
      } catch (e) {
        let message = `TaskManger进程pid => ${pid} kill失败, 该pid不存在或者没有权限kill`;
        this.log(message);
      }
    }
    this.log("kill操作执行完毕, 休眠3s, 再次检测剩余TaskManager进程数");
    await Util.getInstance().sleep(3 * 1000);
    this.log("开始检测剩余TaskManager进程数");
    taskManagerPidList = await this.getOtherTaskMangerPidList();
    if (taskManagerPidList.length === 0) {
      this.log("剩余TaskManager为空, 可以继续执行任务调度进程");
      return true;
    }
    // PM2 3.2.2 有bug, 无法保证TaskManager只有一个实例, 因此需要主动进行检测
    // 否则, 直接终止该进程
    let alertMessage =
      "仍然有残留TaskManager进程, 程序不能保证正常执行, 自动退出. 剩余 TaskManager pid List => " +
      JSON.stringify(taskManagerPidList);
    this.warn(alertMessage);
    // 花式自尽
    process.kill(process.pid);
    process.exit(1);
  }
}
