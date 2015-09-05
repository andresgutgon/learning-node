/**
 * Set up errors middelware for development/production
 *
 * @param {Object} app
 */
module.exports = function (app) {
  if (app.get('env') === 'development') {
    app.use(function (err, req, res) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message
      , error: err
      });
    });
  }

  // production error handler
  app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message
    , error: {}
    });
  });
};
