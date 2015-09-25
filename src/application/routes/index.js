import React from 'react';
import { Route } from 'react-router';

import App from 'src/application/components/app';
import Home from 'src/application/components/home';

export default (context) => (
  <Route name='app' component={App}>
    <Route name='home' path='/' component={Home} />
  </Route>
);

