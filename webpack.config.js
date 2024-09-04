const path = require('path');

module.exports = {
  entry: {
    bundle: path.resolve(process.cwd(), 'src', 'index.tsx'),
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    clean: true,
  },
  resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx'],
	},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
