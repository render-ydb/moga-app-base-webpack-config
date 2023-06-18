import { Config } from "../../types";
import webpack from "webpack";

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

export = (config: Config) => {
  config.devtool("cheap-module-source-map");

  // config
  // .plugin("HotModuleReplacementPlugin")
  // .use(new webpack.HotModuleReplacementPlugin());
  
  config
    .plugin("ReactRefreshWebpackPlugin")
    .use(ReactRefreshWebpackPlugin, [{
      overlay: true,
    }]);
};
