var express
  , router;

express = require('express');
router = express.Router();

/*
 * GET users listing.
 */
router.get('/', function (req, res) {
  debugger;
  res.send('respond with a users resource');
});

module.exports = router;
