# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.44)
# Database: msc_log
# Generation Time: 2024-01-20 11:24:58 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table adm_user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `adm_user`;

CREATE TABLE `adm_user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(300) NOT NULL DEFAULT '' COMMENT '密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `adm_user` WRITE;
/*!40000 ALTER TABLE `adm_user` DISABLE KEYS */;

INSERT INTO `adm_user` (`id`, `username`, `password`)
VALUES
	(1,'admin','25d55ad283aa400af464c76d713c07ad');

/*!40000 ALTER TABLE `adm_user` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table alarm_config
# ------------------------------------------------------------

DROP TABLE IF EXISTS `alarm_config`;

CREATE TABLE `alarm_config` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `monitorAppId` varchar(300) NOT NULL DEFAULT '' COMMENT '项目所属',
  `errorType` varchar(50) NOT NULL DEFAULT '' COMMENT '错误类型',
  `errorName` varchar(255) NOT NULL DEFAULT '' COMMENT '要报警错误名字',
  `timeRangeS` int(20) NOT NULL COMMENT '报警时间范围_秒',
  `maxErrorCount` int(20) NOT NULL COMMENT '报警错误数阈值',
  `alarmIntervalS` int(11) NOT NULL COMMENT '报警时间间隔_秒',
  `isEnable` tinyint(2) NOT NULL COMMENT '是否开启本条报警配置1：是0：否',
  `alertType` varchar(50) NOT NULL DEFAULT '' COMMENT '告警方式 1 钉钉',
  `dingConfig` varchar(300) NOT NULL DEFAULT '' COMMENT '钉钉配置',
  `note` varchar(300) NOT NULL DEFAULT '' COMMENT '配置说明',
  `serviceType` varchar(10) NOT NULL DEFAULT '' COMMENT '参数 = < >',
  `whereType` varchar(10) NOT NULL DEFAULT '' COMMENT '求和 where 平均 avg',
  `startHour` varchar(20) NOT NULL DEFAULT '' COMMENT '告警时间点',
  `endHour` varchar(20) NOT NULL DEFAULT '' COMMENT '告警时间点',
  `startTime` datetime NOT NULL,
  `updateTime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `alarm_config` WRITE;
/*!40000 ALTER TABLE `alarm_config` DISABLE KEYS */;

INSERT INTO `alarm_config` (`id`, `monitorAppId`, `errorType`, `errorName`, `timeRangeS`, `maxErrorCount`, `alarmIntervalS`, `isEnable`, `alertType`, `dingConfig`, `note`, `serviceType`, `whereType`, `startHour`, `endHour`, `startTime`, `updateTime`)
VALUES
	(1,'adm','JS_ERROR','js错误',123600,2,60,1,'[]','','js','>','single','00:00:06','23:59:59','2024-01-13 09:46:56','2024-01-20 19:19:45'),
	(2,'adm','PAGE_PV','PV告警',3600,3,30,0,'[1]','','','>','sum','00:00:00','23:59:59','2024-01-13 10:00:30','2024-01-14 20:24:43');

