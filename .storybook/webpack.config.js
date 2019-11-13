const merge = require("webpack-merge");

module.exports = ({ config, mode }) => {
  // console.dir(config, { depth: null });
  let mergedConfig = merge.smart(config, {
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          loader: "svelte-loader",
          options: {
            preprocess: require("svelte-preprocess")({
              scss: {
                data: `@import '../styles/variables.scss';`
              }
            })
          }
        }
      ]
    }
  });
  mergedConfig.resolve.alias = { ...mergedConfig.resolve.alias };

  return mergedConfig;
};
