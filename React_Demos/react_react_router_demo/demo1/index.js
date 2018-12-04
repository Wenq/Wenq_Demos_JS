import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App.jsx';
import {routers, route, hashHistory} from 'react-router';


ReactDOM.render(
  <App/>,
  document.body.appendChild(document.createElement('div'))
);