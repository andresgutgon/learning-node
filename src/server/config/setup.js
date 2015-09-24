import path from 'path';

/**
 * Normalize a port into a number, string, or false.
 *
 * @param {String} env_port
 * @return {Boolean}
 */
function normalizePort (env_port) {
  const port = parseInt(env_port, 0);

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
 * @param {Object} config
 */
export default (app, config) => {
  global.__CLIENT__ = false;
  global.__SERVER__ = true;
  global.__DEV__ = config.env !== 'production';

  app.set('views', path.join(__dirname, '..', 'views'));
  app.set('view engine', 'jade');
  app.set('port', normalizePort(config.app_port));
};
