/**
 * Event listener for HTTP server "error" event.
 *
 * @param {String} error
 */
function onListeningError (error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
  case 'EACCES':
    throw new Error(`${bind} requires elevated privileges`);
  case 'EADDRINUSE':
    throw new Error(`${bind} is already in use`);
  default:
    throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 *
 * @param {Object} server
 */
function onListening (server) {
  const address = server.address();

  console.log(`🚀  Express server running on port ${address.port}`);
}

export default { onListeningError, onListening };
