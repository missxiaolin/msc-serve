import LIpip from "../ipip";
import moment from "moment";
/**
 * URL 参数解析
 * @param {String} url
 */
const urlParse = (url) => {
  var obj = {};
  var reg = /[?&][^?&]+=[^?&]+/g;
  var arr = url.match(reg);

  if (arr) {
    arr.forEach(function (item) {
      var tempArr = item.substring(1).split("=");
      var key = decodeURIComponent(tempArr[0]);
      var val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }
  return obj;
};

/**
 * 处理空对象
 * @example {a: 1, b: undefined} => {a:1}
 * @param {Object} obj
 */
const handleEmptyData = (obj = {}) => {
  var newObj = {};
  if (typeof obj === "object") {
    Object.keys(obj).map((key) => {
      if (obj[key]) {
        newObj[key] = obj[key];
      }
    });
  }
  return newObj;
};

/**
 * 延迟执行函数, 返回一个 Promise
 * @param {number} ms
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * 对象转化为键值对
 * @param {object} obj
 */
const objectToArray = (obj) =>
  Object.keys(obj).map((key) => {
    return {
      key: key,
      value: obj[key],
    };
  });

/**
 * 对比对象中指定参数
 * @param {object} obj
 */
const compare = (property) => {
  return function (obj1, obj2) {
    var value1 = obj1[property];
    var value2 = obj2[property];
    return value2 - value1; // 降序
  };
};

const isType = () => {
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
};

const { ip2Locate } = LIpip;

/**
 * @description 获取两个时间间 间隔 {n} 小时 所有时间
 * @param {*} startDateTime
 * @param {*} endDateTime
 * @returns
 *
 * @example betweenDateTimeAllHours('2023-06-03 00:50:00', '2023-06-03 12:30:00', 3)
 */
export const betweenDateTimeAllHours = (
  startDateTime,
  endDateTime,
  spacing = 1
) => {
  let hourList = [];
  endDateTime = endDateTime || moment().format("YYYY-MM-DD HH:mm:ss");
  const start = moment(startDateTime);
  const end = moment(endDateTime);
  let hoursLen = end.diff(start, "hours");
  hoursLen = Math.round(hoursLen / spacing); // 时间区间 四舍五入
  hourList.push(start.format("YYYY-MM-DD HH:mm:ss"));
  for (let i = 1; i <= hoursLen; i++) {
    const newTime = start.add(spacing, "hours").format("YYYY-MM-DD HH:mm:ss");
    hourList.push(newTime);
  }
  return hourList;
};

/**
 * 判断是否在该时间段
 * @param {*} currentTime 
 * @param {*} startTime 
 * @param {*} endTime 
 */
export const isHourSlot = (currentTime, startTime, endTime) => {
  // 判断当前时间是否在时间段内
  if (currentTime >= startTime && currentTime <= endTime) {
    return true;
  } else {
    return false;
  }
};

export default {
  sleep,
  urlParse,
  ip2Locate,
  objectToArray,
  handleEmptyData,
  compare,
  isType,
};
