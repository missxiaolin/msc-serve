## node-schedule定时器

node-schedule是一个计时器插件，它适用于做这些任务：

每分钟的第几秒钟，执行一个任务

每小时的第几分钟，执行一个任务

每天的第几个小时，执行一个任务

每月的第几天，执行一个任务

每周的第几天，执行一个任务

如果要做固定间隔执行一个任务（固定间隔的任务），没必要用这个插件；

官网：https://www.npmjs.com/package/node-schedule

### 安装

~~~
npm install node-schedule
~~~

### 例子

~~~
const schedule = require('node-schedule')
// 每小时的 第42分钟 执行一个任务 注意是5个星号（最多可有6个星号，从左到右分别代表：秒（0-59）、分（0-59）、时（0-23）、天（1-31）、月（1-12）、星期几（0-7 0和7代表周日））
const job = schedule.scheduleJob('42 * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
});
~~~

### 每秒和每分钟执行一次

~~~
// 每秒执行一次
const job = schedule.scheduleJob('*/1 * * * * *', function(){
  // do some
});
// 每分钟执行一次
const job = schedule.scheduleJob('*/1 * * * *', function(){
  // do some
});
~~~

~~~
// 每小时的第2分钟的第1秒执行一次
const job = schedule.scheduleJob('1 2 * * * *', function(){
  // do some
});
~~~

### 指定一个日期执行

~~~
// 2022-1-25 20:56执行一次
const date = new Date(2022, 0, 25, 20, 56, 0);

const job = schedule.scheduleJob(date, function(){
  // do some
});
~~~

### 在将来使用当前数据：

~~~
const date = new Date(2022, 0, 25, 21, 4, 0);
let x = 1;
const job = schedule.scheduleJob(date, function(y){
  // do some
  console.log(y); // 1
}.bind(null,x));
x = 2
~~~

### 用自定义规则来执行任务：

~~~
// 每分钟的第1秒执行一次
const rule = new schedule.RecurrenceRule();
rule.second = 1;

const job = schedule.scheduleJob(rule, function(){
  // do some
});
~~~

~~~
// 在每周4/5/6 的17时0分执行一次
const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(4, 6)];
rule.hour = 17;
rule.minute = 0;

const job = schedule.scheduleJob(rule, function(){
  // do some
});
~~~

### 支持时区：

~~~
// 用UTC时间
const rule = new schedule.RecurrenceRule();
rule.hour = 0;
rule.tz = 'Etc/UTC';

const job = schedule.scheduleJob(rule, function(){
  // do some
});
~~~

### RecurrenceRule属性：

- second (0-59)
- minute (0-59)
- hour (0-23)
- date (1-31)
- month (0-11)
- year
- dayOfWeek (0-6) Starting with Sunday
- tz

###  支持对象字面量规则：

~~~
// 每周日下午2点半 执行一次
const job = schedule.scheduleJob({hour: 14, minute: 30, dayOfWeek: 0}, function(){
  // do some
});
~~~

### 支持开始时间和结束时间：

~~~
// 延迟5s后开始，10s后结束
const startTime = new Date(Date.now() + 5000);
const endTime = new Date(startTime.getTime() + 5000);
const job = schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, function(){
  // do some
});
~~~

### 优雅（等待所有的工作被终止）的关闭任务，返回promise：

~~~
schedule.gracefulShutdown();
~~~

### 系统中断时，优雅的关闭作业

~~~
process.on('SIGINT', function () { 
  schedule.gracefulShutdown()
  .then(() => process.exit(0))
}
~~~

### 取消某个作业：

~~~
j.cancel();
~~~