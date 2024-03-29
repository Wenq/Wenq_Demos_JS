# Chrome插件开发 2024/2/4

===========================

# 学习帖子：
https://zhuanlan.zhihu.com/p/678535335  --目前主要看这篇（100%）
https://www.zhihu.com/tardis/bd/art/438896257?source_id=1001 --（5%）
https://www.xjx100.cn/news/1505781.html?action=onClick --该篇更加详细，注重实操（10%）

# 2024/2/20 需要的软件或基础知识
需要的软件：无（手搓manifest.json文件）
开发工具：vscode或其他IDE都可以
开发语言：html/js/css
插件打包工具：chrome浏览器的extension管理界面自带打包功能
api：chrome支持的功能对象，api等（各种模块）
其他：可安装第三方包参与开发（比如使用npm安装）？？
发布：chrome官方账号、extension商店管理上传

# 2024/2/5 开发知识
Chrome插件是一个用`Web技术`开发、用来增强浏览器功能的软件，它其实就是一个由`HTML、CSS、JS、图片等`资源组成的一个`.crx后缀`的压缩包.

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

# 内容目录（总结，对应帖子 - https://zhuanlan.zhihu.com/p/678535335）
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
（需要google账号 + 5美元注册费），需要`科学上网`才能打开在线chrome extension商店

#  2024/2/8 学习进度
当前熟练度：
1、目前了解了chrome extension开发的基础知识，做了自己的demo验证。
2、对开发流程有了了解，但各模块的使用还需要进一步学习加强（`算入门了吧`）。

# 2024/2/21 chrome extension开发流程
1、手搓manifest.json文件，做相应配置
2、基于如上配置文件及其入口编写具体插件逻辑代码（比如使用vscode软件开发）
3、基于chrome浏览器的`开发者模式`加载插件代码进行开发调试、chrome浏览器扩展自带打包功能（打包生成.crx文件）
4、注册goole商店账号（开发者账号？），上传并发布extension包(之后其他人可在商店中下载并安装使用)

# 2024/2/23 chrome extension 其他能力
1、覆盖chrome浏览器默认页面（比如新建空白页签的空白页面等）
2、storage读写程序数据（支持不同浏览器之间同步、支持对象等）
3、自带的devtools扩展，增加新扩展面板
4、notifications推送桌面通知
5、webRequest拦截所有浏览器http请求，支持修改等
