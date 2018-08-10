
:Media Query（css3媒介查询）

------------------------------------
语法结构及用法：
@media 设备名 only （选取条件） not （选取条件） and（设备选取条件），设备二{sRules}

作用：根据特定设备+特定条件下，执行设置特定的css或加载特定css文件 (Media Queries能在不同的条件下使用不同的样式，使用页面达到不同的渲染效果。)

eg:
@media screen and (min-width:600px)  //设备为屏幕 并且 宽度<=600px时
@media only screen and (min-width:600px) //只为设备为屏幕 并且 当宽度<=600px时
@media screen not (min-width:600px) //设备为屏幕 并且 宽度不<=600px时

------------------------------------
常用(推荐)：

(外联)
1. <link rel="stylesheet" media="screen and (min-width:600px) and (max-width:900px)" href="style.css" type="text/css" /> //根据条件引入css文件
或
@import url(style.css) screen and (min-width:1000px);

(内联)
2. @media screen and (max-width: 600px) { //写在css文件中，根据不同条件，设置样式的不同内容
    选择器 {
        属性：属性值；
    }
}

------------------------------------
在Media Query中如果没有明确指定Media Type，那么其默认为all

------------------------------------
关键字：

not关键字
<link rel="stylesheet" media="not print and (max-width: 1200px)" href="print.css" type="text/css" />
not关键字是用来排除某种制定的媒体类型，换句话来说就是用于排除符合表达式的设备。

only关键字
<link rel="stylesheet" media="only screen and (max-device-width:240px)" href="android240.css" type="text/css" />
only用来定某种特定的媒体类型，可以用来排除不支持媒体查询的浏览器。其实only很多时候是用来对那些不支持Media Query但却支持Media Type的设备隐藏样式表的。

------------------------------------
Media Queries的具体使用方式

一、最大宽度Max Width
<link rel="stylesheet" media="screen and (max-width:600px)" href="small.css" type="text/css" />
上面表示的是：当屏幕小于或等于600px时，将采用small.css样式来渲染Web页面。
二、最小宽度Min Width
<link rel="stylesheet" media="screen and (min-width:900px)" href="big.css" type="text/css" />
上面表示的是：当屏幕大于或等于900px时，将采用big.css样式来渲染Web页面。

------------------------------------
其他：

Ｍedia Query的设备类型（10种）
all：所有设备
screen：电脑显示器
print：打印用纸或打印预览视图
handled：便携设备
tv：电视机类型的设备
…

CSS中的Media Query的设备特性（13种）
设备宽高：device-width,device-height
渲染窗口的宽和高：width,height
设备的手持方向：orientation
设备的分辨率：resolution
…

------------------------------------
做响应式网站的时候，一定要在页面头部加入如下的声明：
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
