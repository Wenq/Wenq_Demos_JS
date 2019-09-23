/*
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2019-09-22 21:01:21
 * @LastEditors: wenq
 * @LastEditTime: 2019-09-22 21:04:22
 */
window.onload=()=>{
    let btn001 = document.getElementById('btntest001');
    if (btn001) {
        btn001.addEventListener("click", (e) => {
            alert('btn001 click');
            
        })
    }
}