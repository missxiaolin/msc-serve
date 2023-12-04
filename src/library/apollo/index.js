// 参考： https://www.apolloconfig.com/#/zh/usage/third-party-sdks-user-guide?id=_3-nodejs

const apollo = require('node-apollo');

const apolloConfig = async()=>{
  // console.log('process----', process.env.NODE_ENV);
  const apolloEnv = {
    dev: 'http://10.208.204.46:8161',
  }
  const env = process.env.NODE_ENV || 'prd'
  const config = {
    configServerUrl: apolloEnv[env],
    appId: 'MSC',
    clusterName: 'default',
    namespaceName: ['application'],
  };
  const result = await apollo.remoteConfigServiceSkipCache(config);
  // const result = await apollo.remoteConfigServiceFromCache(config);
  let formatResult = {}
  for(item in result){
    try {
      const node = result[item].replace(/\n/g, '')
      formatResult[item] = JSON.parse(node)
    } catch (error) {
      console.log('error---', error)
      formatResult[item] = result[item]
    }
  }
  return formatResult || {}
}


module.exports = apolloConfig

