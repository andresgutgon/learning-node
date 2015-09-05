import express from 'express';
import compressor from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';

// Our middlewares
import logger_middleware from './log';

/**
 * Set up default middlewares
 *
 * @param {Object} app
 * @param {String} bundle
 */
export default (app, bundle) => {
  logger_middleware(app, bundle);

  // All the helpful middelwares
  // Thank you Open Source ¯\_(O)_/¯
  app.use(compressor());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, '../public')));

  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
};
