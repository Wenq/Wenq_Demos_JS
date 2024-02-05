/*
    这个脚本文件在manifest.json文件中配置，并注入到了baidu.com网址
**/

console.log('this content form content/index.js') //这些log会在被注入网页的console输出
//这是baidu.com网址的相关（上下文）对象
console.log('document', document)
console.log('location', location)
console.log('window', window)

//创建页面函数
function createPage() {
    const page = $('<div id="cj_move_page"></div>')
    const h3 = $('<h3 id="cj_move_h3">来自浏览器注入脚本，可以drage me！</h3>')
    const but1 = $('<button id="cj_but1">消息通知</button>')
    const but2 = $('<button id="cj_but2">content 加载更多</button>')
    const but3 = $('<button id="cj_but3">service worker 加载</button>')
    page.append(h3)
    page.append(but1)
    page.append(but2)
    page.append(but3)
    $('body').append(page)
    //消息通知按钮事件
    $('#cj_but1').click(async (e) => {
        console.log('e', e, chrome)
        // 发送消息（向后台background/service worker）-- 注入脚本和后台通信
        chrome.runtime.sendMessage({ action: "fromContent" });
    })
    // content 加载更多按钮事件
    $('#cj_but2').click(async (e) => {
        //fetch：发起网络请求
        const response = await fetch("https://movie.douban.com/j/tv/recommend_groups")
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const allData = await response.json()
        console.log('content index allData', allData)
    })
    // service worker 加载按钮事件
    $('#cj_but3').click(async (e) => {
        console.log('e', e, chrome)
        chrome.runtime.sendMessage({ action: "fromContentFetch" });
    })
    //拖拽
    drag(cj_move_h3)
}
createPage()
//来自浏览器注入脚本，可以drage me！

//拖拽
function drag(ele) {
    let oldX, oldY, newX, newY
    ele.onmousedown = function (e) {
        if (!cj_move_page.style.right && !cj_move_page.style.bottom) {
            cj_move_page.style.right = 0
            cj_move_page.style.bottom = 0
        }
        oldX = e.clientX
        oldY = e.clientY
        document.onmousemove = function (e) {
            newX = e.clientX
            newY = e.clientY
            cj_move_page.style.right = parseInt(cj_move_page.style.right) - newX + oldX + 'px'
            cj_move_page.style.bottom = parseInt(cj_move_page.style.bottom) - newY + oldY + 'px'
            oldX = newX
            oldY = newY
        }
        document.onmouseup = function () {
            document.onmousemove = null
            document.onmouseup = null
        }
    }
}

//监听来自Popup的消息 - 1
chrome.runtime.onMessage.addListener((e) => {
    console.log('e(from content)', e)
})

//监听来自Popup的消息 - 2
chrome.runtime.onConnect.addListener((res) => {
    console.log('contentjs中的 chrome.runtime.onConnect：', res)
    if (res.name === 'fromPopup2Content') {
        res.onMessage.addListener(mess => {
            console.log('contentjs中的 res.onMessage.addListener：', mess)
            res.postMessage('哈哈哈，我是contentjs')
        })
    }
})