/*
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2019-10-05 14:22:49
 * @LastEditors: wenq
 * @LastEditTime: 2019-10-06 12:14:55
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TopBar_ShuZiWeiBa from './components/mobile/topBar_ShuZiWeiBa'

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TopBar_ShuZiWeiBa />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
