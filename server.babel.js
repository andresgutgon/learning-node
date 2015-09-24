/* eslint no-var: 0, no-process-env: 0 */
var babelRegister
  , config
  , isProduction
  , react_application_initter;

babelRegister = require('babel/register');
isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  babelRegister();
} else {
  // In development enable
  // source maps to be able to debug node server code
  babelRegister({
    sourceMap: 'inline'
  });
}

react_application_initter = require('./src/application/initters/server');
config = require('./src/server/config/server');

/**
 * Here babel is doing their magic so we can use ES6
 * inside our node code. babel/register
 */
require('./server')(react_application_initter, config);
