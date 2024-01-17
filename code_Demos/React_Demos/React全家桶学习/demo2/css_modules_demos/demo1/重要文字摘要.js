/*
 * 2018-07-06
 * 记录阅读到的相关内容的中心或重点文字
 * 阅读内容：http://www.ruanyifeng.com/blog/2016/06/css_modules.html

 	'CSS 不能算编程语言，只是网页样式的一种描述方法.'

 	'CSS Modules不是将 CSS 改造成编程语言，只加入了局部作用域和模块依赖'

 	'规则少，同时又非常有用，可以保证某个组件的样式，不会影响到其他组件'

 	'CSS Modules 提供各种插件，支持不同的构建工具。'

 	一、局部作用域
	CSS的规则都是全局的，任何一个组件的样式规则，都对整个页面有效。
	产生局部作用域的唯一方法，就是使用一个独一无二的class的名字，不会与其他选择器重名。这就是 CSS Modules 的做法。

	二、全局作用域
	CSS Modules 允许使用:global(.className)的语法，声明一个全局规则。凡是这样声明的class，都不会被编译成哈希字符串。
	CSS Modules 还提供一种显式的局部作用域语法:local(.className)，等同于.className.

	三、定制哈希类名
	css-loader默认的哈希算法是[hash:base64]，这会将.title编译成._3zyde4l1yATCOkgn-DBWEL这样的字符串。
	webpack.config.js里面可以定制哈希字符串的格式。

	四、 Class 的组合
	在 CSS Modules 中，一个选择器可以继承另一个选择器的规则，这称为"组合"（"composition"）。

	五、输入其他模块
	选择器也可以继承其他CSS文件里面的规则。

	六、输入变量
	CSS Modules 支持使用变量，不过需要安装 PostCSS 和 postcss-modules-values。
 */