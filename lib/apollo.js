'use strict';

const urllib = require('urllib');
const helper = require('./helper');

module.exports = {
  remoteConfigService: async (token, config) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        authorization: token,
      },
      rejectUnauthorized: false,
      contentType: 'json',
      dataType: 'json',
    };
    const res = await urllib.request(helper.getAllConfigFromApolloUri(config), options);
    console.log(res.data)
    return helper.mergeConfig(res.data);
    // ctx.app.config = 2
  },
};