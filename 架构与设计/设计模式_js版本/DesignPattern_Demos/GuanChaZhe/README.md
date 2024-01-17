# 观察者模式（Observer Pattern）

也叫发布订阅模式或消息机制，解决了主体对象与观察者之间的功能耦合；
比如不同模块之间的消息通信！
观察者模式也是一种功能自定义事件；

## 涉及对象：
消息容器：{type: [fn1,fn2,...]}
注册消息接口：regist
发布消息接口：fire
移除消息接口：remove

### fire接口实现可参考关键代码：
fire：function（type，args）{
    xxx
    var events = {
        type,
        args: args || {}
    }
    //触发事件回调函数(注意实现方式和参数封装内容)
    __message[type][i].call(this, vents)
}

### remove接口实现可参考关键代码：
remove: function(type, fn){
    xxx
    //判断两个fn是否相等，使用‘===’比较符
    __message[type][i] === fun && __message[type].splice(i,1)
}

================

# js自定义事件

自己实现一个事件总线或者叫事件中心，用于支持事件订阅、分发、注销；
实际就是发布订阅模式；