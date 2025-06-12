const { override } = require('customize-cra');

// Disable ForkTsCheckerWebpackPlugin to resolve memory issues
const disableForkTsChecker = () => (config) => {
  const plugins = config.plugins || [];
  config.plugins = plugins.filter(
    plugin => plugin.constructor.name !== 'ForkTsCheckerWebpackPlugin'
  );
  return config;
};

module.exports = override(
  disableForkTsChecker()
); 