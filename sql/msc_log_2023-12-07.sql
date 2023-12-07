# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.44)
# Database: msc_log
# Generation Time: 2023-12-07 01:53:01 +0000
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
  `top` varchar(30) NOT NULL DEFAULT '' COMMENT '被点击元素距top 距离',
  `left` varchar(30) NOT NULL DEFAULT '' COMMENT '被点击距left 距离',
  `eventType` varchar(30) NOT NULL DEFAULT '' COMMENT '点击事件类型',
  `pageHeight` int(11) NOT NULL COMMENT '页面高度',
  `scrollTop` int(11) NOT NULL COMMENT '页面滚动高度',
  `subType` varchar(30) NOT NULL DEFAULT '' COMMENT '子类型 事件类型',
  `paths` text NOT NULL COMMENT '标签路径',
  `startTime` varchar(30) NOT NULL DEFAULT '' COMMENT '页面加载后 至 发生错误时间',
  `innerHTML` varchar(300) NOT NULL DEFAULT '' COMMENT '点击标签内部html',
  `viewport` varchar(300) NOT NULL DEFAULT '' COMMENT '屏幕 可视宽、高',
  `targetInfo` varchar(300) NOT NULL DEFAULT '' COMMENT '被点击元素的 offsetWidth,  offsetHeight,',
  PRIMARY KEY (`id`)
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
  `status` int(11) NOT NULL COMMENT 'http 状态码',
  `timeout` int(11) NOT NULL COMMENT 'http 超时时间',
  `statusText` varchar(30) NOT NULL DEFAULT '' COMMENT 'http 状态描述',
  `type` varchar(100) NOT NULL DEFAULT '' COMMENT 'http 请求工具: xml,fetch',
  `eventType` varchar(50) NOT NULL DEFAULT '' COMMENT 'http ： load error abort',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



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
  PRIMARY KEY (`id`)
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
  `form` varchar(300) NOT NULL DEFAULT '' COMMENT '来源页面',
  `subType` int(11) DEFAULT NULL COMMENT '子类型 ：popstate、hashchange',
  `duration` int(11) DEFAULT NULL COMMENT 'from 页面 停留时间',
  `startTime` int(11) NOT NULL COMMENT '时间',
  `referrer` varchar(3000) NOT NULL DEFAULT '',
  `type` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `performance_log` WRITE;
/*!40000 ALTER TABLE `performance_log` DISABLE KEYS */;

