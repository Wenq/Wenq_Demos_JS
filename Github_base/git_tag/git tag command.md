<!--
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2019-12-16 23:36:43
 * @LastEditors  : wenq
 * @LastEditTime : 2019-12-28 22:37:45
 -->
### git tag command

1. git tag是什么？
   为源代码在特定提交号（或最新提交）上打一个标记（tag），方便后续查看或拉取特定版本的源代码，用于拉取、部署等。
   
2. git tag怎么使用？
   git tag指令有若干个指令可以使用来维护tag标记，比如git show、git add -a tagname -m 'info...'等。tag不仅可以在最新代码上打，还可以为特定某个历史提交补打tag。

3. git tag在日常使用git管理源代码中的常用场景？
   为特定提交源代码打一个标记，便于回溯。

   参考连接如下：
   [参考连接1](https://blog.csdn.net/leonliu06/article/details/79662239)
   [参考连接2](https://www.cnblogs.com/senlinyang/p/8527764.html)
   [参考连接3](https://www.jianshu.com/p/cdd80dd15593)

### 其他
1. 进入git log的编辑界面，怎样结束编辑？
esc + 'wq' 