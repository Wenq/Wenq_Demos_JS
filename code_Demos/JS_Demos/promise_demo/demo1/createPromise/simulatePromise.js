/*
 * @Descripttion: 模拟pomise demo
 * @version: 
 * @Author: wenq
 * @Date: 2019-09-22 21:01:21
 * @LastEditors: wenq
 * @LastEditTime: 2019-09-24 23:12:45
 */
// window.onload=()=>{
//     let btn001 = document.getElementById('btntest001');
//     if (btn001) {
//         btn001.addEventListener("click", (e) => {
//             console.log('btn001 click');
//         })
//     }
// }

window.addEventListener('load', ()=>{
    let btn001 = document.getElementById('btntest001');
    if (btn001) {
        btn001.addEventListener("click", (e) => {
            console.log('btn001 click');
        })
    }
})

//setTimeout callback
function setTimeoutCallBack() {
    console.log('setTimeout callback start...');
    let callbckFun = () => {
        console.log('setTimeout callback done!');
    }
    setTimeout(callbckFun, 1000);
    console.log('setTimeout callback end...');
}

//ajax callback
function ajaxCallBack() {
    //no third api to support 'ajax'
    console.log(`ajax callback`)
    // $.ajax({...})
}

//promise example
function promiseCallBack() {
    function  (resolve, reject) {
        let result = Math.random(2);
        console.log('promise simulate result: ' + result);
        setTimeout(() => {
            if (result < 1) {
                resolve && resolve('200 ok!');
            } else {
                reject && reject('call reject!');
            }
        }, 1000)
    }
    new Promise(promiseDoFun)  //此时已经执行
    new Promise(promiseDoFun).then((success) => {
        console.log('promise do success: ' + success);
    }).catch((error) => {
        console.log('promise do faild: ' + error)
    })
}

//promise串行多个任务(任一任务失败，后面任务都不再执行))
function promiseSerial() {
    let p1 = new Promise((resolve, reject) => {

    })
    let p2 = new Promise((resolve, reject) => {

    })
    let p3 = new Promise((resolve, reject) => {

    })
    let p4 = new Promise((resolve, reject) => {

    })
    new Promise(p1).then(p2).then(p3).then(p4).catch((error) => {

    })
}

//promise并行多个任务
function promiseParallel() {
    let p1 = new Promise((resolve, reject) => {

    })
    let p2 = new Promise((resolve, reject) => {

    })
    //多个任务结果都会返回
    Promise.all([p1, p2]).then((success) => {

    })
    //任意一个结果返回，则其他抛弃
    Promise.race([p1, p2]).then((success) => {

    })
}

//promise api 使用例子
function promiseInvokeDemo1(){
    //创建promise实例，不会执行
    let promiseObj = new Promise(function(resolve, reject){
        if(true){
            resolve("promise success")
        }else{
            reject("promise fail")
        }
    });
    //执行promise
    promiseObj.then(function(success){
        console.log("promise invoke success..." + success)
    },function(error){
        console.log("promise invoke fail..." + error)
    })
}