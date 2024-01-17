/*
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2019-09-26 22:12:21
 * @LastEditors: wenq
 * @LastEditTime: 2019-09-27 21:59:15
 */

//自己实现一个apply
Object.prototype.myapply=function(newContext){
    newContext = newContext||window;
    newContext.fn = this;
    let result = newContext.fn(arguments[1]); //Array.from(arguments)[1]  ??
    delete newContext.fn;
    return result;
}