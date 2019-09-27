/*
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2019-09-26 21:49:40
 * @LastEditors: wenq
 * @LastEditTime: 2019-09-27 20:39:14
 */

//自己写一个bind
Function.prototype.mybind = function (newContext) {
    let that = this;
    let fArgs = Array.prototype.slice.call(arguments, 1);
    let bindFun = function(){
        let lArgs = Array.prototype.slice.call(arguments);
        return that.apply(this instanceof bindFun? this:newContext, fArgs.concat(lArgs));
    }
    let fn = new function(){}; //?这一段还没理解透彻
    fn.prototype = this.prototype;
    bindFun.prototype = new fn();
    return bindFun;
}