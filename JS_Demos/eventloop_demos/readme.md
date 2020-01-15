<!--
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2020-01-14 20:10:09
 * @LastEditors  : wenq
 * @LastEditTime : 2020-01-15 23:11:13
 -->
# event loop， js事件循环

## web浏览器evetn loop规则如下：

1. 先执行JS文件，如有异步则放入任务队列。
2. JS文件同步流程执行完毕，开始处理任务队列中异步回调。
3. 异步回调分为：宏队列、微队列。先处理微队列，将微队列中任务处理完毕，再执行一个宏队列中一个任务，之后又去处理微队列，如此循环。

