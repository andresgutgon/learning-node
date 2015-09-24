/* eslint no-var: 0, no-console: 0, prefer-template: 0, prefer-arrow-callback: 0 */
require('babel/register')();

var compiler
  , devServer
  , webpack
  , WebpackDevServer
  , webpack_config
  , server_config;

webpack = require('webpack');
WebpackDevServer = require('webpack-dev-server');
server_config = require('./src/server/config/server');
webpack_config = require('./build/webpack/config.dev');

compiler = webpack(webpack_config);

devServer = new WebpackDevServer(compiler, {
  contentBase: 'http://localhost:' + server_config.dev_port
, publicPath: webpack_config.output.publicPath
, hot: true
, inline: true
, historyApiFallback: true
, quiet: false
, noInfo: false
, lazy: false
, stats: {
    colors: true
  , hash: false
  , version: false
  , chunks: false
  , children: false
  }
});

devServer.listen(server_config.dev_port, 'localhost', function (err) {
  if (err) {
    console.error(err);
  }

  console.log('🔥  Webpack development server is running on port %s', server_config.dev_port);
});
