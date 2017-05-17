import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/App';

import store, { history } from './store';

import JSO from './common/JSO';

let jso = new JSO({
  providerID: 'weather',
  client_id: 'f046d279e2018aed4b0686c677ad8034667c4116f38cde220d4b784cb31c1fb2',
  redirect_uri: 'http://localhost:3000',
  authorization: 'http://localhost:3000/oauth/authorize',
  debug: false
})

jso.callback(null, null, 'weather');

jso.getToken(function(token) {
  window._token = token.access_token;
});

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementsByClassName('app')[0]);
