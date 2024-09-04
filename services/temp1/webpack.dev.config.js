const { mode, entry, resolve, module: configModule, devServer } = require('../../webpack.dev.config.js');

module.exports = {
  mode,
  entry,
  resolve,
  module: configModule,
  devServer,
};
