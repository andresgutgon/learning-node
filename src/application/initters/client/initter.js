import React from 'react';
import Router from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import middleware from 'redux-thunk';

import Auth from 'src/application/libs/authentication';
import analytics from 'src/application/libs/analytics';

export default (params) => {
  const reducer = combineReducers(params.reducers);
  const store = applyMiddleware(middleware)(createStore)(reducer, window.__DATA__);
  const history = new createBrowserHistory();
  const authAgent = new Auth(document, params.cookieDomain);
  const routes = params.routes({ store });
  let initialRender;

  if (params.google_analytics_id) {
    analytics.init(params.google_analytics_id);
  }

  initialRender = true;

  const appComponent = (Component, props) => {
    if (props.route.name === 'app') {
      analytics.sendPageview(props.location.pathname);
    }

    return (
      <Component
          store={store}
          authAgent={authAgent}
          initialRender={initialRender}
          {...props}
      />
    );
  };

  const AppContainer = (
    <Provider store={store}>
      {() => <Router history={history} children={routes} createElement={appComponent} />}
    </Provider>
  );

  const appDOMNode = document.getElementById('app');

  React.render(AppContainer, appDOMNode, () => {
    initialRender = false;
  });
};

