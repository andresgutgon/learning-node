/* eslint no-var: 0, no-console: 0, prefer-template: 0, prefer-arrow-callback: 0 */
require('babel/register')();

var app
  , config
  , compiler
  , Express
  , webpack;

Express = require('express');
webpack = require('webpack');

config = require('./build/webpack/dev.config');
compiler = webpack(config.webpack);

app = new Express();

app.use(require('webpack-dev-middleware')(compiler, config.server.options));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(config.server.port, function onAppListening (error) {
  if (error) {
    console.error(error);
  } else {
    console.log('🔥  Webpack development server is running on port %s', config.server.port);
  }
});
