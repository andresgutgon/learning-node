import webpack from 'webpack';
import path from 'path';

import server_config from '../../src/server/config/server';
import vendorDeps from './vendors';

const app_path = path.join(process.cwd(), 'src', 'client', 'app.js');

export default {
  entry: {
    app: [
      `webpack-dev-server/client?http://localhost:${server_config.dev_port}`
    , 'webpack/hot/only-dev-server'
    , app_path
    ]
  , vendor: vendorDeps.app
  }
, output: {
    path: path.join(process.cwd(), 'public', 'assets')
  , filename: '[name].js'
  , publicPath: `http://localhost:${server_config.dev_port}/assets`
  }
, resolve: {
    alias: {
      src: path.join(process.cwd(), 'src')
    , 'public': path.join(process.cwd(), 'public')
    }
  , extensions: ['', '.js', '.json', '.jsx', '.es6', '.babel']
  , modulesDirectories: ['node_modules', 'src']
  }
, devtool: '#eval-source-map'
, debug: true
, progress: true
, node: {
    fs: 'empty'
  }
, plugins: [
    new webpack.HotModuleReplacementPlugin()
  , new webpack.NoErrorsPlugin()
  , new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    , chunks: ['app']
    , filename: 'vendor.js'
    , minChunks: Infinity
    })
  , new webpack.DefinePlugin({
      __CLIENT__: true
    , __SERVER__: false
    , __DEV__: true
    , __DEVTOOLS__: true
    , 'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
, module: {
    noParse: /\.min\.js$/
  , loaders: [
      {
        test: /\.js?$/
      , loaders: ['react-hot', 'babel']
      , exclude: /node_modules/
      }
    , {
        test: /\.css$/
      , loader: 'style!css!autoprefixer?{browsers:["last 2 version"], cascade:false}'
      }
    ]
  }
};

