const { entry, module: configModule, resolve } = require('./webpack.config.js');

module.exports = {
  mode: 'development',
  entry,
  module: configModule,
  resolve,
  devServer: {
		open: true,
		hot: true,
	},
};
