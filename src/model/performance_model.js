import Knex from '../library/mysql'
import _ from 'lodash'
import Logger from '../library/logger'
import * as config from '../config/err'

const BASE_TABLE_NAME = 'performance_log'
const TABLE_COLUMN = [

]

const DISOLAYT_TABLE_COLUMN = [

]

function getTableName() {
    return BASE_TABLE_NAME
}

export default class PerformanceModel {
    constructor() {

    }

    async save(data) {
        let tableName = getTableName()
        let insertData = {}
        for (let column of [
            'monitorAppId',
            'userAgent',
            'uuId',
            'level',
            'category',
            'happenTime',
            'deviceType',
            'os',
            'browserInfo',
            'device',
            'deviceModel',
            'screenHeight',
            'screenWidth',
            'language',
            'netWork',
            'country',
            'province',
            'city',
            'pageUrl',
            'simpleUrl',
            'fcp',
            'fp',
            'fmp',
            'lcp',
            'nt',
            'rf',
        ]) {
            insertData[column] = data[column] || ""
        }
        let insertResult = await Knex.returning('id')
            .insert(insertData)
            .into(tableName)
            .catch(err => {
                console.log(err)
                Logger.log(err.message, 'PerformanceModel    add   出错')
                return []
            })
        let id = _.get(insertResult, [0], 0)

        return id > 0
    }
}