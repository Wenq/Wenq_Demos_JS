//每个action具体实现逻辑
import { List, Map } from 'immutable';
import { action_names } from '../action/action_names';
import { CONS_TODO_ITEM_LIST, CONS_DONE_ITEM_LIST } from '../env/constants';

export function reducer_actions(state = new Map(), action = new Map()) {
    let { type } = action;
    switch (type) {
        case action_names.ADDTODOITEM:
            state = addToDoItem(state, action.data);
            break;
        case action_names.DELTODOITEM:
            state = delToDoItem(state, action.data);
            break;
        case action_names.RESETODOITEM:
            state = resetToDoItem(state, action.data);
            break;
        case action_names.SWITCHTODOITEM:
            state = switchToDoItem(state, action.data);
            break;
        default:
            console.warn(`暂不支持的action type: ${type}`);
            break;
    }
    return state;
}

function addToDoItem(state, data) {
    if (data) {
        let newToDOItem = data;
        if (newToDOItem && newToDOItem.length > 0) {
            let todoItemList = state.get(CONS_TODO_ITEM_LIST);
            newToDOItem.forEach(item => {
                todoItemList = todoItemList.push(item);
            });
            state = state.setIn([CONS_TODO_ITEM_LIST], todoItemList);
        } else {
            console.warn(`newToDOItem is invalid, add item cancel`);
        }
    }
    return state;
}

function delToDoItem(state, data) {
    if (data) {
        let { id, isDone } = data;
        let doList = isDone ? state.get(CONS_DONE_ITEM_LIST) : state.get(CONS_TODO_ITEM_LIST);
        let targetIndex = doList.findIndex(item => { return id === item.get('id') });
        if (targetIndex > -1) {
            doList = doList.delete(targetIndex);
            state = state.setIn([isDone ? CONS_DONE_ITEM_LIST : CONS_TODO_ITEM_LIST], doList);
        }
    }
    return state;
}

function resetToDoItem(state, data) {
    state = state.setIn([CONS_TODO_ITEM_LIST], new List());
    state = state.setIn([CONS_DONE_ITEM_LIST], new List());
    return state;
}

function switchToDoItem(state, data) {
    if (data) {
        let { id, isDone } = data;
        if (isDone) {
            //由已办到待办
            let doneItemList = state.get(CONS_DONE_ITEM_LIST);
            let target = doneItemList.find(item => { return item.get('id') === id });
            if (target) {
                doneItemList = doneItemList.delete(doneItemList.indexOf(target));
                let todoItemList = state.get(CONS_TODO_ITEM_LIST);
                target = target.set('done', false);
                todoItemList = todoItemList.push(target);
                state = state.setIn([CONS_TODO_ITEM_LIST], todoItemList);
                state = state.setIn([CONS_DONE_ITEM_LIST], doneItemList);
            }
        } else {
            //由待办到已办
            let todoItemList = state.get(CONS_TODO_ITEM_LIST);
            let target = todoItemList.find(item => { return item.get('id') === id });
            if (target) {
                todoItemList = todoItemList.delete(todoItemList.indexOf(target));
                let doneItemList = state.get(CONS_DONE_ITEM_LIST);
                target = target.set('done', true);
                doneItemList = doneItemList.push(target);
                state = state.setIn([CONS_TODO_ITEM_LIST], todoItemList);
                state = state.setIn([CONS_DONE_ITEM_LIST], doneItemList);
            }
        }
    }
    return state;
}