const config = {
  loginType: 'normal', // 登录类型，uc(内部uc登录)/normal(普通登录)
  use: {
    kafka: false, // 是否使用kafka。如果没有kafka，设为false，并且指定下面的nginxLogFilePath
    alarm: false, // 是否使用报警功能。如果启用，请在alarm配置里指定报警网址
    mq: false, // 是否开启mq
    es: false, // 是否开启es
    redisMq: true, // 是否开启redis mq
  },
  // nginxLogFilePath: '/Users/xiaolin/web/miss/msc/msc-serve/dist/log/nginx' // ngnix日志文件根路径，此路径下面的日志文件命名格式请参照readme
}

export default config
