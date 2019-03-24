import { List, Map } from 'immutable';
import { action_names } from '../action/action';

export function reducer_actions(state = List(), action = Map()) {
    let { type } = action;
    switch (type) {
        case action_names.ADDTODOITEM:
            state = 0;
            break;
        case action_names.DELTODOITEM:
            state = 0;
            break;
        case action_names.RESETODOITEM:
            state = 0;
            break;
        default:
            console.warn(`暂不支持的action type: ${type}`);
            break;
    }
    return state;
}