# node-apollo

  携程Apollo配置中心node SDK.

## Install

```bash
$ npm i node-apollo --save-dev
```
Node.js >= 6.0.0 required.

## Features

- ✔︎ 适用eggjs, thinkjs等docker部署项目
- ✔︎ 适用自己手动搭建的服务，可直接读取JSON格式的配置

## Usage

* See [examples](https://github.com/Quinton/node-apollo/tree/master/example)

## remoteConfigService
```
  const config = {
      configServerUrl: 'http://example.com',
      appId: '<appId>',
      clusterName: 'default',
      namespaceName: '',
      apolloEnv: 'dev',
      token: '<apollo access token>'
      // clientIp: '',
    };
  const result = await apollo.remoteConfigService(config);
```
  >**NOTE:** 读取携程Apollo配置，调用第三方应用接入Apollo开放平台， 详情请参考[Apollo开放平台](https://github.com/ctripcorp/apollo/wiki/Apollo%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0).
## createEnvFile
```
  const obj = {
      mongoose: 'mongo://127.0.0.1:27017',
      appId: '<appId>',
    };
  apollo.createEnvFile(eggConfig);
```
>**NOTE:** 生成环境变量文件，常用于docker化项目，详细请参考[example](https://github.com/Quinton/node-apollo/tree/master/example).
## setEnv
```
apollo.setEnv();
```
>**NOTE:** 注入环境变量到process.env, 详情亲参考[dotenv](https://github.com/motdotla/dotenv#usage).

## TODO
  
 - [] 支持局部配置热更新

## License

[MIT](LICENSE)