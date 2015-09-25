/* eslint-disable */
import path from 'path';

const JS_REGEX = /\.js$|\.jsx$|\.es6$|\.babel$/;

export default {
  devtool: 'source-map'
, output: {
    path: path.join(process.cwd(), 'public', 'assets')
  , filename: '[name].js'
  , publicPath: '/assets/'
  }
, module: {
    noParse: /\.min\.js$/
  , loaders: []
  }
, node: {
    fs: 'empty'
  }
, resolve: {
    alias: {
      src: path.join(process.cwd(), 'src')
    , 'public': path.join(process.cwd(), 'public')
    }
  , extensions: ['', '.js', '.json', '.jsx', '.es6', '.babel']
  , modulesDirectories: ['node_modules', 'src']
  }
};
