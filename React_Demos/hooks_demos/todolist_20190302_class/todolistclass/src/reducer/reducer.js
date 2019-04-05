//每个action具体实现逻辑
import { List, Map } from 'immutable';
import { action_names } from '../action/action';

export function reducer_actions(state = new Map(), action = new Map()) {
    let { type } = action;
    switch (type) {
        case action_names.ADDTODOITEM:
            if(action.data){
                let newToDOItem = action.data;
                if (newToDOItem&&newToDOItem.length>0) {
                    let todoItemList = state.get('todoItemList');
                    newToDOItem.forEach(item=>{
                        todoItemList = todoItemList.push(item);
                    });
                    state = state.setIn(['todoItemList'], todoItemList);
                } else {
                    console.warn(`newToDOItem is invalid, add item cancel`);
                }
            }
            break;
        case action_names.DELTODOITEM:
            if(action.data){
                let { id, isDone } = action.data;
                let doList = isDone ? state.get('doneItemList') : state.get('todoItemList');
                let targetIndex = doList.findIndex(item => { return id === item.get('id') });
                if (targetIndex > -1) {
                    doList = doList.delete(targetIndex);
                    state = state.setIn([isDone ? 'doneItemList' : 'todoItemList'], doList);
                }
            }
            break;
        case action_names.RESETODOITEM:
            state = state.setIn(['todoItemList'], new List());
            state = state.setIn(['doneItemList'], new List());
            break;
        case action_names.SWITCHTODOITEM:
            if(action.data){
                let { id, isDone } = action.data;
                if (isDone) {
                    //由已办到待办
                    let doneItemList = state.get('doneItemList');
                    let target = doneItemList.find(item => { return item.get('id') === id });
                    if (target) {
                        doneItemList = doneItemList.delete(doneItemList.indexOf(target));
                        let todoItemList = state.get('todoItemList');
                        target = target.set('done', false);
                        todoItemList = todoItemList.push(target);
                        state = state.setIn(['todoItemList'], todoItemList);
                        state = state.setIn(['doneItemList'], doneItemList);
                    }
                } else {
                    //由待办到已办
                    let todoItemList = state.get('todoItemList');
                    let target = todoItemList.find(item => { return item.get('id') === id });
                    if (target) {
                        todoItemList = todoItemList.delete(todoItemList.indexOf(target));
                        let doneItemList = state.get('doneItemList');
                        target = target.set('done', true);
                        doneItemList = doneItemList.push(target);
                        state = state.setIn(['todoItemList'], todoItemList);
                        state = state.setIn(['doneItemList'], doneItemList);
                    }
                }
            }
            break;
        default:
            console.warn(`暂不支持的action type: ${type}`);
            break;
    }
    return state;
}