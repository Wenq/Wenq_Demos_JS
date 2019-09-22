/*
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2019-09-21 21:28:52
 * @LastEditors: wenq
 * @LastEditTime: 2019-09-22 15:21:26
 */
window.onload = () => {
    alert('index.js loaded...')

    let btn1 = document.getElementById('btntest1');
    let btn2 = document.getElementById('btntest2');
    if (btn1) {
        btn1.addEventListener("click", (e) => {
            alert('btn1 click')
        })
    }
    if (btn2) {
        btn2.addEventListener("click", (e) => {
            alert('btn2 click')
        })

    }
}

(function abc(e) {
    alert('js立即执行函数, before window.onload')
})()