import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/App';

import store, { history } from './store';

import JSO from './common/JSO';

let jso = new JSO({
  providerID: 'weather',
  client_id: process.env['CLIENT_ID'] || '76e96e5a6fd79a58aa5f1e8ac121d67c88330f197fad1adac296abfef2f8c698',
  redirect_uri: process.env['REDIRECT_URI'] || 'http://localhost:3000',
  authorization: process.env['AUTHORIZATION_URI'] || 'http://localhost:3000/oauth/authorize',
  debug: false
})

jso.callback(null, null, 'weather');

jso.getToken(function(token) {
  window._token = token.access_token;
});

const a = (<html></html>);

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
), document.getElementsByClassName('app')[0]);
