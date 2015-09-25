import express from 'express';
import Request from 'request';

import config from 'src/server/config/server';
const router = express.Router();

/*
 * Handle all request to backend API /api/*
 *
 * @param {Object} request
 * @param {Object} response
 */
router.all('/*', function (request) {
  if (!request.session.user_id) {
    return response.sendStatus(403);
  }

  Request({
    method: req.method
  , url: `${config.api_base_url}${req.path}`
  , body: req.body
  , headers: {
      Accept: `application/vnd.${config.api_name}.${config.api_version}+json`
    , [config.user_header]: req.session.user_id
    }
  , json: true
  }
, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.status(response.statusCode).send(body);
    }

    // Respond with Rails response
    res.status(response.statusCode).send(body);
  });
});

export default router;
