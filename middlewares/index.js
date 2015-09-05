var bodyParser
  , cookieParser
  , express
  , logger
  , path;

express = require('express');
bodyParser = require('body-parser');
cookieParser = require('cookie-parser');
logger = require('morgan');
path = require('path');

/**
 * Set up default middlewares
 *
 * @param {Object} app
 */
module.exports = function (app) {
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, '../public')));
  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
};