INSERT INTO `performance_log` (`id`, `monitorAppId`, `userAgent`, `uuId`, `level`, `category`, `happenTime`, `deviceType`, `os`, `browserInfo`, `device`, `deviceModel`, `screenHeight`, `screenWidth`, `language`, `netWork`, `ip`, `country`, `province`, `city`, `pageUrl`, `simpleUrl`, `fcp`, `fp`, `fmp`, `lcp`, `nt`, `rf`)
VALUES
	(1,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PERFORMANCE','2023-12-07 09:52:52','PC','macOS 10.15.7','Chrome 119.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','{\"name\":\"first-contentful-paint\",\"startTime\":49.79999999888241,\"RF\":[]}','{\"name\":\"first-paint\",\"startTime\":49.79999999888241,\"RF\":[{\"name\":\"http://localhost:8081/monitorSdk.js\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"script\",\"startTime\":14.5,\"responseEnd\":29.5,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":10.699999999254942,\"contentDownload\":0.2000000011175871,\"duration\":15,\"renderBlockingStatus\":\"blocking\",\"isCache\":true},{\"name\":\"http://localhost:8081/js/chunk-vendors.js\",\"nextHopProtocol\":\"http/1.1\",\"transferSize\":300,\"initiatorType\":\"script\",\"startTime\":14.699999999254942,\"responseEnd\":33.5,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":14.5,\"contentDownload\":0.30000000074505806,\"duration\":18.800000000745058,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true},{\"name\":\"http://localhost:8081/js/app.js\",\"nextHopProtocol\":\"http/1.1\",\"transferSize\":300,\"initiatorType\":\"script\",\"startTime\":14.799999998882413,\"responseEnd\":35.09999999962747,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":4.299999998882413,\"contentDownload\":0.2000000011175871,\"duration\":20.300000000745058,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true},{\"name\":\"http://localhost:8081/a.js\",\"nextHopProtocol\":\"http/1.1\",\"transferSize\":300,\"initiatorType\":\"script\",\"startTime\":43.399999998509884,\"responseEnd\":57.29999999888241,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":12.400000000372529,\"contentDownload\":0.599999999627471,\"duration\":13.900000000372529,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true},{\"name\":\"https://cdn.enmonster.com/enmonster/web/agency/youshi2.gif\",\"nextHopProtocol\":\"\",\"transferSize\":0,\"initiatorType\":\"img\",\"startTime\":43.59999999962747,\"responseEnd\":142.19999999925494,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":0,\"contentDownload\":142.19999999925494,\"duration\":98.59999999962747,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true}]}','','','{\"FP\":9.699999999254942,\"Redirec\":0,\"TTI\":30.699999999254942,\"DomReady\":42,\"Load\":141.2999999988824,\"FirseByte\":7.599999999627471,\"DNS\":0,\"TCP\":0.6999999992549419,\"SSL\":0,\"TTFB\":6.900000000372529,\"Trans\":0.5,\"DomParse\":110.59999999962747,\"Res\":99.29999999888241,\"type\":\"reload\",\"renderBlockingStatus\":\"non-blocking\",\"nextHopProtocol\":\"\"}','[]');

/*!40000 ALTER TABLE `performance_log` ENABLE KEYS */;
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
  PRIMARY KEY (`id`)
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `resource_log` WRITE;
/*!40000 ALTER TABLE `resource_log` DISABLE KEYS */;

INSERT INTO `resource_log` (`id`, `monitorAppId`, `userAgent`, `uuId`, `level`, `category`, `happenTime`, `deviceType`, `os`, `browserInfo`, `device`, `deviceModel`, `screenHeight`, `screenWidth`, `language`, `netWork`, `ip`, `country`, `province`, `city`, `pageUrl`, `simpleUrl`, `errorMsg`, `url`, `html`, `resourceType`, `paths`)
VALUES
	(1,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','ERROR','RESOURCE_ERROR','2023-12-07 09:51:51','PC','macOS 10.15.7','Chrome 119.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','加载 SCRIPT 资源错误','http://localhost:8081/a.js','<script id=\"1701913916095\" src=\"./a.js\"></script>','SCRIPT',''),
	(2,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','WARNING','RESOURCE_ERROR','2023-12-07 09:51:51','PC','macOS 10.15.7','Chrome 119.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','加载 IMG 资源错误','https://cdn.enmonster.com/enmonster/web/agency/youshi2.gif','<img data-v-469af010=\"\" src=\"https://cdn.enmonster.com/enmonster/web/agency/youshi2.gif\" alt=\"\">','IMG',''),
	(3,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','WARNING','RESOURCE_ERROR','2023-12-07 09:52:52','PC','macOS 10.15.7','Chrome 119.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','加载 IMG 资源错误','https://cdn.enmonster.com/enmonster/web/agency/youshi2.gif','<img data-v-469af010=\"\" src=\"https://cdn.enmonster.com/enmonster/web/agency/youshi2.gif\" alt=\"\">','IMG',''),
	(4,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','ERROR','RESOURCE_ERROR','2023-12-07 09:52:52','PC','macOS 10.15.7','Chrome 119.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','加载 SCRIPT 资源错误','http://localhost:8081/a.js','<script id=\"1701913935897\" src=\"./a.js\"></script>','SCRIPT','');

/*!40000 ALTER TABLE `resource_log` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
