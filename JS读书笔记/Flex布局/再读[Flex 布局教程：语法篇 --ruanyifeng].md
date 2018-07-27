个人阅读理解与摘抄

--------------------------


链接：
http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

-------0727:-------

2009年，W3C 提出了Flex 布局,它已经得到了所有浏览器的支持.
浏览器版本要求：IE10+....

注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。

flex布局设置方式：
display: flex;
或
display: -webkit-flex; /* Safari */
或
（行内元素）display: inline-flex;

flex：是设置成fle布局的容器与起容器成员之间的关系。

flex布局：
默认采用水平布局，主轴就是水平，交叉轴是垂直。
相应的：
采用垂直布局，主轴就是垂直，交叉轴就是水平。
即：往哪个方向布局，哪个方向就是主轴，另一个方向就是交叉轴。<---怎样区分主轴，交叉轴(侧轴)

flex布局几大属性含义【容器的属性】：
flex-direction -----布局方向(水平, 垂直, 水平逆向, 垂直逆向)。
flex-wrap     ------是否可换行。
flex-flow  -----是flex-direction属性和flex-wrap属性的简写形式,  值也是两个属性值并列，用'||'分隔。
justify-content  ------在主轴上的对齐方式(没有stretch充满)。 [ flex-start | flex-end | center | space-between | space-round;]
align-items -----------在交叉轴上如何对齐(有stretch)。[flex-start | flex-end | center | baseline | stretch;]
align-content ---------定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。??? 换行了就会产生多根轴线？
【项目的属性】：即容器里的item项设置的属性。
order -----定义项目的排列顺序。数值越小，排列越靠前，默认为0。
flex-grow  -----定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。（为1则允许放大，为0则不允许放大）
flex-shrink  ------定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。（为1则允许压缩，为0则不允许压缩）
flex-basis -----定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
flex -----是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
align-self -----允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。（即覆盖交叉轴的布局设置）
子元素占满父容器的方法：主轴充满flex-grow=1，交叉轴拉伸align-items: stretch。（chrome好像侧轴默认就是stretch，其他浏览器呢？？？）
