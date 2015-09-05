/* eslint no-process-env: 0 */

import config from './api';

config.env = process.env.NODE_ENV || 'development';
config.bundle = 'app';
config.app_port = process.env.APP_PORT || 3500;
config.dev_port = 3001;
config.google_analytics_id = 'UA-CREATE-A-REAL-ONE';

export default config;

