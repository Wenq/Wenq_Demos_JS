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











