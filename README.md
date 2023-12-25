# express-serve

## sdk

https://github.com/missxiaolin/msc-sdk

## adm

https://github.com/missxiaolin/msc-adm

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

### pm2 守护进程

### 安装pm2

~~~
cnpm i pm2 -g
~~~

### 项目创建pm2.jsom

~~~
pm2 start pm2.json
~~~

### 常用pm2 指令

~~~
pm2 start app.js # 启动应用
pm2 start app.js --name="demo" # 启动应用名为demo
pm2 start app.js --watch # 当文件发送变化自动重启应用
pm2 start script.sh # 启动 bash 脚本
pm2 list # 列出PM2启动的应用列表
pm2 show [app-name] # 显示应用的所有信息
pm2 logs # 显示所有应用的程序日志
pm2 logs [app-name] # 显示指定应用程序的日志
pm2 stop all # 停止所有的应用程序
pm2 stor 0 # 停止id为0的应用
pm2 restart all # 重启所有应用
pm2 restart 0 # 重启id为0的应用
pm2 delete all # 关闭删除所有应用
~~~

### 收集

#### log_format配置

~~~
log_format main '$time_local        -       -       $http_x_real_ip $http_host      $status $request_time   $request_length $body_bytes_sent        15d04347-be16-b9ab-0029-24e4b6645950    -       -       9689c3ea-5155-2df7-a719-e90d2dedeb2c    937ba755-116a-18e6-0735-312cba23b00c    $request_method $server_protocol        $request_uri    -       $http_user_agent        -       sample=-&_UC_agent=-&test_device_id=-&-      -       -       -';
~~~

#### 用于接受来自SDK的打点请求

~~~
location = /test.gif {
    empty_gif;
}
~~~

### 测试

http://10.26.15.49/test.gif?a=1

检查access.log，没有问题的话，应该会有如下格式的日志被写入

~~~
05/Aug/2020:20:23:06 +0800        -       -       - www.xl-jk.com      200 0.000   491 43        15d04347-be16-b9ab-0029-24e4b6645950    -       -       9689c3ea-5155-2df7-a719-e90d2dedeb2c    937ba755-116a-18e6-0735-312cba23b00c    GET HTTP/1.1        /test.gif?a=1    -       Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36        -       sample=-&_UC_agent=-&test_device_id=-&-      -       -       -
~~~

### 日志监听

- flume
- rsyslog

安装

~~~
yum install rsyslog
yum install rsyslog-kafka.x86_64
~~~

rsyslog配置

编辑配置文件（路径 /etc/rsyslog.conf  ），在配置文件 #### MODULES #### 的下面添加如下配置（或者在 /etc/rsyslogd/ 目录下添加 XXX.conf 配置文件）

~~~
# 加载omkafka和imfile模块
module(load="omkafka")
module(load="imfile")
 
# nginx template
template(name="nginxAccessTemplate" type="string" string="%hostname%<-+>%syslogtag%<-+>%msg%\n")
 
# ruleset
ruleset(name="nginx-kafka") {
    #日志转发kafka
    action (
        type="omkafka"
	    template="nginxAccessTemplate"
        topic="fee-test"
        broker="localhost:9092"
    )
}
 
# 定义消息来源及设置相关的action
input(type="imfile" Tag="nginx-accesslog" File="/var/log/access.log" Ruleset="nginx-kafka")
~~~

配置简单说明：

- localhost:9092 需要修改为你自己的kafka地址（如果为集群多个地址逗号分隔）
- /var/log/access.log 是监控的nginx日志文件
- topic: fee-test后续通过 kafka-manager 创建


修改完配置后运行： rsyslogd -N 1 或者 rsyslogd -dn 查看配置是否报错

然后重启 rsyslog --service rsyslog restart 重启后查看 /var/log/message 中日志是否报错。

参考文档：

