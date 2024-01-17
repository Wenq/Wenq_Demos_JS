/*
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2019-09-28 15:09:19
 * @LastEditors: wenq
 * @LastEditTime: 2019-09-28 15:21:52
 */

// 自己实现一个单例模式
let singleton = function(name){
    this.name = name;
    this.instance = null;
}
singleton.prototype.getName = function(){
    console.log(this.name);
}
singleton.getInstance = function(name){
    if(!this.instance){
        this.instance = new singleton(this.name);
    }
    return this.instance;
}

//test data
let a = singleton.getInstance('aa');
let b = singleton.getInstance('bb');
console.log(a==b); //true
