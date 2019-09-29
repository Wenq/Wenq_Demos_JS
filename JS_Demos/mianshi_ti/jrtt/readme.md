<!--
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2019-09-28 16:59:56
 * @LastEditors: wenq
 * @LastEditTime: 2019-09-29 20:52:15
 -->
# 20190928 jinritoutiao 在线笔试
> * 5道选择题
  1. 几道题都不太熟(其中有个"a=[111,222,333,444],调用delete a[1]后，a.length还是4?")
> * 2道填空题
  1. async/await、setTimeout、Promise执行顺序
  2. 输出上下文环境中的特定变量，同一个函数调用方式不同。
> * 1道编程题
  1. "122,0":取出逗号分隔数字，求和并以字符串输出结果，注意结果超过js支持的最大整数。
    ```
        function sum(numStr) {
            let result = numStr.split(',');
            let firstNum = Number.parseInt(result[0]);
            let secondNum = Number.parseInt(result[1]);
            let sum =( firstNum + secondNum) + '';
            console.log(sum);
            return sum;
        }
        sum('0,123');
    ```
> * 1道开放问答题
    1. 项目中用到的性能优化手段