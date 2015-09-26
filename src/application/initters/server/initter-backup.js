import React from 'react';
import Router from 'react-router';
//import Location from 'react-router/lib/Location';
import createLocation from 'history/lib/createLocation';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import middleware from 'redux-thunk';
import serialize from 'serialize-javascript';
import jade from 'jade';

import Auth from 'src/application/libs/authentication';
import populateState from 'src/application/libs/populate-state';
import apiCall from 'src/application/libs/api-call';

export default async (req, res, next, params) => {
  const combined_reducers = combineReducers(params.reducers);
  const store = applyMiddleware(middleware)(createStore)(combined_reducers);
  //const location = new Location(req.path, req.query);
  const location = new createLocation(req.path, req.query);
  const auth_agent = new Auth(req, params.cookieDomain);
  const app_host = `${req.protocol}://${req.headers.host}`;

  // If logged In we check this is true
  // and pupulate store with current_user
  if (auth_agent.isLoggedIn()) {
    await apiCall({
      method: 'GET'
    , path: '/users/1'
    , auth: auth_agent.getAuthHeaders()
    })
    .then(() => {
      return (
        store.dispatch(params.AuthActions.setLoggedInState(auth_agent.getLogin()))
      );
    })
    .catch((response) => {
      return (
        response.status === 401 ? auth_agent.logout() : false
      );
    });
  }

  const routes = params.routes({ store });

  Router.run(routes, location, async (error, initialState, transition) => {
    if (error) {
      const err = new Error();

      err.status = error.status || 500;
      return next(err);
    }

    if (transition.isCancelled) {
      return res.redirect(302, transition.redirectInfo.pathname);
    }

    try {
      await populateState(initialState.components, {
        auth: auth_agent.getAuthHeaders()
      , dispatch: store.dispatch
      , location: initialState.location
      , params: initialState.params
      });

      const state = store.getState();

      const { locals } = params;

      locals.head = React.renderToStaticMarkup(
        React.createElement(params.head, {
          state
        , app_host
        , route: initialState.branch[1].name
        , location: initialState.location
        , params: initialState.params
        , css_asset: locals.css_asset
        })
      );

      locals.body = React.renderToString(
        <Provider store={store}>
          {() => <Router location={location} {...initialState} />}
        </Provider>
      );

      const chunks = __DEV__ ? {} : require('public/assets/chunk-manifest.json');

      locals.chunks = serialize(chunks);
      locals.data = serialize(state);

      const layout = `${process.cwd()}/src/server/views/react-server-layout.jade`;
      const html = jade.compileFile(layout, { pretty: false })(locals);

      res.send(html);
    } catch (err) {
      res.status(500).send(err.stack);
    }
  });
};

