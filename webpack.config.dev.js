import path from 'path';
import webpack from 'webpack';

module.exports = {
  devtool: 'inline-source-map'
, entry: [
    'webpack-dev-server/client?http://localhost:8080'
  , 'webpack/hot/only-dev-server'
  , './src/client/entry'
  ]
, output: {
    path: path.join(__dirname, '/public/js/')
  , filename: 'app.js'
  , publicPath: 'http://localhost:8080/js/'
  }
, plugins: [
    new webpack.HotModuleReplacementPlugin()
  , new webpack.NoErrorsPlugin()
  ]
, resolve: {
    extensions: ['', '.js']
  }
, module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader?experimental'], exclude: /node_modules/ }
    ]
  }
};
