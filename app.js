var app
  , express
  , setUpMiddelwares
  , setUpErrorsMiddelware
  , setServerConfig
  , port
  , start_utils;

express = require('express');
setServerConfig = require('./config/setup')
setUpMiddelwares = require('./middlewares')
setUpErrorsMiddelware = require('./middlewares/errors');
start_utils = require('./utils/start');
app = express();

/**
 * Run common middelwares
 */
setServerConfig(app, process.env.PORT);

/**
 * Run common middelwares
 */
setUpMiddelwares(app);

/**
 * API proxy routes
 */
app.use(require('./routes/api-proxy'));

/**
 * Run errors middelwares
 */
setUpErrorsMiddelware(app);

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(app.get('port'));

app.on('listening', function () {
  start_utils.onListening(server);
});

app.on('error', start_utils.onListeningError);
