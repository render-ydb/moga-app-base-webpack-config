import { Config } from '../../types';

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

export = (config: Config) => {
  config.devtool('cheap-module-source-map');

  config
    .plugin('ReactRefreshWebpackPlugin')
    .use(ReactRefreshWebpackPlugin, [{
      overlay: true,
    }]);
};
