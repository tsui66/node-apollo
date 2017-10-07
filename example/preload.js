'use strict';

const apollo = require('node-apollo');

// 携程apollo配置中心配置
const apollo_config = {
  configServerUrl: 'http://example.com',
  appId: '<appId>',
  clusterName: 'default',
  namespaceName: '',
  apolloEnv: 'dev',
  token: '<apollo access token>'
};

// 读取携程apollo配置中心，并创建default.env文件
apollo.remoteConfigService(apollo_config)
  .then((bundle => apollo.createEnvFile(bundle)))
  .catch(err => {
    console.error(err);
  }).done;