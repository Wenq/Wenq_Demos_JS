/*
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2019-09-26 22:12:20
 * @LastEditors: wenq
 * @LastEditTime: 2019-09-27 21:56:09
 */

//自己写一个call实现
// 使用场景：绑定特定上下文+立即执行函数
//call使用方法： call(context, arg1, arg2...))
Object.prototype.myCall = function (newContext) {
    newContext = newContext || window;
    newContext.fun = this;
    let args = Array.from(arguments).slice(1); //将参数转array
    let result = newContext.fun(...args);
    delete newContext.fun; //删除多余挂接函数
    return result;
}