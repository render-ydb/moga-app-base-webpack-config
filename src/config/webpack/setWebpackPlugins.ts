
import { Config } from '../../types';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('WebpackBar');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

export = (config: Config) => {
  config
    .plugin('MiniCssExtractPlugin')
    .use(MiniCssExtractPlugin, [{
      filename: '[name].css',
    }])
    .end()
    .plugin('WebpackBar')
    .use(WebpackBar)
    .end()
    .plugin('CaseSensitivePathsPlugin')
    .use(CaseSensitivePathsPlugin);
};
