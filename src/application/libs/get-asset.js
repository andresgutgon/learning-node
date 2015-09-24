import config from 'src/server/config/server';

export default (asset, type) => {
  if (__DEV__) {
    return `http://localhost:${config.dev_port}/assets/${asset}.${type}`;
  }

  const assets = require('public/assets/manifest.json');

  return `/assets/${assets[`${asset}.${type}`]}`;
};

