# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.44)
# Database: msc_log
# Generation Time: 2023-12-28 07:40:12 +0000
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


# Dump of table click_log
# ------------------------------------------------------------

DROP TABLE IF EXISTS `click_log`;

CREATE TABLE `click_log` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `monitorAppId` varchar(100) NOT NULL DEFAULT '' COMMENT '项目',
  `userAgent` varchar(500) NOT NULL DEFAULT '' COMMENT 'UA',
  `uuId` varchar(100) NOT NULL DEFAULT '' COMMENT '用户标识',
  `level` varchar(10) NOT NULL DEFAULT '' COMMENT '级别',
  `category` varchar(30) NOT NULL DEFAULT '' COMMENT '上报类别',
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
  `ip` varchar(300) DEFAULT NULL COMMENT 'ip',
  `country` varchar(10) NOT NULL DEFAULT '' COMMENT '省',
  `province` varchar(10) NOT NULL DEFAULT '' COMMENT '市',
  `city` varchar(10) NOT NULL DEFAULT '' COMMENT '区',
  `pageUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面链接',
  `simpleUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面带*链接',
  `tagName` varchar(100) NOT NULL DEFAULT '' COMMENT '事件触发标签',
  `top` varchar(50) NOT NULL DEFAULT '' COMMENT '被点击元素距top 距离',
  `left` varchar(50) NOT NULL DEFAULT '' COMMENT '被点击距left 距离',
  `eventType` varchar(30) NOT NULL DEFAULT '' COMMENT '点击事件类型',
  `pageHeight` varchar(30) NOT NULL DEFAULT '' COMMENT '页面高度',
  `scrollTop` varchar(30) NOT NULL DEFAULT '' COMMENT '页面滚动高度',
  `subType` varchar(30) NOT NULL DEFAULT '' COMMENT '子类型 事件类型',
  `paths` text NOT NULL COMMENT '标签路径',
  `startTime` varchar(50) NOT NULL DEFAULT '' COMMENT '页面加载后 至 发生错误时间',
  `innerHTML` text NOT NULL COMMENT '点击标签内部html',
  `viewport` varchar(300) NOT NULL DEFAULT '' COMMENT '屏幕 可视宽、高',
  `targetInfo` varchar(300) NOT NULL DEFAULT '' COMMENT '被点击元素的 offsetWidth,  offsetHeight,',
  PRIMARY KEY (`id`),
  KEY `m_id_time` (`monitorAppId`,`happenTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `click_log` WRITE;
/*!40000 ALTER TABLE `click_log` DISABLE KEYS */;

INSERT INTO `click_log` (`id`, `monitorAppId`, `userAgent`, `uuId`, `level`, `category`, `happenTime`, `deviceType`, `os`, `browserInfo`, `device`, `deviceModel`, `screenHeight`, `screenWidth`, `language`, `netWork`, `ip`, `country`, `province`, `city`, `pageUrl`, `simpleUrl`, `tagName`, `top`, `left`, `eventType`, `pageHeight`, `scrollTop`, `subType`, `paths`, `startTime`, `innerHTML`, `viewport`, `targetInfo`)
VALUES
	(1,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','USER_CLICK','2023-12-28 15:39:39','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/project/list','http://localhost:8888/project/list','LI','84','','','384','','mousedown','','27016.899999976158','<svg data-v-a457339b=\"\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\" class=\"el-icon\"><path fill=\"currentColor\" d=\"M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z\"></path></svg>应用概览','{\"width\":1728,\"height\":384}','{\"offsetWidth\":220,\"offsetHeight\":60}');

/*!40000 ALTER TABLE `click_log` ENABLE KEYS */;
UNLOCK TABLES;


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
  `monitorAppId` varchar(100) NOT NULL DEFAULT '' COMMENT '项目',
  `userAgent` varchar(500) NOT NULL DEFAULT '' COMMENT 'UA',
  `uuId` varchar(100) NOT NULL DEFAULT '' COMMENT '用户标识',
  `level` varchar(10) NOT NULL DEFAULT '' COMMENT '级别',
  `category` varchar(30) NOT NULL DEFAULT '' COMMENT '上报类别',
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
  `ip` varchar(300) DEFAULT NULL COMMENT 'ip',
  `country` varchar(10) NOT NULL DEFAULT '' COMMENT '省',
  `province` varchar(10) NOT NULL DEFAULT '' COMMENT '市',
  `city` varchar(10) NOT NULL DEFAULT '' COMMENT '区',
  `pageUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面链接',
  `simpleUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面带*链接',
  `duration` varchar(30) NOT NULL DEFAULT '' COMMENT 'http 请求持续时间',
  `method` varchar(30) NOT NULL DEFAULT '' COMMENT 'http 请求方式： Post, Get',
  `pathName` varchar(100) NOT NULL DEFAULT '' COMMENT 'http 请求链接',
  `requestText` varchar(500) NOT NULL DEFAULT '' COMMENT 'http 请求入参',
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

LOCK TABLES `http_log` WRITE;
/*!40000 ALTER TABLE `http_log` DISABLE KEYS */;

INSERT INTO `http_log` (`id`, `monitorAppId`, `userAgent`, `uuId`, `level`, `category`, `happenTime`, `deviceType`, `os`, `browserInfo`, `device`, `deviceModel`, `screenHeight`, `screenWidth`, `language`, `netWork`, `ip`, `country`, `province`, `city`, `pageUrl`, `simpleUrl`, `duration`, `method`, `pathName`, `requestText`, `responseText`, `httpOptions`, `status`, `timeout`, `statusText`, `type`, `eventType`)
VALUES
	(1,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','HTTP_LOG','2023-12-28 15:37:37','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/project/list','http://localhost:8888/project/list','19','POST','http://127.0.0.1:9001/adm/project/list','{\"page\":1,\"pageSize\":10}','内容过大未记录','','200','5000','OK','xhr','load'),
	(2,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','HTTP_LOG','2023-12-28 15:37:37','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/project/list','http://localhost:8888/project/list','31','POST','http://127.0.0.1:9001/adm/project/list','{\"page\":1,\"pageSize\":10}','内容过大未记录','','200','5000','OK','xhr','load'),
	(3,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','HTTP_LOG','2023-12-28 15:37:37','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/project/list','http://localhost:8888/project/list','13','POST','http://127.0.0.1:9001/adm/project/list','{\"page\":1,\"pageSize\":10}','内容过大未记录','','200','5000','OK','xhr','load'),
	(4,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','HTTP_LOG','2023-12-28 15:37:37','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/project/list','http://localhost:8888/project/list','19','POST','http://127.0.0.1:9001/adm/project/list','{\"page\":1,\"pageSize\":10}','内容过大未记录','','200','5000','OK','xhr','load'),
	(5,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','HTTP_LOG','2023-12-28 15:37:37','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/project/list','http://localhost:8888/project/list','31','POST','http://127.0.0.1:9001/adm/project/list','{\"page\":1,\"pageSize\":10}','内容过大未记录','','200','5000','OK','xhr','load'),
	(6,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','HTTP_LOG','2023-12-28 15:38:38','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/project/list','http://localhost:8888/project/list','16','POST','http://127.0.0.1:9001/adm/project/list','{\"page\":1,\"pageSize\":10}','内容过大未记录','','200','5000','OK','xhr','load'),
	(7,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','HTTP_LOG','2023-12-28 15:37:37','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/project/list','http://localhost:8888/project/list','13','POST','http://127.0.0.1:9001/adm/project/list','{\"page\":1,\"pageSize\":10}','内容过大未记录','','200','5000','OK','xhr','load'),
	(8,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','HTTP_LOG','2023-12-28 15:39:39','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/dashboard','http://localhost:8888/dashboard','67','POST','http://127.0.0.1:9001/adm/page/echart/geo/distribution','{\"startTime\":\"2023-12-28 00:00:00\",\"endTime\":\"2023-12-28 23:59:59\"}','\"{\\\"success\\\":true,\\\"model\\\":[],\\\"errorMessage\\\":\\\"\\\",\\\"errorCode\\\":\\\"\\\"}\"','','200','5000','OK','xhr','load'),
	(9,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','HTTP_LOG','2023-12-28 15:39:39','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/dashboard','http://localhost:8888/dashboard','120','POST','http://127.0.0.1:9001/adm/page/hours/list','{\"startTime\":\"2023-12-28 00:00:00\",\"endTime\":\"2023-12-28 23:59:59\"}','内容过大未记录','','200','5000','OK','xhr','load'),
	(10,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','HTTP_LOG','2023-12-28 15:39:39','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/dashboard','http://localhost:8888/dashboard','77','POST','http://127.0.0.1:9001/adm/analyse/core','{\"analyseTime\":\"2023-12-28\"}','\"{\\\"success\\\":true,\\\"model\\\":{\\\"todayData\\\":{},\\\"yesterdayData\\\":{}},\\\"errorMessage\\\":\\\"\\\",\\\"errorCode\\\":\\\"\\\"}\"','','200','5000','OK','xhr','load'),
	(11,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','HTTP_LOG','2023-12-28 15:39:39','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/dashboard','http://localhost:8888/dashboard','124','POST','http://127.0.0.1:9001/adm/page/echart/by/uuid','{\"startTime\":\"2023-12-28 00:00:00\",\"endTime\":\"2023-12-28 23:59:59\",\"limit\":30}','\"{\\\"success\\\":true,\\\"model\\\":{\\\"simpleUrl\\\":{\\\"axisData\\\":[],\\\"seriesData\\\":[]},\\\"browser\\\":{\\\"axisData\\\":[],\\\"seriesData\\\":[]},\\\"cregion\\\":{\\\"axisData\\\":[],\\\"seriesData\\\":[]},\\\"device\\\":{\\\"axisData\\\":[],\\\"seriesData\\\":[]},\\\"os\\\":{\\\"axisData\\\":[],\\\"seriesData\\\":[]},\\\"screen\\\":{\\\"axisData\\\":[],\\\"seriesData\\\":[]}},\\\"errorMessage\\\":\\\"\\\",\\\"errorCode\\\":\\\"\\\"}\"','','200','5000','OK','xhr','load');

/*!40000 ALTER TABLE `http_log` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table js_log
# ------------------------------------------------------------

DROP TABLE IF EXISTS `js_log`;

CREATE TABLE `js_log` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `monitorAppId` varchar(100) NOT NULL DEFAULT '' COMMENT '项目',
  `userAgent` varchar(500) NOT NULL DEFAULT '' COMMENT 'UA',
  `uuId` varchar(100) NOT NULL DEFAULT '' COMMENT '用户标识',
  `level` varchar(10) NOT NULL DEFAULT '' COMMENT '级别',
  `category` varchar(30) NOT NULL DEFAULT '' COMMENT '上报类别',
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
  `ip` varchar(300) DEFAULT NULL COMMENT 'ip',
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

LOCK TABLES `js_log` WRITE;
/*!40000 ALTER TABLE `js_log` DISABLE KEYS */;

INSERT INTO `js_log` (`id`, `monitorAppId`, `userAgent`, `uuId`, `level`, `category`, `happenTime`, `deviceType`, `os`, `browserInfo`, `device`, `deviceModel`, `screenHeight`, `screenWidth`, `language`, `netWork`, `ip`, `country`, `province`, `city`, `pageUrl`, `simpleUrl`, `errorMsg`, `line`, `type`, `col`, `stackTraces`, `componentName`, `subType`, `propsData`, `hook`, `componentNameTrace`)
VALUES
	(1,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','WARNING','JS_ERROR','2023-12-28 15:37:37','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/project/list','http://localhost:8888/project/list','Uncaught ReferenceError: o is not defined',48,'ReferenceError',21,'[{\"filename\":\"http://localhost:8888/project/list\",\"functionName\":\"n\",\"lineno\":48,\"colno\":21},{\"filename\":\"http://localhost:8888/project/list\",\"functionName\":\"e.readyState.e.onload\",\"lineno\":83,\"colno\":17}]','','jsError','','',''),
	(2,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','WARNING','JS_ERROR','2023-12-28 15:37:37','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/project/list','http://localhost:8888/project/list','Uncaught ReferenceError: o is not defined',48,'ReferenceError',21,'[{\"filename\":\"http://localhost:8888/project/list\",\"functionName\":\"n\",\"lineno\":48,\"colno\":21},{\"filename\":\"http://localhost:8888/project/list\",\"functionName\":\"e.readyState.e.onload\",\"lineno\":83,\"colno\":17}]','','jsError','','','');

/*!40000 ALTER TABLE `js_log` ENABLE KEYS */;
UNLOCK TABLES;


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
  `monitorAppId` varchar(100) NOT NULL DEFAULT '' COMMENT '项目',
  `userAgent` varchar(500) NOT NULL DEFAULT '' COMMENT 'UA',
  `uuId` varchar(100) NOT NULL DEFAULT '' COMMENT '用户标识',
  `level` varchar(10) NOT NULL DEFAULT '' COMMENT '级别',
  `category` varchar(30) NOT NULL DEFAULT '' COMMENT '上报类别',
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
  `ip` varchar(300) DEFAULT NULL COMMENT 'ip',
  `country` varchar(10) NOT NULL DEFAULT '' COMMENT '省',
  `province` varchar(10) NOT NULL DEFAULT '' COMMENT '市',
  `city` varchar(10) NOT NULL DEFAULT '' COMMENT '区',
  `pageUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面链接',
  `simpleUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面带*链接',
  `to` varchar(300) NOT NULL DEFAULT '' COMMENT '跳转进入页面',
  `from` varchar(300) NOT NULL DEFAULT '' COMMENT '来源页面',
  `subType` varchar(30) DEFAULT NULL COMMENT '子类型 ：popstate、hashchange',
  `duration` varchar(30) DEFAULT NULL COMMENT 'from 页面 停留时间',
  `startTime` varchar(50) NOT NULL DEFAULT '' COMMENT '时间',
  `referrer` varchar(3000) NOT NULL DEFAULT '',
  `type` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `m_id_time` (`monitorAppId`,`happenTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `page_log` WRITE;
/*!40000 ALTER TABLE `page_log` DISABLE KEYS */;

INSERT INTO `page_log` (`id`, `monitorAppId`, `userAgent`, `uuId`, `level`, `category`, `happenTime`, `deviceType`, `os`, `browserInfo`, `device`, `deviceModel`, `screenHeight`, `screenWidth`, `language`, `netWork`, `ip`, `country`, `province`, `city`, `pageUrl`, `simpleUrl`, `to`, `from`, `subType`, `duration`, `startTime`, `referrer`, `type`)
VALUES
	(1,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','PAGE_CHANGE','2023-12-28 15:37:37','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/project/list','http://localhost:8888/project/list','http://localhost:8888/project/list','','popstate','','141.5','http://localhost:8888/project/list','1'),
	(2,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','PAGE_CHANGE','2023-12-28 15:37:37','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/project/list','http://localhost:8888/project/list','http://localhost:8888/project/list','','replaceState','358','500.30000001192093','http://localhost:8888/project/list','1'),
	(3,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','PAGE_CHANGE','2023-12-28 15:37:37','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/project/list','http://localhost:8888/project/list','http://localhost:8888/project/list','','replaceState','297','354.60000002384186','http://localhost:8888/project/list','1'),
	(4,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','PAGE_CHANGE','2023-12-28 15:38:38','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/project/list','http://localhost:8888/project/list','http://localhost:8888/project/list','','popstate','','146.69999998807907','http://localhost:8888/project/list','1'),
	(5,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','PAGE_CHANGE','2023-12-28 15:38:38','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/project/list','http://localhost:8888/project/list','http://localhost:8888/project/list','','replaceState','392','539','http://localhost:8888/project/list','1'),
	(6,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','PAGE_CHANGE','2023-12-28 15:37:37','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/project/list','http://localhost:8888/project/list','http://localhost:8888/project/list','','replaceState','328','390.19999998807907','http://localhost:8888/project/list','1'),
	(7,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','PAGE_CHANGE','2023-12-28 15:37:37','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/project/list','http://localhost:8888/project/list','http://localhost:8888/project/list','','popstate','','57.5','http://localhost:8888/project/list','1'),
	(8,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','PAGE_CHANGE','2023-12-28 15:37:37','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/project/list','http://localhost:8888/project/list','http://localhost:8888/project/list','','popstate','','61.80000001192093','http://localhost:8888/project/list','1'),
	(9,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','PAGE_CHANGE','2023-12-28 15:39:39','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/dashboard','http://localhost:8888/dashboard','http://localhost:8888/dashboard','http://localhost:8888/project/list','pushState','26621','27159.30000001192','http://localhost:8888/project/list','1');

/*!40000 ALTER TABLE `page_log` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table performance_log
# ------------------------------------------------------------

DROP TABLE IF EXISTS `performance_log`;

CREATE TABLE `performance_log` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `monitorAppId` varchar(100) NOT NULL DEFAULT '' COMMENT '项目',
  `userAgent` varchar(500) NOT NULL DEFAULT '' COMMENT 'UA',
  `uuId` varchar(100) NOT NULL DEFAULT '' COMMENT '用户标识',
  `level` varchar(10) NOT NULL DEFAULT '' COMMENT '级别',
  `category` varchar(30) NOT NULL DEFAULT '' COMMENT '上报类别',
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
  `ip` varchar(300) DEFAULT NULL COMMENT 'ip',
  `country` varchar(10) NOT NULL DEFAULT '' COMMENT '省',
  `province` varchar(10) NOT NULL DEFAULT '' COMMENT '市',
  `city` varchar(10) NOT NULL DEFAULT '' COMMENT '区',
  `pageUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '上报页面',
  `simpleUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '上报页面',
  `fcp` text COMMENT '灰屏（FCP）',
  `fp` text COMMENT '白屏（FP）',
  `fmp` text COMMENT '首次有效绘制（FMP）(首屏）',
  `lcp` text COMMENT '页面内首次开始加载的时间点（LCP） 控制在 2.5 秒或以内',
  `nt` text COMMENT '上报资源',
  `rf` text COMMENT '上报资源',
  PRIMARY KEY (`id`),
  KEY `m_id_time` (`monitorAppId`,`happenTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `performance_log` WRITE;
/*!40000 ALTER TABLE `performance_log` DISABLE KEYS */;

INSERT INTO `performance_log` (`id`, `monitorAppId`, `userAgent`, `uuId`, `level`, `category`, `happenTime`, `deviceType`, `os`, `browserInfo`, `device`, `deviceModel`, `screenHeight`, `screenWidth`, `language`, `netWork`, `ip`, `country`, `province`, `city`, `pageUrl`, `simpleUrl`, `fcp`, `fp`, `fmp`, `lcp`, `nt`, `rf`)
VALUES
	(1,'adm','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','26e99d2a-b3e9-4fce-a67e-78c02f6758b8','INFO','PERFORMANCE','2023-12-28 15:38:38','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8888/project/list','http://localhost:8888/project/list','','','','','{\"FP\":67.89999997615814,\"Redirec\":0,\"TTI\":144.69999998807907,\"DomReady\":320,\"Load\":345,\"FirseByte\":67.60000002384186,\"DNS\":0,\"TCP\":0,\"SSL\":0,\"TTFB\":62.40000003576279,\"Trans\":0.2999999523162842,\"DomParse\":200.30000001192093,\"Res\":25,\"type\":\"reload\",\"renderBlockingStatus\":\"non-blocking\",\"nextHopProtocol\":\"\"}','[{\"name\":\"http://localhost:8888/@vite/client\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"script\",\"startTime\":78,\"responseEnd\":133,\"dns\":0,\"tcp\":0.3999999761581421,\"ssl\":0,\"ttfb\":1.100000023841858,\"contentDownload\":0.3999999761581421,\"duration\":55,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/monitorSdk.js\",\"nextHopProtocol\":\"http/1.1\",\"transferSize\":300,\"initiatorType\":\"script\",\"startTime\":78.10000002384186,\"responseEnd\":131.80000001192093,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":1.199999988079071,\"contentDownload\":0.10000002384185791,\"duration\":53.69999998807907,\"renderBlockingStatus\":\"blocking\",\"isCache\":true},{\"name\":\"http://localhost:8888/src/main.ts\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"script\",\"startTime\":78.10000002384186,\"responseEnd\":132.10000002384186,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":1,\"contentDownload\":0.10000002384185791,\"duration\":54,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/node_modules/vite/dist/client/env.mjs\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":147.60000002384186,\"responseEnd\":156.39999997615814,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":5.100000023841858,\"contentDownload\":0.09999996423721313,\"duration\":8.799999952316284,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/node_modules/.vite/deps/vue.js?v=ac797c8f\",\"nextHopProtocol\":\"\",\"transferSize\":0,\"initiatorType\":\"other\",\"startTime\":147.89999997615814,\"responseEnd\":151.60000002384186,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":2.599999964237213,\"contentDownload\":0.7000000476837158,\"duration\":3.700000047683716,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true},{\"name\":\"http://localhost:8888/src/style.css\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":147.89999997615814,\"responseEnd\":155.5,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":4.5,\"contentDownload\":0.30000001192092896,\"duration\":7.600000023841858,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/src/App.vue\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":148,\"responseEnd\":157.69999998807907,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":5.399999976158142,\"contentDownload\":0.800000011920929,\"duration\":9.699999988079071,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/src/router/index.ts\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":148,\"responseEnd\":159,\"dns\":0,\"tcp\":0.19999998807907104,\"ssl\":0,\"ttfb\":5.199999988079071,\"contentDownload\":1.699999988079071,\"duration\":11,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/src/plugins/index.ts\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":148.10000002384186,\"responseEnd\":159.30000001192093,\"dns\":0,\"tcp\":0.19999998807907104,\"ssl\":0,\"ttfb\":5.300000011920929,\"contentDownload\":1.800000011920929,\"duration\":11.199999988079071,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/src/directives/index.ts\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":148.10000002384186,\"responseEnd\":159.69999998807907,\"dns\":0,\"tcp\":0.19999998807907104,\"ssl\":0,\"ttfb\":5.399999976158142,\"contentDownload\":2,\"duration\":11.599999964237213,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/src/store/index.ts\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":148.19999998807907,\"responseEnd\":158.39999997615814,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":0.5,\"contentDownload\":1.5,\"duration\":10.199999988079071,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/src/icons/index.ts\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":148.19999998807907,\"responseEnd\":158.10000002384186,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":1.600000023841858,\"contentDownload\":1.100000023841858,\"duration\":9.900000035762787,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/node_modules/normalize.css/normalize.css\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":148.30000001192093,\"responseEnd\":160.19999998807907,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":0.6000000238418579,\"contentDownload\":2.199999988079071,\"duration\":11.899999976158142,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/__uno.css\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":148.30000001192093,\"responseEnd\":159.89999997615814,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":1.4000000357627869,\"contentDownload\":1.2999999523162842,\"duration\":11.599999964237213,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/node_modules/element-plus/dist/index.css\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":148.30000001192093,\"responseEnd\":161.39999997615814,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":0.699999988079071,\"contentDownload\":3.099999964237213,\"duration\":13.099999964237213,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/node_modules/element-plus/theme-chalk/dark/css-vars.css\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":148.39999997615814,\"responseEnd\":160.39999997615814,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":0.699999988079071,\"contentDownload\":1.699999988079071,\"duration\":12,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/node_modules/vxe-table-plugin-element/dist/style.css\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":148.5,\"responseEnd\":160.89999997615814,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":0.6000000238418579,\"contentDownload\":0.7999999523162842,\"duration\":12.399999976158142,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/node_modules/vxe-table/lib/style.css\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":148.5,\"responseEnd\":161.19999998807907,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":0.5999999642372131,\"contentDownload\":2,\"duration\":12.699999988079071,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/src/assets/css/index.scss\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":148.60000002384186,\"responseEnd\":162.19999998807907,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":0.8999999761581421,\"contentDownload\":1.800000011920929,\"duration\":13.599999964237213,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/node_modules/.vite/deps/chunk-C3HOAGH2.js?v=ac797c8f\",\"nextHopProtocol\":\"\",\"transferSize\":0,\"initiatorType\":\"other\",\"startTime\":152.39999997615814,\"responseEnd\":154.89999997615814,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":0.800000011920929,\"contentDownload\":1.199999988079071,\"duration\":2.5,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true},{\"name\":\"http://localhost:8888/node_modules/.vite/deps/chunk-HM4MQYWN.js?v=ac797c8f\",\"nextHopProtocol\":\"\",\"transferSize\":0,\"initiatorType\":\"other\",\"startTime\":152.60000002384186,\"responseEnd\":154,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":0.9000000357627869,\"contentDownload\":0.19999998807907104,\"duration\":1.399999976158142,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true},{\"name\":\"http://localhost:8888/node_modules/.vite/deps/pinia.js?v=ac797c8f\",\"nextHopProtocol\":\"\",\"transferSize\":0,\"initiatorType\":\"other\",\"startTime\":175.80000001192093,\"responseEnd\":177.30000001192093,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":0.8999999761581421,\"contentDownload\":0.30000001192092896,\"duration\":1.5,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true},{\"name\":\"http://localhost:8888/src/hooks/useTheme.ts\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":176,\"responseEnd\":179.30000001192093,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":1.600000023841858,\"contentDownload\":0.5,\"duration\":3.300000011920929,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/node_modules/.vite/deps/element-plus_es_locale_lang_zh-cn.js?v=ac797c8f\",\"nextHopProtocol\":\"\",\"transferSize\":0,\"initiatorType\":\"other\",\"startTime\":176.10000002384186,\"responseEnd\":178.39999997615814,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":0.8999999761581421,\"contentDownload\":0.8999999761581421,\"duration\":2.299999952316284,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true},{\"name\":\"http://localhost:8888/@id/__x00__plugin-vue:export-helper\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":176.30000001192093,\"responseEnd\":179.69999998807907,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":0.800000011920929,\"contentDownload\":0.5999999642372131,\"duration\":3.399999976158142,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/src/components/svgIcon/index.vue\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":176.60000002384186,\"responseEnd\":180.39999997615814,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":1.399999976158142,\"contentDownload\":0.699999988079071,\"duration\":3.799999952316284,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/@id/virtual:svg-icons-register\",\"nextHopProtocol\":\"http/1.1\",\"transferSize\":8162,\"initiatorType\":\"other\",\"startTime\":176.60000002384186,\"responseEnd\":181.80000001192093,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":2.300000011920929,\"contentDownload\":0.6000000238418579,\"duration\":5.199999988079071,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/node_modules/.vite/deps/vue-router.js?v=ac797c8f\",\"nextHopProtocol\":\"\",\"transferSize\":0,\"initiatorType\":\"other\",\"startTime\":177.39999997615814,\"responseEnd\":179.89999997615814,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":1.199999988079071,\"contentDownload\":1.0999999642372131,\"duration\":2.5,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true},{\"name\":\"http://localhost:8888/src/plugins/element-plus/index.ts\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":177.5,\"responseEnd\":182.69999998807907,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":3.5,\"contentDownload\":0.19999998807907104,\"duration\":5.199999988079071,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/src/plugins/element-plus-icon/index.ts\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":177.5,\"responseEnd\":183,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":3.5,\"contentDownload\":0.3999999761581421,\"duration\":5.5,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/src/directives/permission/index.ts\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":177.69999998807907,\"responseEnd\":180.69999998807907,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":0.5,\"contentDownload\":1,\"duration\":3,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/node_modules/.vite/deps/chunk-PBJIO4MK.js?v=ac797c8f\",\"nextHopProtocol\":\"\",\"transferSize\":0,\"initiatorType\":\"other\",\"startTime\":181.89999997615814,\"responseEnd\":183.69999998807907,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":1.199999988079071,\"contentDownload\":0.30000001192092896,\"duration\":1.800000011920929,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true},{\"name\":\"http://localhost:8888/src/utils/cache/local-storage.ts\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":182,\"responseEnd\":184.39999997615814,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":0.5,\"contentDownload\":0.2999999523162842,\"duration\":2.399999976158142,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/src/components/svgIcon/index.vue?vue&type=style&index=0&scoped=e7f7535e&lang.scss\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":185.69999998807907,\"responseEnd\":187.30000001192093,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":0.6000000238418579,\"contentDownload\":0.19999998807907104,\"duration\":1.600000023841858,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/node_modules/.vite/deps/element-plus.js?v=ac797c8f\",\"nextHopProtocol\":\"\",\"transferSize\":0,\"initiatorType\":\"other\",\"startTime\":186.69999998807907,\"responseEnd\":193,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":0.699999988079071,\"contentDownload\":5.300000011920929,\"duration\":6.300000011920929,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true},{\"name\":\"http://localhost:8888/node_modules/.vite/deps/@element-plus_icons-vue.js?v=ac797c8f\",\"nextHopProtocol\":\"\",\"transferSize\":0,\"initiatorType\":\"other\",\"startTime\":186.80000001192093,\"responseEnd\":188.19999998807907,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":1,\"contentDownload\":0.09999996423721313,\"duration\":1.399999976158142,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true},{\"name\":\"http://localhost:8888/src/constants/cache-key.ts\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"other\",\"startTime\":187.10000002384186,\"responseEnd\":189.89999997615814,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":1,\"contentDownload\":0.19999998807907104,\"duration\":2.799999952316284,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8888/node_modules/.vite/deps/chunk-2S63755F.js?v=ac797c8f\",\"nextHopProtocol\":\"\",\"transferSize\":0,\"initiatorType\":\"other\",\"startTime\":189.30000001192093,\"responseEnd\":192.60000002384186,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":0.9000000357627869,\"contentDownload\":2,\"duration\":3.300000011920929,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true},{\"name\":\"http://localhost:8888/node_modules/.vite/deps/chunk-UIDGXDBM.js?v=ac797c8f\",\"nextHopProtocol\":\"\",\"transferSize\":0,\"initiatorType\":\"other\",\"startTime\":236.60000002384186,\"responseEnd\":250.10000002384186,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":0.7999999523162842,\"contentDownload\":0.20000004768371582,\"duration\":13.5,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true},{\"name\":\"http://localhost:8888/node_modules/.vite/deps/chunk-3QOBN3G7.js?v=ac797c8f\",\"nextHopProtocol\":\"\",\"transferSize\":0,\"initiatorType\":\"other\",\"startTime\":236.80000001192093,\"responseEnd\":251.10000002384186,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":1.0999999642372131,\"contentDownload\":0.7000000476837158,\"duration\":14.300000011920929,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true},{\"name\":\"http://localhost:8888/node_modules/.vite/deps/chunk-6KFXODJP.js?v=ac797c8f\",\"nextHopProtocol\":\"\",\"transferSize\":0,\"initiatorType\":\"other\",\"startTime\":236.80000001192093,\"responseEnd\":251.39999997615814,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":1.199999988079071,\"contentDownload\":1,\"duration\":14.599999964237213,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true}]');

/*!40000 ALTER TABLE `performance_log` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table projects
# ------------------------------------------------------------

DROP TABLE IF EXISTS `projects`;

CREATE TABLE `projects` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL DEFAULT '' COMMENT '应用名称',
  `desc` varchar(100) NOT NULL COMMENT '应用说明',
  `monitorAppId` varchar(100) NOT NULL DEFAULT '' COMMENT '应用ID',
  `watch` varchar(300) NOT NULL DEFAULT '' COMMENT '配置',
  `maxQueues` tinyint(2) NOT NULL COMMENT '上报条数',
  `projectType` varchar(10) NOT NULL DEFAULT '' COMMENT '1 web',
  `encryption` varchar(10) NOT NULL DEFAULT '' COMMENT '0 不加密 1 加密',
  `delay` int(11) NOT NULL COMMENT '应用间隔时间',
  `status` tinyint(2) DEFAULT NULL COMMENT '0 禁用 1 启用',
  `startTime` varchar(30) NOT NULL DEFAULT '' COMMENT '创建时间',
  `updateTime` varchar(30) NOT NULL DEFAULT '' COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;

INSERT INTO `projects` (`id`, `name`, `desc`, `monitorAppId`, `watch`, `maxQueues`, `projectType`, `encryption`, `delay`, `status`, `startTime`, `updateTime`)
VALUES
	(4,'监控平台adm','监控平台adm','adm','[\"pageChange\",\"jsError\",\"vueError\",\"promise\",\"xhr\",\"performance\",\"whiteScreen\",\"click\",\"resource\",\"fetch\"]',3,'1','0',30,1,'2023-12-28 15:21:40','2023-12-28 15:21:40');

/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table promise_log
# ------------------------------------------------------------

DROP TABLE IF EXISTS `promise_log`;

CREATE TABLE `promise_log` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `monitorAppId` varchar(100) NOT NULL DEFAULT '' COMMENT '项目',
  `userAgent` varchar(500) NOT NULL DEFAULT '' COMMENT 'UA',
  `uuId` varchar(100) NOT NULL DEFAULT '' COMMENT '用户标识',
  `level` varchar(10) NOT NULL DEFAULT '' COMMENT '级别',
  `category` varchar(30) NOT NULL DEFAULT '' COMMENT '上报类别',
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
  `ip` varchar(300) DEFAULT NULL COMMENT 'ip',
  `country` varchar(10) NOT NULL DEFAULT '' COMMENT '省',
  `province` varchar(10) NOT NULL DEFAULT '' COMMENT '市',
  `city` varchar(10) NOT NULL DEFAULT '' COMMENT '区',
  `pageUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面链接',
  `simpleUrl` varchar(1000) NOT NULL DEFAULT '' COMMENT '页面带*链接',
  `errorMsg` varchar(300) NOT NULL DEFAULT '' COMMENT '错误信息',
  `startTime` varchar(300) NOT NULL DEFAULT '' COMMENT '页面加载后 至 发生错误时间,',
  PRIMARY KEY (`id`),
  KEY `m_id_time` (`monitorAppId`,`happenTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table resource_log
# ------------------------------------------------------------

DROP TABLE IF EXISTS `resource_log`;

CREATE TABLE `resource_log` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `monitorAppId` varchar(100) NOT NULL DEFAULT '' COMMENT '项目',
  `userAgent` varchar(500) NOT NULL DEFAULT '' COMMENT 'UA',
  `uuId` varchar(100) NOT NULL DEFAULT '' COMMENT '用户标识',
  `level` varchar(10) NOT NULL DEFAULT '' COMMENT '级别',
  `category` varchar(30) NOT NULL DEFAULT '' COMMENT '上报类别',
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
  `ip` varchar(300) DEFAULT NULL COMMENT 'ip',
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




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
