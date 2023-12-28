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
    './commands/task/index', // 定时任务
    './commands/page/index', // page 分析
    './commands/dataHour/dataInit.js', // dataHour表初始化
    './commands/dataHour/index.js', // 分析数据插入
]


// register commands
for (let command of registedCommandList) {
    ace.addCommand(require(command)['default'])
}

// Boot ace to execute commands
ace.wireUpWithCommander()
ace.invoke()

