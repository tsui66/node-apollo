'use strict';

const assert = require('assert');
const apollo = require('../index.js');

describe('#index', function () {
  it('index.remoteConfigService', async () => {
    const config = {
      configServerUrl: 'http://116.62.161.40:8070',
      appId: 'gnetlink-cms-api',
      clusterName: 'default',
      namespaceName: '',
      apolloEnv: 'dev',
      // clientIp: '',
    };
    const token = '9037a4e8c14c3d61ac5dbbdfa379fc56f0e098ff';
    const result = await apollo.remoteConfigService(token, config);
    assert(Object.keys(result).length > 0, 'Read config failed');
  });
});