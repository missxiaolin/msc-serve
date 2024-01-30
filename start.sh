 #!/bin/bash

echo "启动"

pm2 start pm2.json --no-daemon
pm2 start pm2.task.json --no-daemon
pm2 start pm2.redisQuery.json --no-daemon

echo "启动完成"
