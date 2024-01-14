
console.log('load EventCenter.js successed!')

//自定义事件对象
var customEventObj = {}

//event中心，封装event各类接口
customEventObj.EventCenter = {

	//注册event
	attachEvent : function attachEvent(argument) {
		// body...
	},
	//触发event
	triggerEvent : function triggerEvent(argument){

	},
	//发布event
	publishEvent : function publishEvent(argument) {
		// body...
	}
	
}

//event事件名称枚举
customEventObj.EvantName = {
	CUSEVENT_BEFORETEXTCHANGED : 'beforeTextChanged',
	CUSEVENT_ONTEXTCHANGED : 'onTextChanged',
	CUSEVENT_AFTERTEXTCHANGED : 'afterTextChanged'
}