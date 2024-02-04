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
            console.log('service_worker: notificationId-->(create)', notificationId)
        }
    );
}, 3000)

//监听message
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message.action === 'fromPopup') {
        chrome.notifications.create(
            {
                type: "basic",
                title: "Notifications Title",
                message: "Notifications message to display",
                iconUrl: "../icons/icon.png"
            },
            (notificationId) => {
                console.log('service_worker: notificationId-->(message)', notificationId)
            }
        );
    }
});