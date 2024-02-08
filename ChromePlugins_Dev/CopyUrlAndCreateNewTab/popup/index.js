const plugin_search_but = document.getElementById('plugin_search_but')
plugin_search_but.onclick = async function () {
    // 这是一个基本的 Chrome 扩展程序示例
    // 它会在工具栏中添加一个按钮，点击该按钮会打开一个新的标签页，并导航到当前活动标签页的 URL

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