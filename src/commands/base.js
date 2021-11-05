import { Command } from '@adonisjs/ace'

/**
 * 命令执行基础类
 */
class Base extends Command {
    static get signature() {
        return `
         Parse:Base
         
         {--onlyFlag:[必传]flag,只有true/false两个值} 
         {--isTest?=@value:[可选]是否处于测试环境}
         `
    }

    static get description() {
        return '基础配置, Base'
    }

    /**
     * 在最外层进行一次封装, 方便获得报错信息
     * @param {*} args 
     * @param {*} options 
     * @returns {Promise<void>}
     */
    async handle(args, options) {
        this.log('command start')
    }

    async execute (args, options) {

    }

}

export default Base