import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import Main from './Main';
import { createStore } from 'redux';
import { reducer_actions } from './reducer/reducer';

const store = createStore(reducer_actions);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Main style={{ 'padding': '10px' }} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
