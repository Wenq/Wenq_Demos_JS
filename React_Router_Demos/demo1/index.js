import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App.jsx';

// import {routers, route, hashHistory} from 'react-router';
// ReactDOM.render(
//   <App/>,
//   document.body.appendChild(document.createElement('div'))
// );

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Content from './src/components/Content.jsx';
import Login from './src/components/Login.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Login}></IndexRoute>
      <Route path='/content' component={Content}></Route>
    </Route>
  </Router>
),document.body.appendChild(document.createElement('div')));