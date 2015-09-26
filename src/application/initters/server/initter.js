import React from 'react';
import createLocation from 'history/lib/createLocation'
import { RoutingContext, match } from 'react-router'

export default (req, res, next, params) => {
  const location = createLocation(req.url)
  const routes = params.routes();

  match({ routes, location }, (error, redirectLocation, renderProps) => {

    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search)
    } else if (error) {
      console.log('maaaaaaaaaaaaaaall')
      res.send(500, error.message)
    } else if (renderProps == null) {
      res.send(404, 'Not found')
    } else {
      res.send(React.renderToString(<RoutingContext {...renderProps}/>))
    }
  });
};
