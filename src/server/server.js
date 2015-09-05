import express from 'express';
import setServerConfig from './config/setup';
import useMiddelwares from './middlewares';
import useErrorsMiddelwares from './middlewares/errors';
import { onListening, onListeningError } from './utils/listening';
import apiProxy from './routes/api-proxy';

export default (config, react_application) => {
  const app = express();

  /**
   * Run common middelwares
   */
  setServerConfig(app, config.app_port);

  /**
   * Use common middelwares
   */
  useMiddelwares(app, config.bundle);

  /**
   * API proxy routes
   */
  app.use(apiProxy);

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

  app.on('listening', () => {});

  app.on('error', onListeningError);
};
