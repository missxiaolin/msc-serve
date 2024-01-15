// https://open.dingtalk.com/document/orgapp/custom-robots-send-group-messages
import env from './env'

const development = {
    webhook: "https://oapi.dingtalk.com/robot/send?access_token=4b597ab0677cfd0d06d604a4e4c4f4a7e1a1cb6e28858f97af27db5ef4ab07fa"
}

// 测试环境配置
const testing = development

// 线上环境配置
const production = {
    webhook: "https://oapi.dingtalk.com/robot/send?access_token=4b597ab0677cfd0d06d604a4e4c4f4a7e1a1cb6e28858f97af27db5ef4ab07fa"

}

let config = {
    development,
    testing,
    production
}

export default config[env]