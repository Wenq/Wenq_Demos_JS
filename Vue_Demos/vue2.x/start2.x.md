# 基于vue2.x版本熟悉vue开发

https://cn.vuejs.org/v2/guide/ //2.x start入门


## 2022/4/5:
window.app.message //vue页面绑定数据对象app通过window.app可以直接在console中反问并修改数据？

v-bind

【学习进度】
安装
介绍
Vue.js 是什么
起步
声明式渲染

## 2022/4/6:

v-if
v-for

【学习进度】
安装
介绍
Vue.js 是什么
起步
声明式渲染
条件与循环

## 2022/4/9:

v-on
v-model
组件封装

【学习进度】
安装
介绍
Vue.js 是什么
起步
声明式渲染
条件与循环
处理用户输入
组件化应用构建
与自定义元素的关系
准备好了吗？

“所有的 Vue 组件都是 Vue 实例，并且接受相同的选项对象 (一些根实例特有的选项除外)。”

“只有当实例被创建时就已经存在于 data 中的 property 才是响应式的。也就是说如果你添加一个新的 property，比如：
vm.b = 'hi'
那么对 b 的改动将不会触发任何视图的更新。”

## 2022/4/10:

【学习进度】
安装
介绍
Vue 实例
创建一个 Vue 实例
数据与方法
实例生命周期钩子
生命周期图示


“
使用 Object.freeze()，这会阻止修改现有的 property，也意味着响应系统无法再追踪变化。
var obj = {
  foo: 'bar'
}
Object.freeze(obj)
new Vue({
  el: '#app',
  data: obj
})
”

”除了数据 property，Vue 实例还暴露了一些有用的实例 property 与方法。它们都有前缀 $，以便与用户定义的 property 区分开来。“

xx.innerHTML和xx.outerHTML的区别？
xx.innerHTML：只包含其所有在html文档里的子元素内容，不包含xx元素本身的html标签
xx.outerHTML：包含了xx元素本身和其所有子元素的html标签内容
举例：
<div id='xx'>
	<span></span>
</div>
xx.innerHTML：<span></span>
xx.outerHTML：<div id='xx'><span></span></div>

 (vue生命周期示意图)[https://cn.vuejs.org/images/lifecycle.png]

"除了数据 property，Vue 实例还暴露了一些有用的实例 property 与方法。它们都有前缀 $，以便与用户定义的 property 区分开来。"


## 2022/4/12:

【学习进度】
模板语法
插值
文本
原始 HTML
Attribute
使用 JavaScript 表达式
指令
参数
动态参数
修饰符


模板语法
“Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。
在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。”

 v-once 指令

 v-html 指令

 
 ## 2022/4/19:

 【学习进度】
模板语法
插值
文本
原始 HTML
Attribute
使用 JavaScript 表达式
指令
参数
动态参数
修饰符
缩写
v-bind 缩写
v-on 缩写

“Vue 为 v-bind 和 v-on 这两个最常用的指令，提供了特定简写：: 与 @”

【学习进度】
计算属性和侦听器
计算属性
基础例子
计算属性缓存 vs 方法
计算属性 vs 侦听属性
计算属性的 setter
侦听器
Class 与 Style 绑定

“模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。”
“对于任何复杂逻辑，你都应当使用计算属性。”

计算属性申明实例：
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () { //计算属性
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})

“可以像绑定普通 property 一样在模板中绑定计算属性。”
property改变，对应计算属性也会改变，所有使用该计算属性的地方都会更新。

“计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。”

“Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性。” --watch
“计算属性默认只有 getter，不过在需要时你也可以提供一个 setter”
“虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。”

watch代码实例：
el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: { //申明侦听器
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  }

# 2022/4/21:

【学习进度】
Class 与 Style 绑定
绑定 HTML Class
对象语法
数组语法
用在组件上
绑定内联样式
对象语法
数组语法
自动添加前缀
多重值

“v-bind 用于 class 和 style 时，Vue.js 做了专门的增强。表达式结果的类型除了字符串之外，还可以是对象或数组。”
“v-bind:class 指令也可以与普通的 class attribute 共存”

class atrribute支持的数据格式包括：字符串、对象、数组（数组里可以再用对象）


## 2022/4/22:

【学习进度】
条件渲染
v-if
在 <template> 元素上使用 v-if 条件渲染分组
v-else
v-else-if
用 key 管理可复用的元素
v-show
v-if vs v-show
v-if 与 v-for 一起使用

v-if
v-else-if
v-else

“Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。”。--组件复用
“Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 key attribute ” --用key标识一个对象，涉及复用等

v-show
“v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS property display。”
“v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。” --v-if、v-show使用场景

【学习进度】
列表渲染



