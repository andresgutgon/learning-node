var path
  , server_config

path = require('path');
server_config = require('../config/server');

/**
 * Normalize a port into a number, string, or false.
 *
 * @param {String} env_port
 * @return {Boolean}
 */
function normalizePort (env_port) {
  var port;

  port = parseInt(env_port || server_config.port, 0);

  if (isNaN(port)) {
    return env_port;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

/**
 * Configure server with defaults
 *
 * @param {Object} app
 * @param {Strict} env_port
 */
module.exports = function (app, env_port) {
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'jade');
  app.set('port', normalizePort(env_port));
};
