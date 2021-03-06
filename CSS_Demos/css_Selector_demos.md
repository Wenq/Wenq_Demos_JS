<!--
 * @Descripttion: html file
 * @version: 
 * @Author: wenq
 * @Date: 2019-09-22 15:15:48
 * @LastEditors: wenq
 * @LastEditTime: 2019-09-22 15:16:25
 -->

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache,no-store" />
    <meta http-equiv="expires" content="0">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>[wenq]css选择器 demos</title>
    <link rel="icon" href="loginResource/img/favicon.ico" type="image/x-icon" />
    <style>
        html,
        body {
            margin: 0;
            padding: 0;
            overflow: auto;
            width: 100%;
            height: 100%;
            background-color: white !important;
        }
    </style>
    <style type="text/css">
        .parent {
            border: 1px solid blue;
            margin: 10px;
            display: flex;
            flex-wrap: wrap;
            background-color: white !important;
        }

        /*
        为了在一个页面展示各个样式分类，页面分为了多个卡片(卡片样式'card')
        所有样式类型demo都写在卡片内
    */
        .card {
            width: 400px;
            height: 200px;
            border: 2px solid #ff0000;
            flex-grow: 0;
            flex-shrink: 0;
            margin: 10px;

            display: flex;
            flex-direction: column;
        }

        /*
        标题区: 样式为'card'的元素的第一个div子元素
    */
        .card>div {
            border-bottom: 1px solid #09e0ae;
            height: 25px;
        }

        /*
        内容区: 排行第二的div子元素
    */
        .card div:nth-child(2) {
            flex-grow: 1;
            background-color: #e4d1d1;
        }

        /*
        标题
    */
        .card .title {
            color: pink;
            font-size: 12px;
            cursor: not-allowed;
        }


        /************************************************start****************************************************/


        /*********************1 元素选择器**********************/
        /*
        [元素选择器]: 用span等html原生web元素
    */
        .card span {
            color: #801616;
        }

        /*********************2 选择器分组**********************/
        /*
        [选择器分组]: 用","逗号分隔
    */
        .card h1,
        p {
            color: aqua;
        }

        /*
        [通配符选择器]: * {color:red;} //页面所有元素color变为red
        优先级没有'!important'高，可被覆盖
    */
        .card * {
            background-color: lightslategrey;
        }

        /*
        [声明分组]: 同一元素的多个样式申明，会自动融合
        eg: h1 {font: 28px Verdana;} h1 {color: blue;} -> h1 {font: 28px Verdana; color: blue;}
    */
        .card h2 {
            color: red;
            font-size: 12px;
        }

        .card h2 {
            width: 20px;
            font-size: 20px;
        }

        /*********************3 CSS类选择器详解**********************/
        /*
        [CSS'类'选择器]
        符号: '.';
        申明以"."开头，集合元素“class”属性使用
    */
        .card .clasSelector {
            height: 40px;
            width: 40px;
            background-color: orange;
            font-size: 12px;
        }

        /*
        [CSS多类选择器]
        申明以"."开头，集合元素“class”属性使用
    */
        .card .clasSelector.clasSelector2 {
            background-color: green;
            height: 50px;
        }

        /*********************4 CSS ID选择器详解**********************/
        /*
        [id选择器]
        符号: '#';
        申明以"#"开头，集合元素“id”属性使用。
        类选择器和 ID 选择器可能是区分大小写的。
    */
        .card #test1 {
            font-size: 18px;
            color: blue;
        }

        /*********************5 CSS属性选择器**********************/
        /*
        [CSS属性选择器]
        符号: '[属性名称]';
        属性选择器可以根据元素的'属性'及'属性值'来选择元素。
        属性：web页面元素在dom结构上包含的attribute, 比如 title，data-，src等
        属性值: 属性与属性值必须完全匹配(默认)，要部分匹配要用波浪号'~'.
    */
        .card .attr[title] {
            /*样式类名称有'attr'且有属性title(无论属性title的值是什么)*/
            color: yellow;
        }

        .card a[href] {
            /*有'href'属性的a元素*/
            color: red;
        }

        .card a[href][title] {
            /*[多个属性进行选择]:同时有'href'属性和'title'属性的a元素*/
            color: red;
        }

        .card a[href="http://www.w3school.com.cn/about_us.asp"] {
            /*有属性'href'且属性值为'http://....'的a元素,完全匹配*/
            color: red;
        }

        .card a[href="http://www.w3school.com.cn/"][title="W3School"] {
            /*多个属性值选择链接起来*/
            color: red;
        }

        .card p[class~="important"] {
            /*属性值匹配，部分匹配(波浪线'~')*/
            color: red;
        }

        /*
        [子串匹配属性选择器]
        符号: '^/$/*';
        [abc^="def"]    选择 abc 属性值以 "def" 开头的所有元素
        [abc$="def"]    选择 abc 属性值以 "def" 结尾的所有元素
        [abc*="def"]    选择 abc 属性值中包含子串 "def" 的所有元素

        注：任何属性都可以使用这些选择器
    */
        .card .sub[title^='aaa'] {
            color: yellow;
            font-size: 15px;
        }

        .card .sub[title$='bbb'] {
            color: red;
            font-size: 15px;
        }

        .card .sub[title*='ccc'] {
            color: white;
            font-size: 15px;
        }

        /*
        [特定属性选择类型]
        eg: *[lang|="en"] {color: red;} => 会选择'lang'属性等于'en'或以'en-'开头的所有元素。
    */
        .card .sub[title|='ddd'] {
            color: aqua;
            font-size: 15px;
        }

        /*********************6 CSS后代选择器**********************/

        /*
        [后代选择器]
        符号: 空格;
        又称为包含选择器
        后代选择器可以选择作为某元素后代的元素。
        关键：样式类名称/元素名称之间使用单个或多个【空格】分隔，即表示后代选择。跟对每一个后代元素都单独绑定一个class比起来，后代选择器的效率更高。

        其他说明：h1 em {}, 无论em与h1之间有'多少层'(其他元素)，样式内容都会生效。
    */
        .card h1 em {
            color: red;
        }


        /*********************7 CSS子元素选择器**********************/

        /*
        [子元素选择器]
        符号: '>';
        与后代选择器相比，子元素选择器（Child selectors）只能选择作为某元素子元素的元素。
        作用：不希望选择任意的后代元素，而是希望缩小范围，只选择某个元素的子元素，请使用子元素选择器(只匹配'第一个子'元素，符合既生效；不符合就无效)。
        注意：子选择器使用了大于号'>'（子结合符）；子结合符两边可以有空白符，这是可选的。
    */
        .card h1>strong {
            /*如果hi与strong之间有其他元素隔离，就不生效*/
            color: red;
        }

        /*********************8 CSS相邻选择器**********************/
        /*
        [相邻兄弟选择器]
        符号: '+';
        可选择'紧接'在另一元素后的元素，且二者有相同父元素。
        用一个结合符只能选择两个相邻兄弟中的第二个元素，中间有间隔其他元素都不算相邻兄弟。   
    */
        .card h1+p {
            margin-top: 50px;
        }

        /***************************css选择器总结如下:******************************
        【重要 !important】

        多个css连接方式含义**总结**
        1. 一个样式(元素名称eg:span，或者样式名称: .content ): 表示单独的一个样式名称. 
            eg: .a1{} span{};
        2. 多个样式以'空格'相连: 后代选择器，即满足这个父子样式层级关系，最后的子层级的样式才会生效(类似限制子层级样式的作用域). 
            eg: .a1 .b1{xxx};
        3. 多个样式直接连接在一起，中间没有空格: 一个元素要同时具有这些样式,最后的子层级样式才会生效. 
            eg: .a1.b1{xxx};
        4. 多个样式以','逗号连接子啊一起: 样式分组，这些样式的内容都一样.  
            eg: .a1, b1, c1{xx};

        即css的嵌套:
        嵌套选择器,它可能适用于选择器内部的选择器的样式。
        在下面的例子设置了三个样式：

        1. p{ }: 为所有 p 元素指定一个样式。
        2. .marked{ }: 为所有 class="marked" 的元素指定一个样式。
        3. .marked p{ }: 为所有 class="marked" 元素内的 p 元素指定一个样式。
        4. p.marked{ }: 为所有 class="marked" 的 p 元素指定一个样式。

        选择器列表：http://www.w3school.com.cn/cssref/css_selectors.asp
    *************************************************************************/


        /************************************************end****************************************************/
    </style>
    <style type="text/css">
        /*********************伪类**********************/

        /*
        1.[锚伪类 :link/:visited/:hover/:active/:focus]
        伪类名称对大小写不敏感。
        2.[:first-child/:lang]
        :first-child :不是用来选择当前元素的子元素，而是修饰自身，自身是否是自己父元素的第一个子元素(重要!);
        :lang 伪类使你有能力为不同的语言定义特殊的规则?
    */

        /* 未访问的链接 */
        .card a:link {
            color: #FF0000
        }

        /* 已访问的链接 */
        .card a:visited {
            color: #00FF00
        }

        /* 鼠标移动到链接上 */
        .card a:hover {
            color: #FF00FF
        }

        /* 选定的链接 */
        .card a:active {
            color: #0000FF
        }

        .card p:first-child {
            color: red;
        }

        .card q:lang(no) {
            quotes: "~""~"
        }

        /*********************伪元素**********************/

        /*
        [CSS伪元素用于向某些选择器设置特殊效果]
        
        :first-line 伪元素用于向文本的首行设置特殊样式?
        注意："first-line" 伪元素只能用于'块级元素'。

        :first-letter 伪元素用于向文本的'首字母'设置特殊样式。//伪元素可以与 CSS 类配合使用。

        :before 伪元素可以在元素的内容'前面'插入新内容。

        :after 伪元素可以在元素的内容'之后'插入新内容。
    */
        .card h1:before {
            /*每个 <h1> 元素前面插入一幅图片*/
            content: url(logo.gif);
        }
    </style>
    <style type="text/css">
        /*********************其他选择器**********************/
        /*
        :only-child 选择属于其父元素的唯一子元素
        :nth-child(n) 选择属于其父元素的第n个子元素
        :nth-last-child(n)  同上，从最后一个子元素开始计数
        :last-child 选择属于其父元素最后一个子元素
        :root 选择文档的根元素
        :empty  选择没有子元素的每个元素
        :enabled    input:enabled   选择每个启用的 <input> 元素
        :disabled   input:disabled  选择每个禁用的 <input> 元素 
        :checked    input:checked   选择每个被选中的 <input> 元素。
        :not(selector)  :not(p) 选择非 <p> 元素的每个元素

        ...还有更多选择器
    */
    </style>
    <script type="text/javascript">
    // javascript
    </script>
