[![NPM version][npm-image]][npm-url]
[![David deps][david-image]][david-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/node-apollo.svg?style=flat-square
[npm-url]: https://npmjs.org/package/node-apollo
[david-image]: https://img.shields.io/david/Quinton/node-apollo.svg?style=flat-square
[david-url]: https://david-dm.org/Quinton/node-apollo/repo.svg
[download-image]: https://img.shields.io/npm/dm/node-apollo.svg?style=flat-square
[download-url]: https://npmjs.org/package/node-apollo
# node-apollo

  携程Apollo配置中心node SDK.

## Install

```bash
$ npm i node-apollo --save-dev
```
Node.js >= 6.0.0 required.

## Features

- ✔︎ 适用eggjs([egg-apollojs](https://github.com/yhj2009/egg-apollojs)), thinkjs等docker部署项目
- ✔︎ 适用自己手动搭建的服务，可直接读取JSON格式的配置

## Usage

* See [examples](https://github.com/Quinton/node-apollo/tree/master/example)

## Methods

### apollo# ```remoteConfigServiceFromCache(config)```
```
  const config = {
    configServerUrl: 'http://example.com',
    appId: '<appId>',
    clusterName: 'default',
    namespaceName: [ 'namespaceName1', 'namespaceName2' ], // n1的配置会被n2配置覆盖
    // clientIp: '',
    };
  const result = await apollo.remoteConfigServiceFromCache(config);
```
  >**NOTE:** 通过带缓存的Http接口从Apollo读取配置，详情请参考[Apollo开放平台](https://github.com/ctripcorp/apollo/wiki/%E5%85%B6%E5%AE%83%E8%AF%AD%E8%A8%80%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%8E%A5%E5%85%A5%E6%8C%87%E5%8D%97#12-%E9%80%9A%E8%BF%87%E5%B8%A6%E7%BC%93%E5%AD%98%E7%9A%84http%E6%8E%A5%E5%8F%A3%E4%BB%8Eapollo%E8%AF%BB%E5%8F%96%E9%85%8D%E7%BD%AE).
### apollo# ```remoteConfigServiceSkipCache(config)```
```
  const config = {
    configServerUrl: 'http://example.com',
    appId: '<appId>',
    clusterName: 'default',
    namespaceName: [ 'namespaceName1', 'namespaceName2' ], // n1的配置会被n2配置覆盖
    // clientIp: '', // optional
    // releaseKey: '', // optional
    };
  const result = await apollo.remoteConfigServiceSkipCache(config);
```
  >**NOTE:** 通过不带缓存的Http接口从Apollo读取配置，详情请参考[Apollo开放平台](https://github.com/ctripcorp/apollo/wiki/%E5%85%B6%E5%AE%83%E8%AF%AD%E8%A8%80%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%8E%A5%E5%85%A5%E6%8C%87%E5%8D%97#13-%E9%80%9A%E8%BF%87%E4%B8%8D%E5%B8%A6%E7%BC%93%E5%AD%98%E7%9A%84http%E6%8E%A5%E5%8F%A3%E4%BB%8Eapollo%E8%AF%BB%E5%8F%96%E9%85%8D%E7%BD%AE).
### apollo# ```remoteConfigService(config)```
```
  const config = {
      configServerUrl: 'http://example.com',
      appId: '<appId>',
      clusterName: 'default',
      namespaceName: '',  //no surport multi namespace name, optional
      apolloEnv: 'dev',
      token: '<apollo access token>', // required
      // clientIp: '',
    };
  const result = await apollo.remoteConfigService(config);
```
  >**NOTE:** 读取携程Apollo配置，调用第三方应用接入Apollo开放平台， 详情请参考[Apollo开放平台](https://github.com/ctripcorp/apollo/wiki/Apollo%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0).
### apollo# ```createEnvFile(envConfig)```
```
  const envConfig = {
      mongoose: 'mongo://127.0.0.1:27017',
      appId: '<appId>',
    };
  apollo.createEnvFile(envConfig);
```
>**NOTE:** 生成环境变量文件，常用于docker化项目，详细请参考[example](https://github.com/Quinton/node-apollo/tree/master/example).
### apollo# ```setEnv()```
```
apollo.setEnv();
```
>**NOTE:** 注入环境变量到process.env, 详情请参考[dotenv](https://github.com/motdotla/dotenv#usage).

## TODO
  
 - ~~[x] 支持局部配置热更新~~
>**NOTE:** 不支持热更新，具体原因和方案请参考：[关于eggjs热部署问题 ](https://github.com/eggjs/egg/issues/947)

## License

[MIT](LICENSE)
