const plugin_search_but = document.getElementById('plugin_search_but')
const plugin_search_inp = document.getElementById('plugin_search_inp')
plugin_search_but.onclick = function () {
    alert('plugin_search_inp的值为：' + plugin_search_inp.value.trim())
    
    //chrome插件运行时对象：chrome
    console.log("chrome:", chrome)
    //发送消息给其他Popup（popup弹窗与后台background/service worker通信）
    chrome.runtime.sendMessage({
        action : "fromPopup",
        message : "Hello from Popup!"
    })
}