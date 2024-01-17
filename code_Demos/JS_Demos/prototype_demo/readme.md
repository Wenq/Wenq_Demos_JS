<!--
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2020-01-20 22:20:27
 * @LastEditors  : wenq
 * @LastEditTime : 2020-01-20 22:24:37
 -->
# javascript 对象继承 prototype(OO思想)

## 关键词
### **原型**
### **继承**
### **prototype**
### **apply、call**
### **实例**


## 基于构造实现继承的方式：

> * 1.生成实例对象，构造函数模式继承

对象 constructor this new操作符 实例
instanceof运算符

目标：解决从原型对象生成实例对象。
缺点：不变属性与方法在每个实例中会生成一份，造成内存空间浪费，效率低。

### 实例代码如下：

> * 2.prototype原型模式实现继承

优点：
缺点：

> * 3.直接继承prototype实现继承

优点：
缺点：

> * 4.利用空对象作为中介实现继承

优点：
缺点：

> * 5.拷贝实现继承

优点：
缺点：


## 不基于构造实现继承的方式：

## apply的作用

> * 1.对象继承、
> * 2.对象方法与属性劫持

## apply与call的区别

调用时**参数结构不同**
> * xx.apply(context, [args1, args2...]);
> * xx.call(context, args1, args2...);
