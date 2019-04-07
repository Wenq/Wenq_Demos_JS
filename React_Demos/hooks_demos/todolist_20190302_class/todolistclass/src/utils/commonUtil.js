
//获取当前日期
export function getDate(format) {
    return new Date().Format(format||'MM/dd');
}

//生成一个GUID
export function createId() {
    return guid();
}

/*------生产随机GUID算法(来自网路)------*/
function S4() { 
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
 }; 
 // Generate a pseudo-GUID by concatenating random hexadecimal. 
 function guid() { 
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4()); 
 }; 
/*------end------*/

/*------为Date对象扩展一个方法'Format',用于格式化输出(来自网路)------*/
Date.prototype.Format = function (fmt) { //author: meizz   
    var o = {
        "M+": this.getMonth() + 1,                 //月份   
        "d+": this.getDate(),                    //日   
        "h+": this.getHours(),                   //小时   
        "m+": this.getMinutes(),                 //分   
        "s+": this.getSeconds(),                 //秒   
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
        "S": this.getMilliseconds()             //毫秒   
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
} 
/*------end------*/