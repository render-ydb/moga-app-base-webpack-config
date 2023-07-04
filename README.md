# moga-app-base-webpack-config
Basic webpack configuration used by Moga application

## 介绍
moga-app-base-webpack-config是用于构建Moga App的基础webpack配置，其内部使用webpack-chain实现。

除此之外，moga-app-base-webpack-config还提供了react编译所需的babel配置。

## API
moga-app-base-webpack-config对外提供如下API，使用该API就可以得到对应的基础配置：

1. getBabelConfig 得到react相关的babel配置
2. getWebpackConfig 得到基础的webpack配置

### getBabelConfig
getBabelConfig的实现如下，可以看到具体的babel配置：

```javascript
export = (isEnvDevelopment = false) => {
  return {
    presets: [
      [require.resolve('@babel/preset-env'), {}],
      [require.resolve('@babel/preset-react'), { runtime: 'automatic' }],
      require.resolve('@babel/preset-typescript'),
    ],
    plugins: [
      true
      && isEnvDevelopment
      && require.resolve('react-refresh/babel'),
    ].filter(Boolean),
    babelrc: false,
    configFile: false,
  };
};

```
### getWebpackConfig
getWebpackConfig的实现如下：
```javascript
import getBaseConfig = require('./webpack.base');
import getBuildConfig = require('./webpack.build');
import getDevConfig = require('./webpack.dev');
import { Config, Mode } from '../../types';

export = (mode: Mode = 'development', config: Config) => {
  getBaseConfig(mode, config);
  if (mode === 'development') {
    getDevConfig(config);
  } else {
    getBuildConfig(config);
  }
  return config;
};

```
根据mode的值可以获取开发、生产环境下的配置。

#### 基础配置
开发和生产环境下公用的配置如下：
1. resolve中extensions的配置：['.js', '.json', '.jsx', '.ts', '.tsx']
2. 对css、css module、less、sass、字体、等其他资源的处理
3. 对(js|mjs|jsx|ts|tsx)类型文件的babel配置处理

#### 开发环境配置
开发环境在基础配置上增加如下配置：
1. soure map: cheap-module-source-map
2. react热更新支持

#### 生产环境配置
生产环境在基础配置上增加如下配置：
1. optimization配置，对js和css资源压缩和其他优化

更多配置，请阅读[moga-app-base-webpack-config](https://github.com/render-ydb/moga-app-base-webpack-config.git)，其实现并不难。

