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
