import LIpip from "../library/ipip";

/**
 * 工具类
 */
export default class Util {
  /**
   * 基础配置
   * @return {?}
   */
  constructor() {}

  /**
   * 单例
   * @param {*} options
   * @return {?}
   */
  static getInstance(options = {}) {
    if (!Util.instance) {
      Util.instance = new Util(options);
    }
    return Util.instance;
  }

  /**
   * 判断数据类型
   * util.isType().isArray(……)
   */
  isType() {
    let _obj = {
      isNumeric: "Number",
      isBoolean: "Boolean",
      isString: "String",
      isNull: "Null",
      isUndefined: "Undefined",
      isSymbol: "Symbol",
      isPlainObject: "Object",
      isArray: "Array",
      isRegExp: "RegExp",
      isDate: "Date",
      isfunction: "Function",
      isWindow: "Window",
    };

    let _type = {},
      _toString = _type.toString;

    for (var key in _obj) {
      if (!_obj.hasOwnProperty(key)) break;
      _type[key] = (function () {
        var reg = new RegExp("^\\[object " + _obj[key] + "\\]$");
        return function anonymous(val) {
          return reg.test(_toString.call(val));
        };
      })();
    }

    return _type;
  }

  /**
   * 判断数据
   * @param {*} obj
   */
  isBlank(obj) {
    return obj === null || obj === undefined || obj === "";
  }

  /**
   * 解析url中拼接的参数
   * @param url
   * @return {{参数名: string}}
   */
  parseUrlParams(url) {
    if (url.indexOf("?") !== -1) {
      url = url.substr(url.indexOf("?") + 1);
    }
    let paramsArr = url.match(/[^\?\=\&]*\=[^\?\=\&]*/g);
    let params = {};
    if (paramsArr != null) {
      paramsArr.forEach((item) => {
        let kv = item.split("=");
        params[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
      });
    }
    return params;
  }

  /**
   * 解析url
   * @param {*} url
   */
  getQueryObject(url) {
    let search = url.substring(url.lastIndexOf("?") + 1),
      obj = {},
      reg = /([^?&=]+)=([^?&=]*)/g,
      base_url = url.split("?")[0];
    search.replace(reg, (rs, $1, $2) => {
      let name = decodeURIComponent($1),
        val = decodeURIComponent($2);
      val = String(val);
      obj[name] = val;
    });

    return {
      baseUrl: base_url,
      query: obj,
    };
  }

  /**
   * 组装url 参数
   * @param {*} queryObject
   */
  makeQuery(queryObject) {
    let query = Object.entries(queryObject)
      .reduce((result, entry) => {
        result.push(entry.join("="));
        return result;
      }, [])
      .join("&");
    return `?${query}`;
  }

  /**
   * 删除url 指定参数
   * @param {*} name
   */
  funcUrlDel(name) {
    var loca = location;
    var baseUrl = loca.origin + loca.pathname + "?";
    var query = loca.search.substr(1);
    if (query.indexOf(name) > -1) {
      var obj = {};
      var arr = query.split("&");
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("=");
        obj[arr[i][0]] = arr[i][1];
      }
      delete obj[name];
      var url =
        baseUrl +
        JSON.stringify(obj)
          .replace(/[\"\{\}]/g, "")
          .replace(/\:/g, "=")
          .replace(/\,/g, "&");
      return url;
    }
  }

  /**
   * 修改url指定参数
   * @param {*} paramName
   * @param {*} replaceWith
   */
  replaceParamVal(paramName, replaceWith) {
    var oUrl = location.href.toString();
    var re = eval("/(" + paramName + "=)([^&]*)/gi");
    location.href = oUrl.replace(re, paramName + "=" + replaceWith);
    return location.href;
  }

  /**
   * 处理空对象
   * @example {a: 1, b: undefined} => {a:1}
   * @param {*} obj
   */
  handleEmptyData(obj = {}) {
    var newObj = {};
    if (typeof obj === "object") {
      Object.keys(obj).map((key) => {
        if (obj[key]) {
          newObj[key] = obj[key];
        }
      });
    }
    return newObj;
  }

  /**
   * 延迟执行函数, 返回一个 Promise
   * @param {*} ms
   */
  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * 对象转化为键值对
   * @param {*} obj
   */
  objectToArray(obj) {
    return Object.keys(obj).map((key) => {
      return {
        key: key,
        value: obj[key],
      };
    });
  }

  /**
   * 获取省市区
   * @param {*} ip
   */
  getIp(ip) {
    return LIpip.ip2Locate(ip);
  }
}
