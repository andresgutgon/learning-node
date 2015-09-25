import express from 'express';
import Request from 'request';

import config from 'src/server/config/server';
const router = express.Router();

/*
 * POST to /signups
 *
 * @param {Object} request
 */
router.post('/*', function (request) {
  Request.post({
    url: `${config.api_base_url}${req.path}`
  , body: request.body
  , headers: {
      Accept: `application/vnd.${config.api_name}.${config.api_version}+json`
    }
  , json: true
  }
, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return response.status(response.statusCode).send(body);
    }

    request.session.user_id = body;
    response.sendStatus(200);
  });
});

export default router;
