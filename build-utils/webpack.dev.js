const Dotenv = require('dotenv-webpack');
const { DefinePlugin } = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['eslint-loader'],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: './.env.development',
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};
