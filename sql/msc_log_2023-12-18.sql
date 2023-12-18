# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.44)
# Database: msc_log
# Generation Time: 2023-12-18 08:51:06 +0000
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `click_log` WRITE;
/*!40000 ALTER TABLE `click_log` DISABLE KEYS */;

INSERT INTO `click_log` (`id`, `monitorAppId`, `userAgent`, `uuId`, `level`, `category`, `happenTime`, `deviceType`, `os`, `browserInfo`, `device`, `deviceModel`, `screenHeight`, `screenWidth`, `language`, `netWork`, `ip`, `country`, `province`, `city`, `pageUrl`, `simpleUrl`, `tagName`, `top`, `left`, `eventType`, `pageHeight`, `scrollTop`, `subType`, `paths`, `startTime`, `innerHTML`, `viewport`, `targetInfo`)
VALUES
	(1,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','USER_CLICK','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','A','38','869.1875','','872','','mousedown','','1539.9000000059605','About','{\"width\":1728,\"height\":872}','{\"offsetWidth\":47,\"offsetHeight\":22}'),
	(2,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','USER_CLICK','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/about','http://localhost:8081/about','A','38','812.0078125','','872','','mousedown','','3065','Home','{\"width\":1728,\"height\":872}','{\"offsetWidth\":45,\"offsetHeight\":22}'),
	(3,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','USER_CLICK','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','A','38','869.1875','','872','','mousedown','','2590.0999999940395','About','{\"width\":1728,\"height\":872}','{\"offsetWidth\":47,\"offsetHeight\":22}'),
	(4,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','USER_CLICK','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/about','http://localhost:8081/about','A','38','812.0078125','','872','','mousedown','','2090','Home','{\"width\":1728,\"height\":872}','{\"offsetWidth\":45,\"offsetHeight\":22}'),
	(5,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','USER_CLICK','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/about','http://localhost:8081/about','A','38','812.0078125','','872','','mousedown','','6700.4000000059605','Home','{\"width\":1728,\"height\":872}','{\"offsetWidth\":45,\"offsetHeight\":22}'),
	(6,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','USER_CLICK','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','A','38','869.1875','','872','','mousedown','','6988.5','About','{\"width\":1728,\"height\":872}','{\"offsetWidth\":47,\"offsetHeight\":22}'),
	(7,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','USER_CLICK','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/about','http://localhost:8081/about','A','38','812.0078125','','872','','mousedown','','7844.70000000298','Home','{\"width\":1728,\"height\":872}','{\"offsetWidth\":45,\"offsetHeight\":22}'),
	(8,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','USER_CLICK','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/about','http://localhost:8081/about','A','38','812.0078125','','872','','mousedown','','7292.0999999940395','Home','{\"width\":1728,\"height\":872}','{\"offsetWidth\":45,\"offsetHeight\":22}'),
	(9,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','USER_CLICK','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','A','38','869.1875','','872','','mousedown','','7556','About','{\"width\":1728,\"height\":872}','{\"offsetWidth\":47,\"offsetHeight\":22}'),
	(10,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','USER_CLICK','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','A','38','869.1875','','872','','mousedown','','8085.0999999940395','About','{\"width\":1728,\"height\":872}','{\"offsetWidth\":47,\"offsetHeight\":22}'),
	(11,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','USER_CLICK','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/about','http://localhost:8081/about','A','38','812.0078125','','872','','mousedown','','8348.40000000596','Home','{\"width\":1728,\"height\":872}','{\"offsetWidth\":45,\"offsetHeight\":22}'),
	(12,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','USER_CLICK','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','A','38','869.1875','','872','','mousedown','','8724.09999999404','About','{\"width\":1728,\"height\":872}','{\"offsetWidth\":47,\"offsetHeight\":22}'),
	(13,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','USER_CLICK','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/about','http://localhost:8081/about','A','38','812.0078125','','872','','mousedown','','8996.40000000596','Home','{\"width\":1728,\"height\":872}','{\"offsetWidth\":45,\"offsetHeight\":22}'),
	(14,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','USER_CLICK','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','A','38','869.1875','','872','','mousedown','','14956.20000000298','About','{\"width\":1728,\"height\":872}','{\"offsetWidth\":47,\"offsetHeight\":22}'),
	(15,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','USER_CLICK','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/about','http://localhost:8081/about','A','38','812.0078125','','872','','mousedown','','19516.40000000596','Home','{\"width\":1728,\"height\":872}','{\"offsetWidth\":45,\"offsetHeight\":22}'),
	(16,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','USER_CLICK','2023-12-18 14:09:09','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','DIV','90','8','','872','','mousedown','','33026.29999999702','<img alt=\"Vue logo\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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\"><div data-v-469af010=\"\" class=\"hello\"><h1 data-v-469af010=\"\">Welcome to Your Vue.js App</h1><p data-v-469af010=\"\"> For a guide and recipes on how to configure / customize this project,<br data-v-469af010=\"\"> check out the <a data-v-469af010=\"\" href=\"https://cli.vuejs.org\" target=\"_blank\" rel=\"noopener\">vue-cli documentation</a>. </p><h3 data-v-469af010=\"\">Installed CLI Plugins</h3><ul data-v-469af010=\"\"><li data-v-469af010=\"\"><a data-v-469af010=\"\" href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel\" target=\"_blank\" rel=\"noopener\">babel</a></li><li data-v-469af010=\"\"><a data-v-469af010=\"\" href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa\" target=\"_blank\" rel=\"noopener\">pwa</a></li><li data-v-469af010=\"\"><a data-v-469af010=\"\" href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router\" target=\"_blank\" rel=\"noopener\">router</a></li><li data-v-469af010=\"\"><a data-v-469af010=\"\" href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex\" target=\"_blank\" rel=\"noopener\">vuex</a></li><li data-v-469af010=\"\"><a data-v-469af010=\"\" href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint\" target=\"_blank\" rel=\"noopener\">eslint</a></li></ul><h3 data-v-469af010=\"\">Essential Links</h3><ul data-v-469af010=\"\"><li data-v-469af010=\"\"><a data-v-469af010=\"\" href=\"https://vuejs.org\" target=\"_blank\" rel=\"noopener\">Core Docs</a></li><li data-v-469af010=\"\"><a data-v-469af010=\"\" href=\"https://forum.vuejs.org\" target=\"_blank\" rel=\"noopener\">Forum</a></li><li data-v-469af010=\"\"><a data-v-469af010=\"\" href=\"https://chat.vuejs.org\" target=\"_blank\" rel=\"noopener\">Community Chat</a></li><li data-v-469af010=\"\"><a data-v-469af010=\"\" href=\"https://twitter.com/vuejs\" target=\"_blank\" rel=\"noopener\">Twitter</a></li><li data-v-469af010=\"\"><a data-v-469af010=\"\" href=\"https://news.vuejs.org\" target=\"_blank\" rel=\"noopener\">News</a></li></ul><h3 data-v-469af010=\"\">Ecosystem</h3><ul data-v-469af010=\"\"><li data-v-469af010=\"\"><a data-v-469af010=\"\" href=\"https://router.vuejs.org\" target=\"_blank\" rel=\"noopener\">vue-router</a></li><li data-v-469af010=\"\"><a data-v-469af010=\"\" href=\"https://vuex.vuejs.org\" target=\"_blank\" rel=\"noopener\">vuex</a></li><li data-v-469af010=\"\"><a data-v-469af010=\"\" href=\"https://github.com/vuejs/vue-devtools#vue-devtools\" target=\"_blank\" rel=\"noopener\">vue-devtools</a></li><li data-v-469af010=\"\"><a data-v-469af010=\"\" href=\"https://vue-loader.vuejs.org\" target=\"_blank\" rel=\"noopener\">vue-loader</a></li><li data-v-469af010=\"\"><a data-v-469af010=\"\" href=\"https://github.com/vuejs/awesome-vue\" target=\"_blank\" rel=\"noopener\">awesome-vue</a></li></ul></div>','{\"width\":1728,\"height\":872}','{\"offsetWidth\":1712,\"offsetHeight\":647}'),
	(17,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','USER_CLICK','2023-12-18 14:09:09','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','A','38','861.6875','','753','','mousedown','','37825','About','{\"width\":1728,\"height\":346}','{\"offsetWidth\":47,\"offsetHeight\":22}'),
	(18,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','USER_CLICK','2023-12-18 14:09:09','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/about','http://localhost:8081/about','A','38','812.0078125','','346','','mousedown','','46273.20000000298','Home','{\"width\":1728,\"height\":346}','{\"offsetWidth\":45,\"offsetHeight\":22}'),
	(19,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','USER_CLICK','2023-12-18 14:09:09','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','A','38','861.6875','','753','','mousedown','','48998.29999999702','About','{\"width\":1728,\"height\":346}','{\"offsetWidth\":47,\"offsetHeight\":22}');

/*!40000 ALTER TABLE `click_log` ENABLE KEYS */;
UNLOCK TABLES;


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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `http_log` WRITE;
/*!40000 ALTER TABLE `http_log` DISABLE KEYS */;

INSERT INTO `http_log` (`id`, `monitorAppId`, `userAgent`, `uuId`, `level`, `category`, `happenTime`, `deviceType`, `os`, `browserInfo`, `device`, `deviceModel`, `screenHeight`, `screenWidth`, `language`, `netWork`, `ip`, `country`, `province`, `city`, `pageUrl`, `simpleUrl`, `duration`, `method`, `pathName`, `requestText`, `responseText`, `httpOptions`, `status`, `timeout`, `statusText`, `type`, `eventType`)
VALUES
	(1,'monitor_1661841973461','Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','HTTP_LOG','2023-12-14 15:47:47','mobile','Android 10','Mobile Chrome 81.0.4044.138','Google','Pixel 4',745,353,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','20','GET','/app.6565d3ee036332ea.hot-update.json','','内容过大未记录','','200','','OK','fetch','load');

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `js_log` WRITE;
/*!40000 ALTER TABLE `js_log` DISABLE KEYS */;

INSERT INTO `js_log` (`id`, `monitorAppId`, `userAgent`, `uuId`, `level`, `category`, `happenTime`, `deviceType`, `os`, `browserInfo`, `device`, `deviceModel`, `screenHeight`, `screenWidth`, `language`, `netWork`, `ip`, `country`, `province`, `city`, `pageUrl`, `simpleUrl`, `errorMsg`, `line`, `type`, `col`, `stackTraces`, `componentName`, `subType`, `propsData`, `hook`, `componentNameTrace`)
VALUES
	(1,'monitor_1661841973461','Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','WARNING','JS_ERROR','2023-12-14 15:47:47','mobile','Android 10','Mobile Chrome 81.0.4044.138','Google','Pixel 4',745,353,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','Uncaught ReferenceError: a is not defined',8,'ReferenceError',19,'[{\"filename\":\"webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js\",\"functionName\":\"eval\",\"lineno\":8,\"colno\":19}]','','jsError','','',''),
	(2,'monitor_1661841973461','Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','WARNING','JS_ERROR','2023-12-14 15:49:49','mobile','Android 10','Mobile Chrome 81.0.4044.138','Google','Pixel 4',745,353,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','Uncaught ReferenceError: a is not defined',8,'ReferenceError',19,'[{\"filename\":\"webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js\",\"functionName\":\"eval\",\"lineno\":8,\"colno\":19}]','','jsError','','',''),
	(3,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','WARNING','JS_ERROR','2023-12-18 11:35:35','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','Uncaught ReferenceError: a is not defined',8,'ReferenceError',19,'[{\"filename\":\"webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js\",\"functionName\":\"eval\",\"lineno\":8,\"colno\":19}]','','jsError','','',''),
	(4,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','WARNING','JS_ERROR','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/about','http://localhost:8081/about','Uncaught ReferenceError: a is not defined',8,'ReferenceError',19,'[{\"filename\":\"webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js\",\"functionName\":\"eval\",\"lineno\":8,\"colno\":19}]','','jsError','','','');

/*!40000 ALTER TABLE `js_log` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table page_data_analysis
# ------------------------------------------------------------

DROP TABLE IF EXISTS `page_data_analysis`;

CREATE TABLE `page_data_analysis` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `pvCount` int(11) NOT NULL,
  `uvCount` int(11) NOT NULL,
  `newUvCount` int(11) NOT NULL,
  `oldVisitor` int(11) NOT NULL,
  `ipCounct` int(11) NOT NULL,
  `jumpCount` int(11) NOT NULL,
  `visitFrequency` float NOT NULL,
  `happenTime` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `page_data_analysis` WRITE;
/*!40000 ALTER TABLE `page_data_analysis` DISABLE KEYS */;

INSERT INTO `page_data_analysis` (`id`, `pvCount`, `uvCount`, `newUvCount`, `oldVisitor`, `ipCounct`, `jumpCount`, `visitFrequency`, `happenTime`)
VALUES
	(1,7087,1547,503,311,1645,4758,4.8,'2023-12-17'),
	(2,20785,3835,1509,832,5516,12960,5.3,'2023-12-18');

/*!40000 ALTER TABLE `page_data_analysis` ENABLE KEYS */;
UNLOCK TABLES;


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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `page_log` WRITE;
/*!40000 ALTER TABLE `page_log` DISABLE KEYS */;

INSERT INTO `page_log` (`id`, `monitorAppId`, `userAgent`, `uuId`, `level`, `category`, `happenTime`, `deviceType`, `os`, `browserInfo`, `device`, `deviceModel`, `screenHeight`, `screenWidth`, `language`, `netWork`, `ip`, `country`, `province`, `city`, `pageUrl`, `simpleUrl`, `to`, `from`, `subType`, `duration`, `startTime`, `referrer`, `type`)
VALUES
	(1,'monitor_1661841973461','Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-14 15:47:47','mobile','Android 10','Mobile Chrome 81.0.4044.138','Google','Pixel 4',745,353,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/','','popstate','','83.70000000298023','http://localhost:8081/','1'),
	(2,'monitor_1661841973461','Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-14 15:48:48','mobile','Android 10','Mobile Chrome 81.0.4044.138','Google','Pixel 4',745,353,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/','','popstate','','77.5','http://localhost:8081/','1'),
	(3,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-18 11:35:35','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/','','popstate','','177','http://localhost:8081/','2'),
	(4,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-18 11:35:35','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/','','popstate','','177','http://localhost:8081/','2'),
	(5,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/','','popstate','','54.099999994039536','http://localhost:8081/','1'),
	(6,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/about','http://localhost:8081/about','http://localhost:8081/about','','pushState','1594','1648.5','http://localhost:8081/','1'),
	(7,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/about','pushState','530','2178.5999999940395','http://localhost:8081/','1'),
	(8,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/about','http://localhost:8081/about','http://localhost:8081/about','http://localhost:8081/','pushState','510','2688.9000000059605','http://localhost:8081/','1'),
	(9,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/about','pushState','4079','6768.20000000298','http://localhost:8081/','1'),
	(10,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/about','http://localhost:8081/about','http://localhost:8081/about','http://localhost:8081/','pushState','297','7064.79999999702','http://localhost:8081/','1'),
	(11,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/about','pushState','282','7920.70000000298','http://localhost:8081/','1'),
	(12,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/about','pushState','314','7379.5999999940395','http://localhost:8081/','1'),
	(13,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/about','http://localhost:8081/about','http://localhost:8081/about','http://localhost:8081/','pushState','259','7639.0999999940395','http://localhost:8081/','1'),
	(14,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/about','http://localhost:8081/about','http://localhost:8081/about','http://localhost:8081/','pushState','254','8174.70000000298','http://localhost:8081/','1'),
	(15,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/about','pushState','258','8432.70000000298','http://localhost:8081/','1'),
	(16,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/about','http://localhost:8081/about','http://localhost:8081/about','http://localhost:8081/','pushState','384','8816.79999999702','http://localhost:8081/','1'),
	(17,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/about','pushState','254','9071.09999999404','http://localhost:8081/','1'),
	(18,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/about','http://localhost:8081/about','http://localhost:8081/about','http://localhost:8081/','pushState','5968','15039.20000000298','http://localhost:8081/','1'),
	(19,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/about','pushState','4554','19592.5','http://localhost:8081/','1'),
	(20,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-18 14:09:09','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/about','http://localhost:8081/about','http://localhost:8081/about','http://localhost:8081/','pushState','18353','37945.70000000298','http://localhost:8081/','1'),
	(21,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-18 14:09:09','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/','http://localhost:8081/about','pushState','8418','46363.79999999702','http://localhost:8081/','1'),
	(22,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PAGE_CHANGE','2023-12-18 14:09:09','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/about','http://localhost:8081/about','http://localhost:8081/about','http://localhost:8081/','pushState','2738','49102.70000000298','http://localhost:8081/','1');

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `performance_log` WRITE;
/*!40000 ALTER TABLE `performance_log` DISABLE KEYS */;

INSERT INTO `performance_log` (`id`, `monitorAppId`, `userAgent`, `uuId`, `level`, `category`, `happenTime`, `deviceType`, `os`, `browserInfo`, `device`, `deviceModel`, `screenHeight`, `screenWidth`, `language`, `netWork`, `ip`, `country`, `province`, `city`, `pageUrl`, `simpleUrl`, `fcp`, `fp`, `fmp`, `lcp`, `nt`, `rf`)
VALUES
	(1,'monitor_1661841973461','Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PERFORMANCE','2023-12-14 15:48:48','mobile','Android 10','Mobile Chrome 81.0.4044.138','Google','Pixel 4',745,353,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','','','','','{\"FP\":41.3999999910593,\"Redirec\":0,\"TTI\":76.19999998807907,\"DomReady\":139.3999999910593,\"Load\":147.29999999701977,\"FirseByte\":41.099999994039536,\"DNS\":0,\"TCP\":0,\"SSL\":0,\"TTFB\":37,\"Trans\":0.29999999701976776,\"DomParse\":71,\"Res\":7.9000000059604645,\"type\":\"reload\",\"renderBlockingStatus\":\"non-blocking\",\"nextHopProtocol\":\"\"}','[{\"name\":\"http://localhost:8081/monitorSdk.js\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"script\",\"startTime\":56.5,\"responseEnd\":61.900000005960464,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":1.5,\"contentDownload\":0.20000000298023224,\"duration\":5.4000000059604645,\"renderBlockingStatus\":\"blocking\",\"isCache\":true},{\"name\":\"http://localhost:8081/js/chunk-vendors.js\",\"nextHopProtocol\":\"http/1.1\",\"transferSize\":300,\"initiatorType\":\"script\",\"startTime\":56.599999994039536,\"responseEnd\":68.90000000596046,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":8,\"contentDownload\":0.20000000298023224,\"duration\":12.300000011920929,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true},{\"name\":\"http://localhost:8081/js/app.js\",\"nextHopProtocol\":\"http/1.1\",\"transferSize\":300,\"initiatorType\":\"script\",\"startTime\":56.79999999701977,\"responseEnd\":70.29999999701977,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":3.1000000089406967,\"contentDownload\":0.09999999403953552,\"duration\":13.5,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true}]'),
	(2,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PERFORMANCE','2023-12-18 11:35:35','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','','','','','{\"FP\":12.599999994039536,\"Redirec\":0,\"TTI\":174.59999999403954,\"DomReady\":201.59999999403954,\"Load\":211.70000000298023,\"FirseByte\":12.399999991059303,\"DNS\":0,\"TCP\":0,\"SSL\":0,\"TTFB\":1.699999988079071,\"Trans\":0.20000000298023224,\"DomParse\":37.1000000089407,\"Res\":10.100000008940697,\"type\":\"back_forward\",\"renderBlockingStatus\":\"non-blocking\",\"nextHopProtocol\":\"\"}','[{\"name\":\"http://localhost:8081/monitorSdk.js\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"script\",\"startTime\":80.5,\"responseEnd\":128.1000000089407,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":44,\"contentDownload\":0.6000000089406967,\"duration\":47.6000000089407,\"renderBlockingStatus\":\"blocking\",\"isCache\":false},{\"name\":\"http://localhost:8081/js/app.js\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"script\",\"startTime\":80.70000000298023,\"responseEnd\":132.5,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":1.4000000059604645,\"contentDownload\":0.699999988079071,\"duration\":51.79999999701977,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false},{\"name\":\"http://localhost:8081/js/chunk-vendors.js\",\"nextHopProtocol\":\"http/1.1\",\"transferSize\":493438,\"initiatorType\":\"script\",\"startTime\":80.70000000298023,\"responseEnd\":180.40000000596046,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":45.69999998807907,\"contentDownload\":51.900000005960464,\"duration\":99.70000000298023,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":false}]'),
	(3,'monitor_1661841973461','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36','d0fd9c23-5009-460a-83f0-8f86ea4ac6e5','INFO','PERFORMANCE','2023-12-18 14:08:08','PC','macOS 10.15.7','Chrome 120.0.0.0','Chrome','Blink',1117,1728,'zh-CN','4g','127.0.0.1','本机地址','本机地址','','http://localhost:8081/','http://localhost:8081/','','','','','{\"FP\":26.399999991059303,\"Redirec\":0,\"TTI\":52.29999999701977,\"DomReady\":84.29999999701977,\"Load\":86.3999999910593,\"FirseByte\":26,\"DNS\":0,\"TCP\":0,\"SSL\":0,\"TTFB\":21.200000002980232,\"Trans\":0.3999999910593033,\"DomParse\":34.099999994039536,\"Res\":2.0999999940395355,\"type\":\"reload\",\"renderBlockingStatus\":\"non-blocking\",\"nextHopProtocol\":\"\"}','[{\"name\":\"http://localhost:8081/monitorSdk.js\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"script\",\"startTime\":33.900000005960464,\"responseEnd\":44.099999994039536,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":2.2000000029802322,\"contentDownload\":0.19999998807907104,\"duration\":10.199999988079071,\"renderBlockingStatus\":\"blocking\",\"isCache\":true},{\"name\":\"http://localhost:8081/js/chunk-vendors.js\",\"nextHopProtocol\":\"http/1.1\",\"transferSize\":300,\"initiatorType\":\"script\",\"startTime\":34.099999994039536,\"responseEnd\":50.599999994039536,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":8.700000002980232,\"contentDownload\":0.09999999403953552,\"duration\":16.5,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true},{\"name\":\"http://localhost:8081/js/app.js\",\"nextHopProtocol\":\"\",\"transferSize\":300,\"initiatorType\":\"script\",\"startTime\":34.400000005960464,\"responseEnd\":57.400000005960464,\"dns\":0,\"tcp\":0,\"ssl\":0,\"ttfb\":9.099999994039536,\"contentDownload\":0.10000000894069672,\"duration\":23,\"renderBlockingStatus\":\"non-blocking\",\"isCache\":true}]');

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




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
