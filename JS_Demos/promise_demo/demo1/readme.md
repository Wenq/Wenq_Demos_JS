<!--
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2019-09-22 17:52:11
 * @LastEditors: wenq
 * @LastEditTime: 2019-09-22 20:33:30
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

