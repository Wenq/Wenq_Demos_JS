//TODO：后台任务代码

// import "./module_1"
// import "./module_2"

//后台进程，定时发送消息
setInterval(() => {
    //alert("我是来自background service worker")
    chrome.notifications.create(
        {
            type: "basic",
            title: "Notifications Title xxx",
            message: "Notifications message to display xxx~~~",
            iconUrl: "../icons/icon.png"
        },
        (notificationId) => {
            console.log('service_worker: notificationId-->(setInterval)', notificationId)
        }
    );
}, 3000)

//监听message
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    //来自popup弹窗的消息
    if (message.action === 'fromPopup') {
        chrome.notifications.create(
            {
                type: "basic",
                title: "Notifications Title",
                message: "Notifications message to display",
                iconUrl: "../icons/icon.png"
            },
            (notificationId) => {
                console.log('service_worker: notificationId-->(fromPopup)', notificationId)
            }
        );
    } else if (message.action === "fromContent") {
        //来自content_scripts脚本的消息
        chrome.notifications.create(
            {
                type: "basic",
                title: "Notifications Title",
                message: "Notifications message to display",
                iconUrl: "../icons/icon.png"
            },
            (notificationId) => {
                console.log('notificationId-->(fromContent)', notificationId)
            }
        );
    } else if (message.action === "fromContentFetch") {
        //发起网络请求
        const response = await fetch("https://movie.douban.com/j/tv/recommend_groups")
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const allData = await response.json()
        console.log('service worker allData', allData)
    }
});