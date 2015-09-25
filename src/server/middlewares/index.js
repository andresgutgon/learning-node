import express from 'express';
import compressor from 'compression';
import BodyParser from 'body-parser';
import CookieParser from 'cookie-parser';
import CookieSession from 'cookie-session';
import path from 'path';

// Our middlewares
import logger_middleware from './log';

/**
 * Set up default these helpful middelwares
 * Thank you Open Source ¯\_(O)_/¯
 *
 * @param {Object} app
 * @param {Object} config
 */
export default (app, config) => {
  logger_middleware(app, config.bundle);

  app.use(compressor());
  app.use(BodyParser.json());
  app.use(BodyParser.urlencoded({ extended: false }));

  app.use(CookieParser());
  app.use(CookieSession({
    name: config.cookie_session
  , keys: [config.cookie_session_secret]
  }));

  app.use(express.static(path.join(__dirname, '../../public')));
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
};
