import webpack from 'webpack';
import path from 'path';

import server_config from '../../src/server/config/server';
import base_config from './base.config';
import vendorDeps from './vendors';

const app_path = path.join(process.cwd(), 'src', 'client', 'app.js');
const public_path = `http://localhost:${server_config.dev_port}/assets`;

const config = Object.assign({}, base_config, {
  devtool: '#eval-source-map'
, entry: {
    app: [
      `webpack-hot-middleware/client?path=http://localhost:${server_config.dev_port}/__webpack_hmr`
    , app_path
    ]
  , vendor: vendorDeps.app
  }
, ouput: {
    ...base_config.output
  , publicPath: public_path
  }
, debug: true
, progress: true
});

config.module.loaders = config.module.loaders.concat([
  {
    test: /\.js$/
  , loader: 'babel'
  , exclude: /node_modules/
  , query: {
      plugins: ['react-transform']
    , extra: {
        'react-transform': {
          transforms: [
            {
              transform: 'react-transform-hmr'
            , imports: ['react']
            , locals: ['module']
            }
          , {
              transform: 'react-transform-catch-errors'
            , imports: ['react', 'redbox-react']
            }
          ]
        }
      }
    }
  }
, {
    test: /\.css$/
  , loader: 'style!css!autoprefixer?{browsers:["last 2 version"], cascade:false}'
  }
]);

config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin()
, new webpack.HotModuleReplacementPlugin()
, new webpack.NoErrorsPlugin()
, new webpack.DefinePlugin({
    __CLIENT__: true
  , __SERVER__: false
  , __DEV__: true
  , __DEVTOOLS__: true
  , 'process.env': {
    BROWSER: JSON.stringify(true)
  , NODE_ENV: JSON.stringify('development')
  }
})
, new webpack.optimize.DedupePlugin()
];

export default {
  webpack: config
, server: {
    port: server_config.dev_port
  , contentBase: 'http://localhost:' + config.dev_port
  , options: {
      publicPath: config.ouput.publicPath
    , hot: true
    , quiet: false
    , noInfo: false
    , inline: true
    , lazy: false
    , headers: {
        'Access-Control-Allow-Origin': '*'
      }
    , stats: {
        assets: true
      , colors: true
      , version: false
      , hash: false
      , timings: true
      , chunks: false
      , chunkModules: false
      }
    }
  }
};