- rsyslog v8-stable(https://www.rsyslog.com/doc/v8-stable/index.html)
- 日志收集之rsyslog kafka配置(https://blog.csdn.net/flyfelu/article/details/83150259)
- 日志收集之rsyslog to kafka(https://www.jianshu.com/p/1b7fdb1cff3c)

### 日志消费

- kafka

#### mac 安装kafka

~~~
brew install kafka
~~~

如果缺少JDK8依赖，或安装了JDK10，则需要先通过brew cask插件安装JDK8：

~~~
brew cask install java8
~~~

安装位置

~~~
/usr/local/Cellar/zookeeper
/usr/local/Cellar/kafka
~~~

配置文件位置

~~~
/usr/local/etc/kafka/server.properties
/usr/local/etc/kafka/zookeeper.properties
~~~

启动

~~~
brew services start zookeeper
brew services start kafka
~~~

创建topic

~~~
kafka-topics --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test
~~~

查看创建的topic

~~~
kafka-topics --list --zookeeper localhost:2181
~~~

发送一些消息

~~~
kafka-console-producer --broker-list localhost:9092 --topic test 
~~~

docker 相关

- Docker以及Docker Compose的安装请参照[官网文档](https://docs.docker.com/get-docker/)
- 通过docker-compose的方式部署（若对kafka以及docker不熟悉，请先了解相关知识）。相关配置参见：[Docker compose Kafka](https://gist.github.com/alphawq/1c2dc14cbc303e32ec45c64e2d764284#docker-compose-kafka-zookeeper-and-kafka-manager), [Zookeeper and Kafka manager](https://gist.github.com/alphawq/1c2dc14cbc303e32ec45c64e2d764284#docker-compose-kafka-zookeeper-and-kafka-manager)


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

### 页面性能监控

页面性能

前面都是错误的一些监控，接下来项目的一些性能，点击热力图如何绘制？

<img src="http://missxiaolin.com/image2020-8-9_16-27-37.png" />
<img src="http://missxiaolin.com/image2020-8-9_16-29-16.png" />

通常我们都是通过浏览器的performmance对象来获取常规的性能指标（如上图所示，perfommance 流程图及兼容性）

- navigationStart 浏览器处理当前网页启动时间
- fetchStart 浏览器发起HTTP请求读取温度的毫秒时间戳
- domainLookupStart 域名查询开始时的时间戳
- connectStart HTTP请求开始向服务器发送的时间戳
- connectEnd 浏览器与服务器连接建立（握手和认证过程结束）的毫秒时间戳
- requestStart 浏览器向服务发出HTTP请求时的时间戳，或者开始读取本地缓存的时间
- resonseStart 浏览器从服务器（或读取本地缓存）收到第一个字节时的时间戳
- responseEnd 浏览器从服务器收到最后一个字节时的时间戳
- domLoding 浏览器开始解析网页dom结构的时间
- domInteractice 网页dom树创建完成开始加载内嵌资源的时间
- domContentLodedEventStart 网页domContentLoaded 事件发生时的时间戳
- domContentLoadedEvendEnd 网页所有需要执行的脚本执行完成时的时间，domReady的时间
- loadEventStart 当前网页load事件的回调函数开始执行的时间戳
- loadEventEnd 当前网页load 事件的回调函数结束的时间戳

等等当然这只是其中一份数据，那么通过这份数据我们可以检测那些信息呢：

- dns查询耗时   dns解析耗时     domainLookupEnd - domainLookupStart
- 请求响应耗时  网络请求耗时    responseStart - requestStart	
- DOM 解析耗时	dom解析耗时	domInteractive - responseEnd	
- 内容传输耗时  TCP连接耗时 responseEnd - responseStart	
- 资源加载耗时  资源加载耗时    loadEventStart - domContentLoadedEventEnd
- DOM_READY耗时 dom阶段渲染耗时 domContentLoadedEventEnd - fetchStart	
- 首次渲染耗时  首次渲染时间/白屏时间   responseEnd - fetchStart	
- 首次可交互耗时    首次可交互时间  domInteractve - fetcgStart	
- 首包时间耗时  首包时间    responseStart - domainLookupStart
- 页面完全加载耗时  页面完全加载时间    loadEventStart - fetchStart	
- SSL连接耗时   SSL安全连接耗时 connectEnd - secureConnectionStart
- TCP连接耗时   TCP连接耗时 connectEnd - connectStart

这部分值已经能反应一些问题：

- DNS查询耗时可以对开发者的CND服务器公祖是否正常做出反馈
- 请求响应耗时能对出返回模板中同步数据的情况作出反馈
- 由DOM解析耗时可以观察我们的DOM结构是否合理，以及是否有JavaScript阻塞我们的页面解析
- 内容传输耗时可以检测出我们的网络是否正常
- 资源加载耗时一般情况下是文档下载时间，主要观察一下文档流体积是否过大
- DOM_READY 耗时通常是DOM树解析完成后，网页内资源加载完成的时间
- 首次渲染耗时表述的是浏览器去加载文档到用户能看到第一帧非空图像，也叫白屏时间
- 首次交互耗时是dom树解析完成的时间
- 首包时间耗时是浏览器对文档发起查找DNS（域名系统）表的请求，到请求返回给浏览器第一个字节数据的时间，这个时间通常反馈的是DNS（域名系统）解析查询的时间
- 页面完全加载耗时指的是下载整个页面的总时间，一般情况下指浏览器对一个URL（统一资源定位符，是对可以从互联网上得到的资源的位置和访问方法的一种简-介的表示，是互联网上标准资源的地址）发起请求到把这个URL上的所需文档下载下来的时间。这个数据主要受到网络环境、文档大小的影响
- SSL连接耗时反馈的是数据安全性、完整性建立耗时
- TCP连接耗时指的是建立连接过程中的耗时，TCP协议主要工作与传输层，是一种UDP更为安全的传输协议