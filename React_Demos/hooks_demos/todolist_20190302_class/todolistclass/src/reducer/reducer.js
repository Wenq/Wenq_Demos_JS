import { List, Map } from 'immutable';

export function reducer_actions(state = List(), action = Map()) {
    let { type } = action;
    switch (type) {
        case 'xx':
            state = 0;
            break;
        default:
            console.warn(`暂不支持的action type: ${type}`);
            break;
    }
    return state;
}