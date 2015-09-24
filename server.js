import express from 'express';
import setServerConfig from './src/server/config/setup';
import useMiddelwares from './src/server/middlewares';
import useErrorsMiddelwares from './src/server/middlewares/errors';
import noCacheMiddelware from './src/server/middlewares/no-cache';
import { onListening, onListeningError } from './src/server/utils/listening';
import apiProxy from './src/server/routes/api-proxy';

export default (react_application_initter, config) => {
  const app = express();

  /**
   * Run common middelwares
   */
  setServerConfig(app, config);

  /**
   * Use common middelwares
   */
  useMiddelwares(app, config.bundle);

  /**
   * API proxy routes
   */
  app.use(apiProxy);

  /**
   * React application entry point on the server
   */
  app.use('/', noCacheMiddelware, react_application_initter);

  /**
   * Run errors middelwares
   */
  app.use(useErrorsMiddelwares);

  /**
   * Listen on provided port, on all network interfaces.
   */
  const server = app.listen(app.get('port'), () => {
    onListening(server);
  });

  app.on('error', onListeningError);
};
