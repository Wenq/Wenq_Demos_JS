<!--
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2019-09-22 17:52:11
 * @LastEditors: wenq
 * @LastEditTime: 2019-09-23 22:05:46
 -->
# promise基础

[promise信息传送门](https://www.liaoxuefeng.com/wiki/1022910821149312/1023024413276544)

## 特点
> * 链式操作
> * window.promise浏览器原生支持
> * ES6标准支持、各种开源库都有实现
> * 只关心自己的逻辑，不关心success/fail的结果处理
> * 串行执行若干（多个）异步任务，一个任务失败则不再继续下一个任务
```
    new Promise(xxx).then(p1).then(p2).then(...).catch()
```
> * Promise还可以并行执行异步任务
```
    Promise.all([p1,p2])
    Promise.race([p1,p2])）
```

## 检测浏览器是否支持promise
```
    use 'strict'
    new Promise(function(){}) //如果支持，则这一句不会报错，下一句正常执行;否则报错中断
    console.log('支持Promise') 
```

### 注意
> * 1.new Promsie() 会立即执行

### 优点
> * 解决回调地狱问题

### 缺点
> * 无法取消 Promise，一旦新建它就会立即执行，无法中途取消
> * 如果不设置回调函数，Promise 内部抛出的错误不会反应到外部
> * 当处于 Pending 状态时，无法得知目前进展到哪一个阶段

