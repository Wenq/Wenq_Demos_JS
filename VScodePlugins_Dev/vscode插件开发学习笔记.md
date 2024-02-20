# vscode插件开发 2024/2/8

===========================

学习帖子：
https://zhuanlan.zhihu.com/p/635411894 （这篇帖子感觉内容跟最新版yo脚手架不一致，有点旧了）
https://code.visualstudio.com/api/get-started/your-first-extension （官方开发文档）

其他帖子：
https://blog.csdn.net/weixin_43616817/article/details/124316972


===========================

# 背景知识
需要的软件：node、yo、generator-code
开发工具：vscode
插件打包工具：vsce

# 2024/2/18 vscode extension开发流程
1、使用提供的npm包工具创建开发工程（类似react提供的‘create start app’）
2、（一般使用vscode软件）基于如上工程编写具体插件逻辑代码
3、（一般使用vscode软件）本地开发调试（启动调试等有快捷键）、打包
4、注册账号，上传并发布extension包(之后其他人可在vscode客户端中搜索并下载)

## `实际安装/开发过程`：
1、先打开科学上网（不确定是否必须）
2、本地nodeJS需要较高版本（否则安装提示失败），我直接安装了最新版‘v21.6.2’
3、如果不想手搓代码从零去写，就可以安装脚手架和模版包去做快速开发：yo（脚手架）、generator-code（vscode插件模版）
4、创建插件项目指令：“yo code”
5、插件代码主入口程序文件“extension.js”，这里是js开发；如果是ts开发则主入口程序文件是“extension.ts”
6、在vscode中使用F5开启调试，会弹新窗口出来，输入command激活插件
7、安装“vsce”来打包和发布

## yo和generator-code介绍
yo和generator-code这两个包用途如下：
1、yo模块全局安装后就安装了Yeoman，Yeoman是通用型项目脚手架工具，可以根据一套模板，生成一个对应的项目结构
2、generator-code模块是VS Code扩展生成器，与yo配合使用才能构建项

