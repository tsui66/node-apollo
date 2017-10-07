'use strict';

const fs = require('fs');
const assert = require('assert');
const apollo = require('../index.js');
const config = require('../config.js');

describe('#index', function () {
  it('index.remoteConfigService', async () => {
    const eggConfig = {
      configServerUrl: 'http://example.com',
      appId: '<appId>',
      clusterName: 'default',
      namespaceName: '',
      apolloEnv: 'dev',
      token: '<apollo access token>'
      // clientIp: '',
    };
    const result = await apollo.remoteConfigService(config);
    assert(Object.keys(result).length > 0, 'Read config failed');
  });
  it('index.createEnvFile', async () => {
    const eggConfig = {
      configServerUrl: 'http://example.com',
      appId: '<appId>',
      clusterName: 'default',
      namespaceName: '',
      apolloEnv: 'dev',
      token: '<apollo access token>'
      // clientIp: '',
    };
    apollo.createEnvFile(eggConfig);
    assert(fs.existsSync(config.ENV_FILE_PATH), 'create env file failed');
  });
  it('index.setEnv', async () => {
    apollo.setEnv();
    assert(process.env.configServerUrl, 'Read config failed');
  });
});