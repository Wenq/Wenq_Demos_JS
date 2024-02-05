# Chrome插件开发 2024/2/4

===========================
学习帖子：
https://zhuanlan.zhihu.com/p/678535335  --目前主要看这篇
https://www.zhihu.com/tardis/bd/art/438896257?source_id=1001

===========================
# 2024/2/5

`chrome extension 开发，程序是声明式的，主要配置文件manifest.json。`
其包含的程序模块包括：
【主要】
1、可点击交互的Popup窗口、
2、后台程序background(service worker实现)、
3、注入脚本(content_scrtip)
【其他】
1、权限设置、特性功能(网路请求、cookie操作等)

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

## 发送与监听消息的几种方式(总结)
1、chrome.runtime.sendMessasge / chrome.runtime.onMessage.addListener
2、chrome.tabs.sendMessage / ?
3、chrome.runtime.sendConnnect / chrome.runtime.onConnect.addListener

# 内容目录（总结）
1、extension插件介绍（包括开发语言、使用场景、功能范围等）
2、插件术语（概念介绍）
    1.manifest.json文件
    2.extension发布（及相关字段说明）
    3.Action/Popup介绍
    4.background/Service Worker（后台程序）介绍
    5.Content Scripts（注入脚本）介绍
3、实操新建extension
    1.新建manifest.json
    2.添加action/popup、icon
    3.添加background/Service Worker
    4.Popup与background通信
    5.添加内容脚本注入（content Script）
    6.Content与background通信（tab权限、获取tab数据、。。。）
    7.Fetch网络请求
    8.Cookie获取（Popup/Content/background）
    9.打包extension、发布到应用商店

# chrome extension 开发者注册
https://chrome.google.com/webstore/devconsole/register
（需要google账号 + 5美元注册费）
