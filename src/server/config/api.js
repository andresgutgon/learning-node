/* eslint no-process-env: 0 */

const config = {};
const ENV = process.env;

config.api_name = 'katuma';
config.user_header = ENV.X_API_USER_HEADER || 'X-katuma-user-id';
config.api_version = 'v1';
config.api_protocol = ENV.API_PROTOCOL || 'http';
config.api_port = ENV.API_PORT || '3000';
config.api_host = ENV.API_HOST || 'localhost';
config.api_path = `/api/${config.api_version}`;
config.api_base_url = `${config.api_protocol}://${config.api_host}:${config.api_port}${config.api_path}`;

export default config;
