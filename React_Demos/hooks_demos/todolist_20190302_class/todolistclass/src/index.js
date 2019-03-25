import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import Main from './Main';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { reducer_actions } from './reducer/reducer';
import { List } from 'immutable';

const store = createStore(reducer_actions, new List());

// ReactDOM.render(<App />, document.getElementById('root'));

//根组件Main
// ReactDOM.render(<Main style={{ 'padding': '10px' }} />, document.getElementById('root'));

//使用react-redux包裹
ReactDOM.render(<Provider store={store}>
    <Main style={{ 'padding': '10px' }} />>
</Provider>,document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
