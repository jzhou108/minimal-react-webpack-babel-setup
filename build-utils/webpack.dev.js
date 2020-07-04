const Dotenv = require('dotenv-webpack');
const { DefinePlugin } = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new Dotenv({
      path: './.env.development',
    }),
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
  ],
};