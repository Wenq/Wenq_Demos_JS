const plugin_search_but = document.getElementById('plugin_search_but')
const plugin_search_inp = document.getElementById('plugin_search_inp')
plugin_search_but.onclick = async function () {
    alert('plugin_search_inp的值为：' + plugin_search_inp.value.trim())

    //chrome插件运行时对象：chrome
    console.log("chrome:", chrome)
    //发送消息给其他Popup（popup弹窗与后台background/service worker通信）
    chrome.runtime.sendMessage({
        action: "fromPopup",
        message: "Hello from Popup!"
    })

    //获取浏览器tab页签数据
    const [tab] = await chrome.tabs.query({
        url: ["https://www.baidu.com/*", "https://movie.douban.com/*"],
        active: true,
        currentWindow: true
    });
    console.log('tab页签数据：', tab)
    if (tab) {
        //使用 chrome.tabs.sendMessage 发送消息（向content发消息）
        chrome.tabs.sendMessage(tab.id, {
            action: 'fromPopup2Content-1'
        })

        //使用chrome.tabs.connect发送消息给content
        const connect = chrome.tabs.connect(tab.id, { name: 'fromPopup2Content-2' });
        console.log('connect', connect)
        connect.postMessage('这里是弹出框页面，你是谁？')
        connect.onMessage.addListener((mess) => {
            console.log(mess)
        })

        //（Popup）获取页面cookie
        const cookies = await chrome.cookies.getAll({ domain: '.douban.com' })
        console.log('popup cookies--->', cookies)
        const urlCookies = await chrome.cookies.getAll({ url: 'https://movie.douban.com/' })
        console.log("popup urlCookies", urlCookies);
    }

}