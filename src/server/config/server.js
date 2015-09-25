/* eslint no-process-env: 0 */

import config from './api';
const ENV = process.env;

config.env = process.env.NODE_ENV || 'development';
config.bundle = 'app';
config.cookie_session = 'cookie_session';
config.cookie_session_secret = ENV.COOKIE_SESSION_SECRET || 'dummy-local-session-secret';
config.app_port = ENV.APP_PORT || 3500;
config.dev_port = 3001;
config.google_analytics_id = 'UA-CREATE-A-REAL-ONE';

export default config;

