# express-serve


## 基础安装

### 安装git

之前上网一顿搜索，又说要下载啊，解压啊什么的，后来发现阿里云服务器自带了git安装包的了（反正我买的这个就有），直接上命令：

~~~
yum install git
~~~

### 安装node

我是使用nvm安装的，方便以后可以切换node的版本，首先使用git将源码克隆到本地的~/.nvm目录下，并检查最新版本。

~~~
git clone https://github.com/cnpm/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`
~~~

然后激活NVM

~~~
echo ". ~/.nvm/nvm.sh" >> /etc/profile
source /etc/profile
~~~

然后安装node（我是安装目前的LTS版10.16.0）

~~~
nvm install v10.16.0
~~~

最后使用nodev10.16.0

~~~
nvm use v10.16.0
~~~

测试一下有没有安装成功

~~~
node -v
npm -v
~~~

如果有版本号的话，就证明安装成功了。
PS:这里有个小坑，你试一下输入 reboot 重启服务器？然后 node -v ？ 没了吧。每次重启服务器，都要用node use 版本号才能用node和npm，设置一下别名，这样就可以重启后直接用了

~~~
nvm alias default v10.16.0
~~~

### 运行项目

首先要下载pm2（pm2是啥？自己百度一下吧，我也是这么过来的）

```
npm install -g pm2
```

然后cd到你的express项目里面

~~~
pm2 start ./bin/www
~~~

最后做下nginx 反向代理

~~~
server {

    listen    443 ssl;
    listen    [::]:443 ssl;
    server_name  dbtest.rangersprotocol.com;

    ssl_certificate "/app/cert/5767542__rangersprotocol.com.pem";
    ssl_certificate_key "/app/cert/5767542__rangersprotocol.com.key";

    gzip on;
    gzip_static on;
    gzip_min_length 1k;
    gzip_buffers 16 64k;
    gzip_http_version 1.1;
    gzip_comp_level 9;
    gzip_types text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    gzip_vary on;

    location / {
	    proxy_pass http://localhost:4000;
            proxy_redirect off;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Connection "";
    }
}
~~~


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