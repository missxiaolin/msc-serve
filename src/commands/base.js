import { Command } from '@adonisjs/ace'
import shell from 'shelljs'
import path from 'path'

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
    }

    async execute (args, options) {

    }

    /**
     * 执行脚本
     * @param {*} commandName 
     * @param {*} args 
     */
    async execCommand(commandName, args = []) {
        let argvString = args.map((arg) => { return `'${arg}'` }).join('   ')
        let command = `NODE_ENV=production node ${projectBaseUri}/dist/command.js ${commandName}  ${argvString}`
        shell.exec(command, {
            async: true,
            silent: true
        }, () => {
        })
    }

    /**
     * 打印log 日志
     */
    log() {

    }

}

export default Base