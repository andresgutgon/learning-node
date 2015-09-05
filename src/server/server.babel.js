/* eslint no-var: 0 */
require('babel/register')({
  sourceMap: 'inline'
});

//var initter = require('./app/bundles/app/initters/server')
  //, config = require('./config/server');
var config;

config = require('./config/server');

/**
 * Here babel is doing their magic so we can use ES6
 * inside our node code. babel/register
 */
//require('./server')(initter, config);

require('./server')(config);

