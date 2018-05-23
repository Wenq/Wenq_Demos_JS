/*一个项目有很多的reducers,我们要把他们整合到一起*/

import counter from './reducers/counter';
import userInfo from 'reducers/userInfo';

import {combineReducers} from "redux";

//自己写的combineReducers
// export default function combineReducers(state={}, action){
// 	return {
// 		counter: counter(state.counter, action),
// 		userInfo: userInfo(state.userInfo, action)
// 	}
// }


//redux自带的combineReducers
export default combineReducers({
		counter,
		userInfo
});