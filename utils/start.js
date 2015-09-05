var debug
  , utils;

debug = require('debug')('learning-node:server');
utils = {};

/**
 * Event listener for HTTP server "error" event.
 *
 * @param {String} error
 */
utils.onListeningError = function (error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind;

  bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
  case 'EACCES':
    throw new Error(bind + ' requires elevated privileges');
  case 'EADDRINUSE':
    throw new Error(bind + ' is already in use');
  default:
    throw error;
  }
};

/**
 * Event listener for HTTP server "listening" event.
 *
 * @param {Object} server
 */
utils.onListening = function (server) {
  var addr
    , bind;

  addr = server.address();
  bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log('Express server running on port ' + addr.port);
};

module.exports = utils;
