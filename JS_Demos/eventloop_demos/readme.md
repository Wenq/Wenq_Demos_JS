<!--
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2020-01-14 20:10:09
 * @LastEditors  : wenq
 * @LastEditTime : 2020-01-20 20:43:57
 -->
# event loop， js事件循环

## 事件循环执行顺序/规则（这是web浏览器的，与nodejs的eventloop有些不同）：
> * 1.先执行同步js代码，遇到异步(任务/回调)代码放入‘任务队列’
> * 2.执行完同步js代码，会开始从‘任务队列’中取出异步任务开始执行
> * 3.任务队列中任务分为->宏任务和微任务，他们执行顺序为：
      步骤1中的同步js执行完后，首先执行完所有微任务(如果执行微任务过程中产生了新的微任务，会放到当前微任务队列尾部一起执行完。同理产生了宏任务，就放到宏任务队列里去)，之后取1个宏任务执行，之后再去执行所有新生成的微任务，之后取一个宏任务执行，之后再去执行所有微任务，如此一直循环往复下去(被称为eventloop)。
      
## 宏任务：
setTimeout、setInterval...
## 微任务：
promise、async/await...

### 更多示例代码请查看index.html文件
