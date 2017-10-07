'use strict';

const assert = require('assert');
const apollo = require('../index.js');

describe('#index', function () {
  it('index.remoteConfigService', async () => {
    const config = {
      configServerUrl: 'http://example.com',
      appId: '<appId>',
      clusterName: 'default',
      namespaceName: '',
      apolloEnv: 'dev',
      token: '<apollo access token>'
      // clientIp: '',
    };
    const result = await apollo.remoteConfigService(token, config);
    assert(Object.keys(result).length > 0, 'Read config failed');
  });
});