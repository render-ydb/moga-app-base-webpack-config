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