</head>

<body id="theme">
    <div class="parent">
        <div class="card" tilte="css选择器-1">
            <div><em class="title">css选择器: </em>[元素选择器]</div>
            <div><span>我的css来自[元素选择器]</span></div>
        </div>
        <div class="card" title="css选择器-2">
            <div><em class="title">css选择器: </em>[选择器分组]</div>
            <div>
                <h1>我的css来自分组选择器</h1>
                <p>我的css来自分组选择器</p>
            </div>
        </div>
        <div class="card" title="css选择器-3">
            <div><em class="title">css选择器: </em>[类选择器]</div>
            <div>
                <div class="clasSelector">css类选择器</div>
                <div class="clasSelector clasSelector2">多类选择器</div>
                <div class="clasSelector2">CSS多类选择器</div>
            </div>
        </div>
        <div class="card" title="css选择器-4">
            <div><em class="title">css选择器: </em>[id选择器]</div>
            <div>
                <span id="test1">我的css来自[id选择器]</span>
                <div id="test1">我的css来自[id选择器]</div>
            </div>
        </div>
        <div class="card" title="css选择器-5">
            <div><em class="title">css选择器: </em>[属性选择器]</div>
            <div>
                <h3 class='attr'>我的css来自属性选择器(无效，没有title属性)</h3>
                <h3 class='attr' title="">我的css来自属性选择器</h3>
            </div>
        </div>
        <div class="card" title="css选择器-6">
            <div><em class="title">css选择器: </em>[子串匹配属性选择器]</div>
            <div>
                <div class='sub' title='aaa111111'>我的css来自子串属性选择器</div>
                <div class='sub' title='111111bbb'>我的css来自子串属性选择器</div>
                <div class='sub' title='111ccc111'>我的css来自子串属性选择器</div>
                <div class='sub' title='ddd----'>我的css来自子串属性选择器</div>
            </div>
        </div>
        <div class="card" title="css选择器-7">
            <div><em class="title">css选择器: </em>[后代选择器]</div>
            <div>
                <h1>
                    <div>
                        <span>
                            <em>我的css来自后代选择器</em>
                        </span>
                    </div>
                </h1>
            </div>
        </div>
        <div class="card" title="css选择器-8">
            <div><em class="title">css选择器: </em>[子元素选择器]</div>
            <div></div>
        </div>
        <div class="card" title="css选择器-9">
            <div><em class="title">css选择器: </em>[相邻兄弟选择器]</div>
            <div></div>
        </div>
        <div class="card" title="css选择器-10">
            <div><em class="title">css选择器: </em>[伪元素]</div>
            <div></div>
        </div>
        <div class="card" title="css选择器-11">
            <div><em class="title">css选择器: </em>[伪类]</div>
            <div></div>
        </div>
        <div class="card" title="css选择器-12">
            <div><em class="title">css选择器: </em>[伪类]</div>
            <div></div>
        </div>
        <div class="card" title="css选择器-13">
            <div><em class="title">css选择器: </em>[伪类]</div>
            <div></div>
        </div>
        <div class="card" title="css选择器-14">
            <div><em class="title">css选择器: </em>[伪类]</div>
            <div></div>
        </div>
        <div class="card" title="css选择器-15">
            <div><em class="title">css选择器: </em>[伪类]</div>
            <div></div>
        </div>
        <div class="card" title="css选择器-16">
            <div><em class="title">css选择器: </em>[伪类]</div>
            <div></div>
        </div>
    </div>
    <script>
    //script
    </script>
</body>

</html>
