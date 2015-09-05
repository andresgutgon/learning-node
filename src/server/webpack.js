import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

import config from './config/server';
import webpack_config from '../../webpack.config.dev';

const server = new WebpackDevServer(
  webpack(webpack_config), {
    publicPath: config.output.publicPath
  , hot: true
  , stats: {
    colors: true
  }
});

server.listen(config.dev_port, 'localhost', () => {
  console.log(`webpack server running on port ${config.dev_port}`);
});
