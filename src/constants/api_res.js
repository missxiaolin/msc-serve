/**
 * 返回参数
 * @param {*} data 
 * @param {*} success 
 * @param {*} errorMessage 
 */
function showResult(data, success = true, errorMessage = '', errorCode = null) {
    return {
        success,
        data,
        errorMessage,
    }
}

/**
 * 返回错误消息
 * @param {*} errorMessage
 * @param {*} errorCode
 * @param {*} data
 * @param {*} action
 */
function showError(errorMessage = '', errorCode = 10000, data = {}) {
    return showResult(data, false, errorMessage, errorCode)
}

export default {
    showResult,
    showError
}