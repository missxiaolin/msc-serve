import Base from "../base";
import Knex from "../../library/mysql";
import dotenv from "dotenv";

const sql = [
  {
    tableName: "adm_user",
    sql: [
      `CREATE TABLE \`adm_user\` (
                \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
                \`username\` varchar(30) NOT NULL DEFAULT '' COMMENT '用户名',
                \`password\` varchar(300) NOT NULL DEFAULT '' COMMENT '密码',
                PRIMARY KEY (\`id\`)
              ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
      `INSERT INTO \`adm_user\` (\`id\`, \`username\`, \`password\`)
              VALUES
                  (1,'admin','25d55ad283aa400af464c76d713c07ad');`,
    ],
  },
  {
    tableName: "alarm_config",
    sql: [
      `CREATE TABLE \`alarm_config\` (
                \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
                \`monitorAppId\` varchar(300) NOT NULL DEFAULT '' COMMENT '项目所属',
                \`errorType\` varchar(50) NOT NULL DEFAULT '' COMMENT '错误类型',
                \`errorName\` varchar(255) NOT NULL DEFAULT '' COMMENT '要报警错误名字',
                \`timeRangeS\` int(20) NOT NULL COMMENT '报警时间范围_秒',
                \`maxErrorCount\` int(20) NOT NULL COMMENT '报警错误数阈值',
                \`alarmIntervalS\` int(11) NOT NULL COMMENT '报警时间间隔_秒',
                \`isEnable\` tinyint(2) NOT NULL COMMENT '是否开启本条报警配置1：是0：否',
                \`alertType\` varchar(50) NOT NULL DEFAULT '' COMMENT '告警方式 1 钉钉',
                \`dingConfig\` varchar(300) NOT NULL DEFAULT '' COMMENT '钉钉配置',
                \`note\` varchar(300) NOT NULL DEFAULT '' COMMENT '配置说明',
                \`serviceType\` varchar(10) NOT NULL DEFAULT '' COMMENT '参数 = < >',
                \`whereType\` varchar(10) NOT NULL DEFAULT '' COMMENT '求和 where 平均 avg',
                \`startHour\` varchar(20) NOT NULL DEFAULT '' COMMENT '告警时间点',
                \`endHour\` varchar(20) NOT NULL DEFAULT '' COMMENT '告警时间点',
                \`startTime\` datetime NOT NULL,
                \`updateTime\` datetime NOT NULL,
                PRIMARY KEY (\`id\`)
              ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
    ],
  },
  {
    tableName: "alarm_config",
    sql: [
      `CREATE TABLE \`alarm_history\` (
            \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
            \`alarmId\` int(11) DEFAULT NULL COMMENT '关联告警表id',
            \`sendContent\` varchar(3000) NOT NULL COMMENT '发送内容',
            \`errorMsg\` varchar(2000) NOT NULL DEFAULT '' COMMENT '错误',
            \`isSuccess\` tinyint(5) NOT NULL COMMENT '是否成功',
            \`updateTime\` datetime NOT NULL,
            PRIMARY KEY (\`id\`)
          ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
    ],
  },
  {
    tableName: "click_log",
    sql: [
      `CREATE TABLE \`click_log\` (
        \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
        \`category\` varchar(30) NOT NULL DEFAULT '' COMMENT '类别',
        \`monitorAppId\` varchar(100) NOT NULL DEFAULT '' COMMENT '项目',
        \`uuId\` varchar(100) NOT NULL DEFAULT '' COMMENT '用户标识',
        \`level\` varchar(10) NOT NULL DEFAULT '' COMMENT '级别',
        \`happenTime\` datetime NOT NULL COMMENT '上报时间',
        \`screenHeight\` int(11) NOT NULL COMMENT '设备高度',
        \`screenWidth\` int(11) NOT NULL COMMENT '设备宽度',
        \`pageUrl\` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面链接',
        \`simpleUrl\` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面带*链接',
        \`tagName\` varchar(100) NOT NULL DEFAULT '' COMMENT '事件触发标签',
        \`top\` varchar(50) NOT NULL DEFAULT '' COMMENT '被点击元素距top 距离',
        \`left\` varchar(50) NOT NULL DEFAULT '' COMMENT '被点击距left 距离',
        \`eventType\` varchar(30) NOT NULL DEFAULT '' COMMENT '点击事件类型',
        \`pageHeight\` varchar(30) NOT NULL DEFAULT '' COMMENT '页面高度',
        \`subType\` varchar(30) NOT NULL DEFAULT '' COMMENT '子类型 事件类型',
        \`startTime\` varchar(50) NOT NULL DEFAULT '' COMMENT '页面加载后 至 发生错误时间',
        \`innerHTML\` text NOT NULL COMMENT '点击标签内部html',
        \`viewport\` varchar(300) NOT NULL DEFAULT '' COMMENT '屏幕 可视宽、高',
        \`targetInfo\` varchar(300) NOT NULL DEFAULT '' COMMENT '被点击元素的 offsetWidth,  offsetHeight,',
        PRIMARY KEY (\`id\`),
        KEY \`m_id_time\` (\`monitorAppId\`,\`happenTime\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
    ],
  },
  {
    tableName: "data_hour",
    sql: [
      `CREATE TABLE \`data_hour\` (
        \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
        \`monitorAppId\` varchar(100) NOT NULL DEFAULT '' COMMENT '项目ID',
        \`happenTime\` datetime NOT NULL COMMENT '时间精确到小时',
        \`pvCount\` int(11) NOT NULL COMMENT '页面pv',
        \`uvCount\` int(11) NOT NULL COMMENT '页面uv',
        \`jsErrorCount\` int(11) NOT NULL COMMENT 'js错误个数',
        \`resourceLinkCount\` int(11) NOT NULL COMMENT '资源css错误',
        \`resourceScriptCount\` int(11) NOT NULL COMMENT '资源js错误',
        \`resourceImgCount\` int(11) NOT NULL COMMENT '资源图片错误',
        PRIMARY KEY (\`id\`),
        KEY \`m_id_time\` (\`monitorAppId\`,\`happenTime\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
    ],
  },
  {
    tableName: "http_log",
    sql: [
      `CREATE TABLE \`http_log\` (
        \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
        \`category\` varchar(30) NOT NULL COMMENT '类别',
        \`monitorAppId\` varchar(100) NOT NULL DEFAULT '' COMMENT '项目',
        \`uuId\` varchar(100) NOT NULL DEFAULT '' COMMENT '用户标识',
        \`level\` varchar(10) NOT NULL DEFAULT '' COMMENT '级别',
        \`happenTime\` datetime NOT NULL COMMENT '上报时间',
        \`netWork\` varchar(10) NOT NULL DEFAULT '' COMMENT '网络',
        \`ip\` varchar(300) DEFAULT NULL COMMENT 'ip',
        \`country\` varchar(10) NOT NULL DEFAULT '' COMMENT '省',
        \`province\` varchar(10) NOT NULL DEFAULT '' COMMENT '市',
        \`city\` varchar(10) NOT NULL DEFAULT '' COMMENT '区',
        \`pageUrl\` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面链接',
        \`simpleUrl\` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面带*链接',
        \`duration\` varchar(30) NOT NULL DEFAULT '' COMMENT 'http 请求持续时间',
        \`method\` varchar(30) NOT NULL DEFAULT '' COMMENT 'http 请求方式： Post, Get',
        \`pathName\` varchar(100) NOT NULL DEFAULT '' COMMENT 'http 请求链接',
        \`requestText\` text NOT NULL COMMENT 'http 请求入参',
        \`responseText\` text NOT NULL COMMENT 'http 请求结果',
        \`httpOptions\` varchar(500) NOT NULL DEFAULT '' COMMENT 'http 请求配置,',
        \`status\` varchar(11) NOT NULL DEFAULT '' COMMENT 'http 状态码',
        \`timeout\` varchar(11) NOT NULL DEFAULT '' COMMENT 'http 超时时间',
        \`statusText\` varchar(30) NOT NULL DEFAULT '' COMMENT 'http 状态描述',
        \`type\` varchar(100) NOT NULL DEFAULT '' COMMENT 'http 请求工具: xml,fetch',
        \`eventType\` varchar(50) NOT NULL DEFAULT '' COMMENT 'http ： load error abort',
        PRIMARY KEY (\`id\`),
        KEY \`m_id_time\` (\`monitorAppId\`,\`happenTime\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
    ],
  },
  {
    tableName: "issueInfo",
    sql: [
      `CREATE TABLE \`issueInfo\` (
        \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
        \`monitorAppId\` varchar(300) NOT NULL DEFAULT '' COMMENT '项目ID',
        \`category\` varchar(50) NOT NULL DEFAULT '' COMMENT '错误类别',
        \`errorMsg\` varchar(2000) NOT NULL DEFAULT '' COMMENT '错误信息',
        \`simpleUrl\` varchar(2000) NOT NULL DEFAULT '' COMMENT '错误页面',
        \`errorTotal\` int(11) NOT NULL COMMENT '错误数量',
        \`startTime\` datetime NOT NULL COMMENT '开始时间',
        \`endtTime\` datetime NOT NULL COMMENT '修复时间',
        \`handlerUser\` int(11) NOT NULL COMMENT '修复人',
        \`status\` tinyint(4) NOT NULL COMMENT '状态 1: 未修复 2: 修复中 3: 已忽略 4: 已修复 5: 重复出现',
        PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
    ],
  },
  {
    tableName: "js_log",
    sql: [
      `CREATE TABLE \`js_log\` (
        \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
        \`category\` varchar(30) NOT NULL COMMENT '类别',
        \`monitorAppId\` varchar(100) NOT NULL DEFAULT '' COMMENT '项目',
        \`userAgent\` varchar(500) NOT NULL DEFAULT '' COMMENT 'UA',
        \`uuId\` varchar(100) NOT NULL DEFAULT '' COMMENT '用户标识',
        \`level\` varchar(10) NOT NULL DEFAULT '' COMMENT '级别',
        \`happenTime\` datetime NOT NULL COMMENT '上报时间',
        \`deviceType\` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
        \`os\` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
        \`browserInfo\` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
        \`device\` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
        \`deviceModel\` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
        \`screenHeight\` int(11) NOT NULL COMMENT '设备高度',
        \`screenWidth\` int(11) NOT NULL COMMENT '设备宽度',
        \`language\` varchar(30) NOT NULL DEFAULT '' COMMENT '语言',
        \`netWork\` varchar(10) NOT NULL DEFAULT '' COMMENT '网络',
        \`ip\` varchar(300) NOT NULL DEFAULT '' COMMENT 'ip',
        \`country\` varchar(10) NOT NULL DEFAULT '' COMMENT '省',
        \`province\` varchar(10) NOT NULL DEFAULT '' COMMENT '市',
        \`city\` varchar(10) NOT NULL DEFAULT '' COMMENT '区',
        \`pageUrl\` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面链接',
        \`simpleUrl\` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面带*链接',
        \`errorMsg\` varchar(1000) NOT NULL DEFAULT '' COMMENT '错误信息',
        \`line\` int(11) NOT NULL COMMENT 'js错误行',
        \`type\` varchar(30) NOT NULL DEFAULT '' COMMENT '错误类型',
        \`col\` int(11) NOT NULL COMMENT 'js错误行列',
        \`stackTraces\` text NOT NULL COMMENT '错误栈',
        \`componentName\` varchar(30) NOT NULL DEFAULT '' COMMENT '组件名称',
        \`subType\` varchar(300) NOT NULL DEFAULT '' COMMENT '二级类型 js、 vue',
        \`propsData\` text NOT NULL COMMENT '组件prop',
        \`hook\` varchar(300) NOT NULL DEFAULT '' COMMENT '报错的Vue阶段',
        \`componentNameTrace\` text NOT NULL COMMENT '组件tree',
        PRIMARY KEY (\`id\`),
        KEY \`m_id_time\` (\`monitorAppId\`,\`happenTime\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
    ],
  },
  {
    tableName: "page_data_analysis",
    sql: [
      `CREATE TABLE \`page_data_analysis\` (
        \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
        \`monitorAppId\` varchar(300) DEFAULT '',
        \`pvCount\` int(11) NOT NULL,
        \`uvCount\` int(11) NOT NULL,
        \`newUvCount\` int(11) NOT NULL,
        \`ipCounct\` int(11) NOT NULL,
        \`jumpCount\` int(11) NOT NULL,
        \`visitFrequency\` float NOT NULL,
        \`happenTime\` datetime NOT NULL,
        PRIMARY KEY (\`id\`),
        KEY \`m_id_time\` (\`monitorAppId\`,\`happenTime\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
    ],
  },
  {
    tableName: "page_log",
    sql: [
      `CREATE TABLE \`page_log\` (
        \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
        \`category\` varchar(30) NOT NULL COMMENT '上报类别',
        \`monitorAppId\` varchar(100) NOT NULL DEFAULT '' COMMENT '项目',
        \`userAgent\` varchar(500) NOT NULL DEFAULT '' COMMENT 'UA',
        \`uuId\` varchar(100) NOT NULL DEFAULT '' COMMENT '用户标识',
        \`level\` varchar(10) NOT NULL DEFAULT '' COMMENT '级别',
        \`happenTime\` datetime NOT NULL COMMENT '上报时间',
        \`deviceType\` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
        \`os\` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
        \`browserInfo\` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
        \`device\` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
        \`deviceModel\` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
        \`screenHeight\` int(11) NOT NULL COMMENT '设备高度',
        \`screenWidth\` int(11) NOT NULL COMMENT '设备宽度',
        \`language\` varchar(30) NOT NULL DEFAULT '' COMMENT '语言',
        \`netWork\` varchar(10) NOT NULL DEFAULT '' COMMENT '网络',
        \`ip\` varchar(300) NOT NULL DEFAULT '' COMMENT 'ip',
        \`country\` varchar(10) NOT NULL DEFAULT '' COMMENT '省',
        \`province\` varchar(10) NOT NULL DEFAULT '' COMMENT '市',
        \`city\` varchar(10) NOT NULL DEFAULT '' COMMENT '区',
        \`pageUrl\` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面链接',
        \`simpleUrl\` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面带*链接',
        \`to\` varchar(300) NOT NULL DEFAULT '' COMMENT '跳转进入页面',
        \`from\` varchar(300) NOT NULL DEFAULT '' COMMENT '来源页面',
        \`subType\` varchar(30) NOT NULL DEFAULT '' COMMENT '子类型 ：popstate、hashchange',
        \`duration\` varchar(30) NOT NULL DEFAULT '' COMMENT 'from 页面 停留时间',
        \`startTime\` varchar(50) NOT NULL DEFAULT '' COMMENT '时间',
        \`referrer\` varchar(3000) NOT NULL DEFAULT '',
        \`type\` varchar(100) NOT NULL DEFAULT '',
        PRIMARY KEY (\`id\`),
        KEY \`m_id_time\` (\`monitorAppId\`,\`happenTime\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
    ],
  },
  {
    tableName: "performance",
    sql: [
      `CREATE TABLE \`performance\` (
        \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
        \`sessionId\` varchar(50) NOT NULL DEFAULT '' COMMENT '一次上报id',
        \`monitorAppId\` varchar(100) NOT NULL DEFAULT '' COMMENT '项目ID',
        \`uuId\` varchar(100) NOT NULL DEFAULT '' COMMENT '用户ID',
        \`key\` varchar(300) NOT NULL DEFAULT '' COMMENT '名称',
        \`score\` int(100) NOT NULL COMMENT '分数',
        \`textValue\` text NOT NULL COMMENT '数据',
        \`numValue\` int(100) NOT NULL COMMENT '数据',
        \`happenTime\` datetime NOT NULL COMMENT '时间',
        \`simpleUrl\` varchar(300) NOT NULL DEFAULT '',
        PRIMARY KEY (\`id\`),
        KEY \`m_id_time\` (\`monitorAppId\`,\`happenTime\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
    ],
  },
  {
    tableName: "projects",
    sql: [
      `CREATE TABLE \`projects\` (
        \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
        \`name\` varchar(10) NOT NULL DEFAULT '' COMMENT '应用名称',
        \`desc\` varchar(100) NOT NULL COMMENT '应用说明',
        \`monitorAppId\` varchar(100) NOT NULL DEFAULT '' COMMENT '应用ID',
        \`watch\` varchar(300) NOT NULL DEFAULT '' COMMENT '配置',
        \`cookieUserKey\` varchar(20) NOT NULL,
        \`maxQueues\` tinyint(2) NOT NULL COMMENT '上报条数',
        \`projectType\` varchar(10) NOT NULL DEFAULT '' COMMENT '1 web',
        \`encryption\` varchar(10) NOT NULL DEFAULT '' COMMENT '0 不加密 1 加密',
        \`delay\` int(11) NOT NULL COMMENT '应用间隔时间',
        \`status\` tinyint(2) DEFAULT NULL COMMENT '0 禁用 1 启用',
        \`startTime\` datetime NOT NULL COMMENT '创建时间',
        \`updateTime\` datetime NOT NULL COMMENT '修改时间',
        PRIMARY KEY (\`id\`),
        UNIQUE KEY \`name\` (\`name\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
    ],
  },
  {
    tableName: "promise_log",
    sql: [
      `CREATE TABLE \`promise_log\` (
        \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
        \`category\` varchar(30) NOT NULL DEFAULT '' COMMENT '类别',
        \`monitorAppId\` varchar(100) NOT NULL DEFAULT '' COMMENT '项目',
        \`userAgent\` varchar(500) NOT NULL DEFAULT '' COMMENT 'UA',
        \`uuId\` varchar(100) NOT NULL DEFAULT '' COMMENT '用户标识',
        \`level\` varchar(10) NOT NULL DEFAULT '' COMMENT '级别',
        \`happenTime\` datetime NOT NULL COMMENT '上报时间',
        \`deviceType\` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
        \`os\` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
        \`browserInfo\` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
        \`device\` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
        \`deviceModel\` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
        \`screenHeight\` int(11) NOT NULL COMMENT '设备高度',
        \`screenWidth\` int(11) NOT NULL COMMENT '设备宽度',
        \`language\` varchar(30) NOT NULL DEFAULT '' COMMENT '语言',
        \`netWork\` varchar(10) NOT NULL DEFAULT '' COMMENT '网络',
        \`ip\` varchar(300) NOT NULL DEFAULT '' COMMENT 'ip',
        \`country\` varchar(10) NOT NULL DEFAULT '' COMMENT '省',
        \`province\` varchar(10) NOT NULL DEFAULT '' COMMENT '市',
        \`city\` varchar(10) NOT NULL DEFAULT '' COMMENT '区',
        \`pageUrl\` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面链接',
        \`simpleUrl\` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面带*链接',
        \`errorMsg\` varchar(3000) NOT NULL DEFAULT '' COMMENT '错误信息',
        \`startTime\` varchar(300) NOT NULL DEFAULT '' COMMENT '页面加载后 至 发生错误时间,',
        PRIMARY KEY (\`id\`),
        KEY \`m_id_time\` (\`monitorAppId\`,\`happenTime\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
    ],
  },
  {
    tableName: "record_screen",
    sql: [
      `CREATE TABLE \`record_screen\` (
        \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
        \`monitorAppId\` varchar(100) DEFAULT NULL,
        \`uuId\` int(11) DEFAULT NULL,
        \`category\` varchar(30) DEFAULT NULL,
        \`errorType\` varchar(30) NOT NULL,
        \`level\` varchar(10) DEFAULT NULL,
        \`pageUrl\` varchar(300) NOT NULL DEFAULT '',
        \`simpleUrl\` varchar(300) NOT NULL DEFAULT '',
        \`happenTime\` datetime NOT NULL,
        \`url\` varchar(100) NOT NULL DEFAULT '',
        PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
    ],
  },
  {
    tableName: "resource_log",
    sql: [
      `CREATE TABLE \`resource_log\` (
        \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
        \`category\` varchar(30) NOT NULL DEFAULT '' COMMENT '类别',
        \`monitorAppId\` varchar(100) NOT NULL DEFAULT '' COMMENT '项目',
        \`userAgent\` varchar(500) NOT NULL DEFAULT '' COMMENT 'UA',
        \`uuId\` varchar(100) NOT NULL DEFAULT '' COMMENT '用户标识',
        \`level\` varchar(10) NOT NULL DEFAULT '' COMMENT '级别',
        \`happenTime\` datetime NOT NULL COMMENT '上报时间',
        \`deviceType\` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
        \`os\` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
        \`browserInfo\` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
        \`device\` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
        \`deviceModel\` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
        \`screenHeight\` int(11) NOT NULL COMMENT '设备高度',
        \`screenWidth\` int(11) NOT NULL COMMENT '设备宽度',
        \`language\` varchar(30) NOT NULL DEFAULT '' COMMENT '语言',
        \`netWork\` varchar(10) NOT NULL DEFAULT '' COMMENT '网络',
        \`ip\` varchar(300) NOT NULL DEFAULT '' COMMENT 'ip',
        \`country\` varchar(10) NOT NULL DEFAULT '' COMMENT '省',
        \`province\` varchar(10) NOT NULL DEFAULT '' COMMENT '市',
        \`city\` varchar(10) NOT NULL DEFAULT '' COMMENT '区',
        \`pageUrl\` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面链接',
        \`simpleUrl\` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面带*链接',
        \`errorMsg\` varchar(100) NOT NULL DEFAULT '' COMMENT '错误信息',
        \`url\` varchar(1000) NOT NULL DEFAULT '' COMMENT '错误url',
        \`html\` text NOT NULL,
        \`resourceType\` varchar(100) NOT NULL DEFAULT '' COMMENT '资源类型',
        \`paths\` varchar(3000) NOT NULL DEFAULT '',
        PRIMARY KEY (\`id\`),
        KEY \`m_id_time\` (\`monitorAppId\`,\`happenTime\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
    ],
  },
  {
    tableName: "sourcemap",
    sql: [
      `CREATE TABLE \`sourcemap\` (
        \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
        \`monitorAppId\` varchar(300) NOT NULL COMMENT '项目',
        \`filename\` varchar(100) NOT NULL DEFAULT '' COMMENT 'url',
        \`originalname\` varchar(300) NOT NULL,
        \`destination\` varchar(100) NOT NULL DEFAULT '',
        \`path\` varchar(300) NOT NULL,
        \`size\` int(20) NOT NULL,
        \`version\` varchar(30) NOT NULL DEFAULT '' COMMENT '版本号',
        \`updateTime\` datetime NOT NULL COMMENT '上传时间',
        PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`,
    ],
  },
];

// sql 初始化
class InitSql extends Base {
  static get signature() {
    return `
                Init:Sql
            `;
  }

  static get description() {
    return "sql 初始化";
  }

  async execute(args, options) {
    sql.forEach(async (item) => {
      if (!(await this.isDropTable(item.tableName))) {
        item.sql.forEach(async (v) => {
          await this.createTable(v);
        });
      }
    });
  }

  async createTable(sql) {
    let res = await Knex.raw(sql);
  }

  /**
   * 判断是否存在该表
   * @param {*} table
   * @returns
   */
  async isDropTable(table) {
    let sql = `SHOW TABLES LIKE '${table}'`;
    let res = await Knex.raw(sql);
    if (res[0].length > 0) {
      return true;
    } else {
      return false;
    }
  }
}

export default InitSql;