/*!40000 ALTER TABLE `alarm_config` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table alarm_history
# ------------------------------------------------------------

DROP TABLE IF EXISTS `alarm_history`;

CREATE TABLE `alarm_history` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `alarmId` int(11) DEFAULT NULL COMMENT '关联告警表id',
  `sendContent` varchar(3000) NOT NULL COMMENT '发送内容',
  `errorMsg` varchar(2000) NOT NULL DEFAULT '' COMMENT '错误',
  `isSuccess` tinyint(5) NOT NULL COMMENT '是否成功',
  `updateTime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table click_log
# ------------------------------------------------------------

DROP TABLE IF EXISTS `click_log`;

CREATE TABLE `click_log` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `category` varchar(30) NOT NULL DEFAULT '' COMMENT '类别',
  `monitorAppId` varchar(100) NOT NULL DEFAULT '' COMMENT '项目',
  `uuId` varchar(100) NOT NULL DEFAULT '' COMMENT '用户标识',
  `level` varchar(10) NOT NULL DEFAULT '' COMMENT '级别',
  `happenTime` varchar(30) NOT NULL DEFAULT '' COMMENT '上报时间',
  `screenHeight` int(11) NOT NULL COMMENT '设备高度',
  `screenWidth` int(11) NOT NULL COMMENT '设备宽度',
  `pageUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面链接',
  `simpleUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面带*链接',
  `tagName` varchar(100) NOT NULL DEFAULT '' COMMENT '事件触发标签',
  `top` varchar(50) NOT NULL DEFAULT '' COMMENT '被点击元素距top 距离',
  `left` varchar(50) NOT NULL DEFAULT '' COMMENT '被点击距left 距离',
  `eventType` varchar(30) NOT NULL DEFAULT '' COMMENT '点击事件类型',
  `pageHeight` varchar(30) NOT NULL DEFAULT '' COMMENT '页面高度',
  `subType` varchar(30) NOT NULL DEFAULT '' COMMENT '子类型 事件类型',
  `startTime` varchar(50) NOT NULL DEFAULT '' COMMENT '页面加载后 至 发生错误时间',
  `innerHTML` text NOT NULL COMMENT '点击标签内部html',
  `viewport` varchar(300) NOT NULL DEFAULT '' COMMENT '屏幕 可视宽、高',
  `targetInfo` varchar(300) NOT NULL DEFAULT '' COMMENT '被点击元素的 offsetWidth,  offsetHeight,',
  PRIMARY KEY (`id`),
  KEY `m_id_time` (`monitorAppId`,`happenTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table data_hour
# ------------------------------------------------------------

DROP TABLE IF EXISTS `data_hour`;

CREATE TABLE `data_hour` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `monitorAppId` varchar(100) NOT NULL DEFAULT '' COMMENT '项目ID',
  `happenTime` varchar(30) NOT NULL DEFAULT '' COMMENT '时间精确到小时',
  `pvCount` int(11) NOT NULL COMMENT '页面pv',
  `uvCount` int(11) NOT NULL COMMENT '页面uv',
  `jsErrorCount` int(11) NOT NULL COMMENT 'js错误个数',
  `resourceLinkCount` int(11) NOT NULL COMMENT '资源css错误',
  `resourceScriptCount` int(11) NOT NULL COMMENT '资源js错误',
  `resourceImgCount` int(11) NOT NULL COMMENT '资源图片错误',
  PRIMARY KEY (`id`),
  KEY `m_id_time` (`monitorAppId`,`happenTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table http_log
# ------------------------------------------------------------

DROP TABLE IF EXISTS `http_log`;

CREATE TABLE `http_log` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `category` varchar(30) NOT NULL COMMENT '类别',
  `monitorAppId` varchar(100) NOT NULL DEFAULT '' COMMENT '项目',
  `uuId` varchar(100) NOT NULL DEFAULT '' COMMENT '用户标识',
  `level` varchar(10) NOT NULL DEFAULT '' COMMENT '级别',
  `happenTime` varchar(30) NOT NULL DEFAULT '' COMMENT '上报时间',
  `netWork` varchar(10) NOT NULL DEFAULT '' COMMENT '网络',
  `ip` varchar(300) DEFAULT NULL COMMENT 'ip',
  `country` varchar(10) NOT NULL DEFAULT '' COMMENT '省',
  `province` varchar(10) NOT NULL DEFAULT '' COMMENT '市',
  `city` varchar(10) NOT NULL DEFAULT '' COMMENT '区',
  `pageUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面链接',
  `simpleUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面带*链接',
  `duration` varchar(30) NOT NULL DEFAULT '' COMMENT 'http 请求持续时间',
  `method` varchar(30) NOT NULL DEFAULT '' COMMENT 'http 请求方式： Post, Get',
  `pathName` varchar(100) NOT NULL DEFAULT '' COMMENT 'http 请求链接',
  `requestText` text NOT NULL COMMENT 'http 请求入参',
  `responseText` text NOT NULL COMMENT 'http 请求结果',
  `httpOptions` varchar(500) NOT NULL DEFAULT '' COMMENT 'http 请求配置,',
  `status` varchar(11) NOT NULL DEFAULT '' COMMENT 'http 状态码',
  `timeout` varchar(11) NOT NULL DEFAULT '' COMMENT 'http 超时时间',
  `statusText` varchar(30) NOT NULL DEFAULT '' COMMENT 'http 状态描述',
  `type` varchar(100) NOT NULL DEFAULT '' COMMENT 'http 请求工具: xml,fetch',
  `eventType` varchar(50) NOT NULL DEFAULT '' COMMENT 'http ： load error abort',
  PRIMARY KEY (`id`),
  KEY `m_id_time` (`monitorAppId`,`happenTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table js_log
# ------------------------------------------------------------

DROP TABLE IF EXISTS `js_log`;

CREATE TABLE `js_log` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `category` varchar(30) NOT NULL COMMENT '类别',
  `monitorAppId` varchar(100) NOT NULL DEFAULT '' COMMENT '项目',
  `userAgent` varchar(500) NOT NULL DEFAULT '' COMMENT 'UA',
  `uuId` varchar(100) NOT NULL DEFAULT '' COMMENT '用户标识',
  `level` varchar(10) NOT NULL DEFAULT '' COMMENT '级别',
  `happenTime` varchar(30) NOT NULL DEFAULT '' COMMENT '上报时间',
  `deviceType` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
  `os` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
  `browserInfo` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
  `device` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
  `deviceModel` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
  `screenHeight` int(11) NOT NULL COMMENT '设备高度',
  `screenWidth` int(11) NOT NULL COMMENT '设备宽度',
  `language` varchar(30) NOT NULL DEFAULT '' COMMENT '语言',
  `netWork` varchar(10) NOT NULL DEFAULT '' COMMENT '网络',
  `ip` varchar(300) NOT NULL DEFAULT '' COMMENT 'ip',
  `country` varchar(10) NOT NULL DEFAULT '' COMMENT '省',
  `province` varchar(10) NOT NULL DEFAULT '' COMMENT '市',
  `city` varchar(10) NOT NULL DEFAULT '' COMMENT '区',
  `pageUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面链接',
  `simpleUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面带*链接',
  `errorMsg` varchar(1000) NOT NULL DEFAULT '' COMMENT '错误信息',
  `line` int(11) NOT NULL COMMENT 'js错误行',
  `type` varchar(30) NOT NULL DEFAULT '' COMMENT '错误类型',
  `col` int(11) NOT NULL COMMENT 'js错误行列',
  `stackTraces` text NOT NULL COMMENT '错误栈',
  `componentName` varchar(30) NOT NULL DEFAULT '' COMMENT '组件名称',
  `subType` varchar(300) NOT NULL DEFAULT '' COMMENT '二级类型 js、 vue',
  `propsData` text NOT NULL COMMENT '组件prop',
  `hook` varchar(300) NOT NULL DEFAULT '' COMMENT '报错的Vue阶段',
  `componentNameTrace` text NOT NULL COMMENT '组件tree',
  PRIMARY KEY (`id`),
  KEY `m_id_time` (`monitorAppId`,`happenTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table page_data_analysis
# ------------------------------------------------------------

DROP TABLE IF EXISTS `page_data_analysis`;

CREATE TABLE `page_data_analysis` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `monitorAppId` varchar(300) DEFAULT '',
  `pvCount` int(11) NOT NULL,
  `uvCount` int(11) NOT NULL,
  `newUvCount` int(11) NOT NULL,
  `ipCounct` int(11) NOT NULL,
  `jumpCount` int(11) NOT NULL,
  `visitFrequency` float NOT NULL,
  `happenTime` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `m_id_time` (`monitorAppId`,`happenTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table page_log
# ------------------------------------------------------------

DROP TABLE IF EXISTS `page_log`;

CREATE TABLE `page_log` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `category` varchar(30) NOT NULL COMMENT '上报类别',
  `monitorAppId` varchar(100) NOT NULL DEFAULT '' COMMENT '项目',
  `userAgent` varchar(500) NOT NULL DEFAULT '' COMMENT 'UA',
  `uuId` varchar(100) NOT NULL DEFAULT '' COMMENT '用户标识',
  `level` varchar(10) NOT NULL DEFAULT '' COMMENT '级别',
  `happenTime` varchar(30) NOT NULL DEFAULT '' COMMENT '上报时间',
  `deviceType` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
  `os` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
  `browserInfo` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
  `device` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
  `deviceModel` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
  `screenHeight` int(11) NOT NULL COMMENT '设备高度',
  `screenWidth` int(11) NOT NULL COMMENT '设备宽度',
  `language` varchar(30) NOT NULL DEFAULT '' COMMENT '语言',
  `netWork` varchar(10) NOT NULL DEFAULT '' COMMENT '网络',
  `ip` varchar(300) NOT NULL DEFAULT '' COMMENT 'ip',
  `country` varchar(10) NOT NULL DEFAULT '' COMMENT '省',
  `province` varchar(10) NOT NULL DEFAULT '' COMMENT '市',
  `city` varchar(10) NOT NULL DEFAULT '' COMMENT '区',
  `pageUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面链接',
  `simpleUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面带*链接',
  `to` varchar(300) NOT NULL DEFAULT '' COMMENT '跳转进入页面',
  `from` varchar(300) NOT NULL DEFAULT '' COMMENT '来源页面',
  `subType` varchar(30) NOT NULL DEFAULT '' COMMENT '子类型 ：popstate、hashchange',
  `duration` varchar(30) NOT NULL DEFAULT '' COMMENT 'from 页面 停留时间',
  `startTime` varchar(50) NOT NULL DEFAULT '' COMMENT '时间',
  `referrer` varchar(3000) NOT NULL DEFAULT '',
  `type` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `m_id_time` (`monitorAppId`,`happenTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table performance
# ------------------------------------------------------------

DROP TABLE IF EXISTS `performance`;

CREATE TABLE `performance` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `sessionId` varchar(50) NOT NULL DEFAULT '' COMMENT '一次上报id',
  `monitorAppId` varchar(100) NOT NULL DEFAULT '' COMMENT '项目ID',
  `uuId` varchar(100) NOT NULL DEFAULT '' COMMENT '用户ID',
  `key` varchar(300) NOT NULL DEFAULT '' COMMENT '名称',
  `score` int(100) NOT NULL COMMENT '分数',
  `textValue` text NOT NULL COMMENT '数据',
  `numValue` int(100) NOT NULL COMMENT '数据',
  `happenTime` varchar(30) NOT NULL DEFAULT '' COMMENT '时间',
  `simpleUrl` varchar(300) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `m_id_time` (`monitorAppId`,`happenTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table projects
# ------------------------------------------------------------

DROP TABLE IF EXISTS `projects`;

CREATE TABLE `projects` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL DEFAULT '' COMMENT '应用名称',
  `desc` varchar(100) NOT NULL COMMENT '应用说明',
  `monitorAppId` varchar(100) NOT NULL DEFAULT '' COMMENT '应用ID',
  `watch` varchar(300) NOT NULL DEFAULT '' COMMENT '配置',
  `cookieUserKey` varchar(20) NOT NULL,
  `maxQueues` tinyint(2) NOT NULL COMMENT '上报条数',
  `projectType` varchar(10) NOT NULL DEFAULT '' COMMENT '1 web',
  `encryption` varchar(10) NOT NULL DEFAULT '' COMMENT '0 不加密 1 加密',
  `delay` int(11) NOT NULL COMMENT '应用间隔时间',
  `status` tinyint(2) DEFAULT NULL COMMENT '0 禁用 1 启用',
  `startTime` varchar(30) NOT NULL DEFAULT '' COMMENT '创建时间',
  `updateTime` varchar(30) NOT NULL DEFAULT '' COMMENT '修改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;

INSERT INTO `projects` (`id`, `name`, `desc`, `monitorAppId`, `watch`, `cookieUserKey`, `maxQueues`, `projectType`, `encryption`, `delay`, `status`, `startTime`, `updateTime`)
VALUES
	(4,'监控平台adm','监控平台adm','adm','[\"pageChange\",\"jsError\",\"vueError\",\"promise\",\"xhr\",\"performance\",\"whiteScreen\",\"click\",\"resource\",\"fetch\",\"request\"]','user',3,'1','0',30,1,'2023-12-28 15:21:40','2024-01-01 08:14:23'),
	(5,'小程序应用','小程序应用','wmp','[\"pageChange\",\"jsError\",\"resource\",\"request\",\"performance\",\"click\"]','user_id',1,'2','0',30,1,'2024-01-02 13:35:51','2024-01-17 15:13:35'),
	(6,'原人小助手','原人小助手','ys-tool-mp','[\"pageChange\",\"jsError\",\"performance\",\"request\",\"click\"]','user_id',8,'2','0',30,1,'2024-01-19 14:46:53','2024-01-19 14:47:05');

/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table promise_log
# ------------------------------------------------------------

DROP TABLE IF EXISTS `promise_log`;

CREATE TABLE `promise_log` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `category` varchar(30) NOT NULL DEFAULT '' COMMENT '类别',
  `monitorAppId` varchar(100) NOT NULL DEFAULT '' COMMENT '项目',
  `userAgent` varchar(500) NOT NULL DEFAULT '' COMMENT 'UA',
  `uuId` varchar(100) NOT NULL DEFAULT '' COMMENT '用户标识',
  `level` varchar(10) NOT NULL DEFAULT '' COMMENT '级别',
  `happenTime` varchar(30) NOT NULL DEFAULT '' COMMENT '上报时间',
  `deviceType` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
  `os` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
  `browserInfo` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
  `device` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
  `deviceModel` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
  `screenHeight` int(11) NOT NULL COMMENT '设备高度',
  `screenWidth` int(11) NOT NULL COMMENT '设备宽度',
  `language` varchar(30) NOT NULL DEFAULT '' COMMENT '语言',
  `netWork` varchar(10) NOT NULL DEFAULT '' COMMENT '网络',
  `ip` varchar(300) NOT NULL DEFAULT '' COMMENT 'ip',
  `country` varchar(10) NOT NULL DEFAULT '' COMMENT '省',
  `province` varchar(10) NOT NULL DEFAULT '' COMMENT '市',
  `city` varchar(10) NOT NULL DEFAULT '' COMMENT '区',
  `pageUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面链接',
  `simpleUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面带*链接',
  `errorMsg` varchar(3000) NOT NULL DEFAULT '' COMMENT '错误信息',
  `startTime` varchar(300) NOT NULL DEFAULT '' COMMENT '页面加载后 至 发生错误时间,',
  PRIMARY KEY (`id`),
  KEY `m_id_time` (`monitorAppId`,`happenTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table resource_log
# ------------------------------------------------------------

DROP TABLE IF EXISTS `resource_log`;

CREATE TABLE `resource_log` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `category` varchar(30) NOT NULL DEFAULT '' COMMENT '类别',
  `monitorAppId` varchar(100) NOT NULL DEFAULT '' COMMENT '项目',
  `userAgent` varchar(500) NOT NULL DEFAULT '' COMMENT 'UA',
  `uuId` varchar(100) NOT NULL DEFAULT '' COMMENT '用户标识',
  `level` varchar(10) NOT NULL DEFAULT '' COMMENT '级别',
  `happenTime` varchar(30) NOT NULL DEFAULT '' COMMENT '上报时间',
  `deviceType` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
  `os` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
  `browserInfo` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
  `device` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
  `deviceModel` varchar(100) NOT NULL DEFAULT '' COMMENT '设备',
  `screenHeight` int(11) NOT NULL COMMENT '设备高度',
  `screenWidth` int(11) NOT NULL COMMENT '设备宽度',
  `language` varchar(30) NOT NULL DEFAULT '' COMMENT '语言',
  `netWork` varchar(10) NOT NULL DEFAULT '' COMMENT '网络',
  `ip` varchar(300) NOT NULL DEFAULT '' COMMENT 'ip',
  `country` varchar(10) NOT NULL DEFAULT '' COMMENT '省',
  `province` varchar(10) NOT NULL DEFAULT '' COMMENT '市',
  `city` varchar(10) NOT NULL DEFAULT '' COMMENT '区',
  `pageUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面链接',
  `simpleUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面带*链接',
  `errorMsg` varchar(100) NOT NULL DEFAULT '' COMMENT '错误信息',
  `url` varchar(1000) NOT NULL DEFAULT '' COMMENT '错误url',
  `html` text NOT NULL,
  `resourceType` varchar(100) NOT NULL DEFAULT '' COMMENT '资源类型',
  `paths` varchar(3000) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `m_id_time` (`monitorAppId`,`happenTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table sourcemap
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sourcemap`;

CREATE TABLE `sourcemap` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `monitorAppId` varchar(300) NOT NULL COMMENT '项目',
  `filename` varchar(100) NOT NULL DEFAULT '' COMMENT 'url',
  `originalname` varchar(300) NOT NULL,
  `destination` varchar(100) NOT NULL DEFAULT '',
  `path` varchar(300) NOT NULL,
  `size` int(20) NOT NULL,
  `version` varchar(30) NOT NULL DEFAULT '' COMMENT '版本号',
  `updateTime` datetime NOT NULL COMMENT '上传时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_behavior
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_behavior`;

CREATE TABLE `user_behavior` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `monitorAppId` varchar(100) NOT NULL DEFAULT '' COMMENT '项目',
  `uuId` varchar(100) NOT NULL DEFAULT '' COMMENT '用户ID',
  `category` varchar(30) NOT NULL DEFAULT '' COMMENT '类别',
  `tb_id` int(11) NOT NULL COMMENT '联表id',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '时间',
  PRIMARY KEY (`id`),
  KEY `monitorAppId` (`monitorAppId`,`createTime`,`uuId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
