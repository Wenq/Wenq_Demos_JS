import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import Main from './Main';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { reducer_actions } from './reducer/reducer';
import { List, fromJS } from 'immutable';
import { action_names } from './action/action';

import { getStorage } from './utils/storageUtil';

let InitStateObj = {
    todoItemList: new List(),
    doneItemList: new List()
}
let todoItemList_data = getStorage('todoItemList');
let doneItemList_data = getStorage('doneItemList');
InitStateObj.todoItemList = fromJS(todoItemList_data) || new List();
InitStateObj.doneItemList = fromJS(doneItemList_data) || new List();

const store = createStore(reducer_actions, InitStateObj || new List());
store.subscribe((newState) => {
    console.log(`new State: ${newState.toJS()}`);
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
        value: State
    }
}
//UI to action(通过dispatch)
function mapDispatchToProps(dispatch) {
    return {
        onClick: (data) => dispatch({
            type: 'click',
            data
        }),
        addToDoItem: (newItem) => {
            dispatch({
                type: action_names.ADDTODOITEM,
                newItem
            });
        },
        delToDoItem: (item) => {
            dispatch({
                type: action_names.DELTODOITEM,
                item
            });
        },
        resetToDoItem: (data) => {
            dispatch({
                type: action_names.RESETODOITEM,
                data
            });
        }
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
