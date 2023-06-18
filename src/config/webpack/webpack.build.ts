import { Config } from "../../types";


const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

export = (config: Config) => {
  // disable devtool of mode prod build
  config.devtool(false);

  config.mode("production");
  // uglify js file
  config.optimization
    .minimizer("TerserPlugin")
    .use(TerserPlugin, [{
      parallel: true,
      extractComments: false,
      terserOptions: {
        sourceMap: true,
        keep_classnames: true,
        keep_fnames: true,
        compress: {
          unused: false,
        },
        output: {
          ascii_only: true,
          comments: false,
          beautify: false,
        },
        mangle: true,
      },
    }]);

  // optimize css file
  config.optimization
    .minimizer("CssMinimizerPlugin")
    .use(CssMinimizerPlugin, [{
      minimizerOptions: {
        preset: [
          "default",
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      },
      parallel: true,
    }]);
};
