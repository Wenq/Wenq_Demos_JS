// chrome.browserAction.onClicked.addListener(function (tab) {
//     //打开指定页面
//     chrome.tabs.create({
//         index: tab.index + 1,
//         url: tab.url
//     })
// });

//疑问：在backgroud模块里监听，是否需要主动卸载事件？否则是否存在内存泄漏？
chrome.action.onClicked.addListener(async function () {
    // TODO: 在后台程序初始化监听，然后等待点击触发打开新页签（实现方法二）
    // 获取当前窗口的tab
    const tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });
    if (tabs && tabs.length > 0) {
        // 创建一个新的标签页，并导航到当前活动标签页的URL
        chrome.tabs.create({
            index: tabs[0].index + 1,
            url: tabs[0].url
        });
    }
});