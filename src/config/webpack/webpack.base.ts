import setWebpackLoaders = require("./setWebpackLoaders");
import setWebpackPlugins = require("./setWebpackPlugins");
import { Config, Mode } from "../../types";

export = (mode: Mode = "development", config: Config) => {
  config.mode(mode);
  config.resolve.extensions
    .merge([".js", ".json", ".jsx", ".ts", ".tsx"]);
  // webpack loaders
  setWebpackLoaders(mode, config);
  // webpack plugins
  setWebpackPlugins(config);
};
