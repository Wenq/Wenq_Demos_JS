/*redux测试用例*/

/*
结论：
redux和react没关系，虽说他俩能合作.

下列测试用例执行逻辑：
	1.调用store.dispatch(action)提交action。
	2.redux store调用传入的reducer函数。把当前的state和action传进去。
	3.根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树。
	4.Redux store 保存了根 reducer 返回的完整 state 树。
*/

import {increment, decrement, reset} from './actions/counter';
import store from './store';

//打印初始状态
console.log(store.getState());

//每次state更新时打印log
//注意subscribe()返回一个函数用来注销监听器
let unsubscribe = store.subscribe(()=>{
	console.log(store.getState());
});

//发起一系列action
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

//停止监听state更新
unsubscribe();


/*
测试文件执行方法：
在测试文件所在目录执行如下指令：
	webpack testRedux.js build.js
	node build.js
*/