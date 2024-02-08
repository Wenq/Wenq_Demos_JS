const plugin_search_but = document.getElementById('plugin_search_but')
plugin_search_but.onclick = async function () {
    //TODO：在点击工具栏图标打开的插件界面中，再次点击后才打开新页签（实现方案一）
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
}