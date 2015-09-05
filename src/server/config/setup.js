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
 * @param {Strict} env_port
 */
export default (app, env_port) => {
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'jade');
  app.set('port', normalizePort(env_port));
};
