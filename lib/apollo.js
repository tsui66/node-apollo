'use strict';

const urllib = require('urllib');
const assert = require('assert');
const helper = require('./helper');

module.exports = {
  remoteConfigService: async (config) => {
    assert(config, 'param config is required');
    assert(config.token, 'param token is required');
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        authorization: config.token,
      },
      rejectUnauthorized: false,
      contentType: 'json',
      dataType: 'json',
    };
    const res = await urllib.request(helper.getAllConfigFromApolloUri(config), options);
    return helper.mergeConfig(res.data);
  },
};