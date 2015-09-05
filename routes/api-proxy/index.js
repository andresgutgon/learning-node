var express
  , router;

express = require('express');
router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

router.use('/users', require('./users'));

module.exports = router;
