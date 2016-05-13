import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Store from './components/Store';
import Login from './components/Login';
import NotFound from './components/NotFound';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} />
    <Route path="/store/:userId" component={Store} />
    <Route path="*" component={NotFound} />
  </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
