# Chrome插件开发 2024/2/4

===========================
学习帖子：
https://zhuanlan.zhihu.com/p/678535335
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
