/* eslint prefer-template: 0 */

import webpackDevConfig from './webpack/dev.config';
import webpackProdConfig from './webpack/dev.config';
import webpackCallback from './webpack/callback';

const _client = './src/client';
const _public = './public';
const _assets = `${_client}/assets`;

export default (is_development) => {
  return {
    webpack: {
      config: is_development ? webpackDevConfig.webpack : webpackProdConfig
    , cb: webpackCallback
    }
  , server: {
      paths: ['./server.babel.js']
    }
  , images: {
      src: _assets + '/images/**'
    , dest: _public + '/images/'
    , imagemin: {}
    }
  , copy: {
      from: _assets
    , files: [
        ['/fonts']
      , ['/miscelaneous/favicon.ico', '/']
      , ['/miscelaneous/robots.txt', '/']
      ]
    , to: _public
    }
  , watch: {
      root: _assets
    , files: ['/fonts/**', '/images/**', '/json/**']
    }
  , clean: [_public]
  };
};

