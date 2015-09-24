import React from 'react';
import { Route } from 'react-router';

import App from 'src/application/components/app.js';
import Home from 'src/application/components/home';

export default (context) => (
  <Route name='app' component={App}>
    <Route name='landing' path='/' component={Home} />
  </Route>
);

