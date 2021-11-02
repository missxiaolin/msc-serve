
/**
 * 基础Base类
 */
 export default class Base {
    /**
     * 发送
     * @param {*} res 
     * @param {*} data 
     * @param {*} success 
     * @param {*} errorMessage 
     */
    send(res, data, success = true, errorMessage = "") {
        let result = {
            model: data,
            success: success,
            errorMessage: errorMessage
        }
        return res.send(result)
    }
}