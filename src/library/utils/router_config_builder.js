const METHOD_TYPE_GET = 'get'
const METHOD_TYPE_POST = 'post'

/**
 *
 * @param {String} url          接口url
 * @param {String} methodType   接口类型, METHOD_TYPE_GET / METHOD_TYPE_POST
 * @param {Function} func       实际controller函数
 * @param {Object}
 */
function routerConfigBuilder(url = '/', methodType = METHOD_TYPE_GET, func) {
    let routerConfig = {}
    routerConfig[url] = {
        methodType,
        func,
    }
    return routerConfig
}

export default {
    routerConfigBuilder,

    // 方法常量
    METHOD_TYPE_GET,
    METHOD_TYPE_POST
}
