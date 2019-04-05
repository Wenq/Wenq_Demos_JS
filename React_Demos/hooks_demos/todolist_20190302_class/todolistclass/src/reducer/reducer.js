//每个action具体实现逻辑
import { List, Map } from 'immutable';
import { action_names } from '../action/action';

export function reducer_actions(state = new Map(), action = new Map()) {
    let { type } = action;
    switch (type) {
        case action_names.ADDTODOITEM:
            let newToDOItem = action.data;
            if (newToDOItem) {
                let todoItemList = state.get('todoItemList');
                todoItemList = todoItemList.push(newToDOItem);
                state = state.setIn(['todoItemList'], todoItemList);
            } else {
                console.warn(`newToDOItem is invalid, add item cancel`);
            }
            break;
        case action_names.DELTODOITEM:
            let { id, isDone } = action.data;
            let doList = isDone ? state.get('doneItemList') : state.get('todoItemList');
            let targetIndex = doList.findIndex(item => { return id === item.get('id') });
            if (targetIndex > -1) {
                doList = doList.delete(targetIndex);
                state = state.setIn([isDone ? 'doneItemList' : 'todoItemList'], doList);
            }
            break;
        case action_names.RESETODOITEM:
            state = state.setIn(['todoItemList'], new List());
            state = state.setIn(['doneItemList'], new List());
            break;
        case action_names.SWITCHTODOITEM:
            //todo something
            break;
        default:
            console.warn(`暂不支持的action type: ${type}`);
            break;
    }
    return state;
}