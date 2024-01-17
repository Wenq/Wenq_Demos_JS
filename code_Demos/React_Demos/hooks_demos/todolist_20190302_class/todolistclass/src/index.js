import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import Main from './Main';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { reducer_actions } from './reducer/reducer_actions';
import { mapDispatchToProps } from './dispatchs/dispatch_actions';
import { Map } from 'immutable';
import { loadInitData } from './utils/storageUtil';

let InitStateObj = loadInitData() || new Map();
const store = createStore(reducer_actions, InitStateObj);
store.subscribe((newState) => {
    console.log(`new State: ${JSON.stringify(newState)}`);
});

// ReactDOM.render(<App />, document.getElementById('root'));

//根组件Main
// ReactDOM.render(<Main style={{ 'padding': '10px' }} />, document.getElementById('root'));

//用Provider组件通过context向子组件传递store
// ReactDOM.render(<Provider store={store}>
//     <Main style={{ 'padding': '10px' }} />>
// </Provider>,document.getElementById('root'));

//state to UI
function mapStateToProps(State) {
    return {
        data: State //props传递的数据store
    }
}

//生成容器类组件MainApp
let MainApp = connect(mapStateToProps, mapDispatchToProps)(Main);
//Provider,connect
ReactDOM.render(<Provider store={store}>
    <MainApp style={{ 'padding': '10px' }} />>
</Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
