'use strict';

const fs = require('fs');
const assert = require('assert');
const apollo = require('../index.js');
const config = require('../config.js');

describe('#index', function () {
  it('index.remoteConfigService', async () => {
    const eggConfig = {
      configServerUrl: 'http://106.12.25.204:8070',
      appId: 'node-apollo',
      clusterName: 'default',
      namespaceName: '',
      apolloEnv: 'dev',
      token: 'af86c81b021f735ad128199097d6191471af4404'
      // clientIp: '',
    };
    const result = await apollo.remoteConfigService(eggConfig);
    assert(Object.keys(result).length > 0, 'Read config failed');
  });
  // 通过带缓存的Http接口从Apollo读取配置
  it('index.remoteConfigServiceFromCache', async () => {
    const eggConfig = {
      configServerUrl: 'http://106.12.25.204:8070',
      appId: 'node-apollo',
      clusterName: 'default',
      namespaceName: ['TEST1.NODE.APOLLO.SECOND'],
      releaseKey: "20190118171814-release",
      token: 'af86c81b021f735ad128199097d6191471af4404'
      // clientIp: '',
    };
    // const result = await apollo.remoteConfigServiceFromCache(eggConfig);
    // assert(Object.keys(result).length > 0, 'Read config failed');
  });
  // 通过不带缓存的Http接口从Apollo读取配置
  it('index.remoteConfigServiceSikpCache', async () => {
    const eggConfig = {
      configServerUrl: 'http://106.12.25.204:8070',
      appId: 'node-apollo',
      clusterName: 'default',
      namespaceName: ['TEST1.NODE.APOLLO.SECOND'],
      releaseKey: "20190118171814-release",
      // clientIp: '',
    };
    // const result = await apollo.remoteConfigServiceSikpCache(eggConfig);
    // assert(Object.keys(result).length > 0, 'Read config failed');
  });

  it('index.createEnvFile', async () => {
    const eggConfig = {
      configServerUrl: 'http://106.12.25.204:8070',
      appId: 'node-apollo',
      clusterName: 'default',
      namespaceName: '',
      apolloEnv: 'dev',
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