'use strict';

const urllib = require('urllib');
const assert = require('assert');
const fs = require('fs');
const helper = require('./helper');
const config = require('../config.js');

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
  // 生成default.env
  createEnvFile: (envConfig) => {
    for (let key of Object.keys(envConfig)) {
      fs.appendFileSync(config.ENV_FILE_PATH, `${key}=${envConfig[key]}\n`);
    }
  },
  // 注入到process.env
  setEnv: () => {
    try {
      require('dotenv').config({ path: config.ENV_FILE_PATH });
    } catch(err) {
      assert(false, err);
    }
  }
};