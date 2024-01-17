/*
 * @Descripttion: window.promise demo
 * @version: 
 * @Author: wenq
 * @Date: 2019-09-21 21:28:52
 * @LastEditors: wenq
 * @LastEditTime: 2019-09-27 20:44:20
 */
window.onload = () => {
    console.log('index.js loaded...')

    let btn1 = document.getElementById('btntest1');
    let btn2 = document.getElementById('btntest2');
    let btn3 = document.getElementById('btntest3');
    let btn4 = document.getElementById('btntest4');
    let btn5 = document.getElementById('btntest5');
    if (btn1) {
        btn1.addEventListener("click", (e) => {
            console.log('btn1 click');
            setTimeoutCallBack();
        })
    }
    if (btn2) {
        btn2.addEventListener("click", (e) => {
            console.log('btn2 click');
            ajaxCallBack();
        })

    }
    if (btn3) {
        btn3.addEventListener("click", (e) => {
            console.log('btn3 click');
            promiseCallBack()
        })
    }
    if (btn4) {
        btn4.addEventListener("click", (e) => {
            console.log('btn4 click');
            promiseSerial();
        })
    }
    if (btn5) {
        btn5.addEventListener("click", (e) => {
            console.log('btn5 click');
            promiseParallel();
        })
    }
}

(function abc(e) {
    console.log('js立即执行函数, before window.onload');
})()