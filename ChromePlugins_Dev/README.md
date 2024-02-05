# Chrome插件开发 2024/2/4

===========================
学习帖子：
https://zhuanlan.zhihu.com/p/678535335  --目前主要看这篇
https://www.zhihu.com/tardis/bd/art/438896257?source_id=1001

===========================
# 2024/2/5

chrome extension 开发，程序是声明式的，主要配置文件manifest.json。
其包含的程序模块包括：
1、可点击交互的Popup窗口、
2、后台程序background(service worker实现)、
3、注入脚本(content_scrtip)

chrome.runtime.sendMessage接口：
1、用于Popup和content_scritps向backgroud发送消息（通信）
2、backgroud中需要使用onMessage监听消息

## Popup、content、background的log输入窗口
1、Popup：在popup界面上鼠标右键“检查”，弹出的独立log界面（跟devtool一样）
2、content：当前浏览器页签的console，与当前网页共用
3、background：插件管理界面，点击插件数据记录的超链接文字“Service Worker”，弹出独立log界面

## 消息通信（总结）
Popup -> content:?
Popup -> background: ?
content -> Popup: ?
content -> background: ?
background -> Popup: ?
background -> content: ?

