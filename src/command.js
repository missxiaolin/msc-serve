import '@babel/polyfill'
/*
|--------------------------------------------------------------------------
| Ace Setup
|--------------------------------------------------------------------------
|
| Ace is the command line utility to create and run terminal commands.
| Here we setup the environment and register ace commands.
|
*/
import ace from '@adonisjs/ace'

const registedCommandList = [
    './commands/demo', // 命令demo测试
    './commands/save_log/mqLog.js', // RabbitMq
    './commands/save_log/redisLog.js', // RedisMq
    './commands/task/index', // 定时任务
    './commands/page/index', // page 分析
    './commands/dataHour/dataInit.js', // dataHour表初始化
    './commands/dataHour/index.js', // 分析数据插入
    './commands/watch_dog/alarm.js', // 监控发送
    './commands/elasticsearch/esCreateIndex.js', // es 索引创建
    './commands/elasticsearch/esIndxList.js', // 获取es索引列表
    './commands/elasticsearch/index.js', // es存储
]


// register commands
for (let command of registedCommandList) {
    ace.addCommand(require(command)['default'])
}

// Boot ace to execute commands
ace.wireUpWithCommander()
ace.invoke()

