
console.log('load EventCenter.js successed!')

//自定义事件对象
var customEventInstance = {}

//event中心，封装event各类接口
customEventInstance.EventCenter = {

	//注册event
	registerEvent : function attachEvent(eventName, callback) {
		// body...
	},
	//触发event
	triggerEvent : function triggerEvent(eventName, params){

	},
	//发布event
	publishEvent : function publishEvent(argument) {
		// body...
	},
	//注销event
	unRegisterEvent : function unAttachEvent (argument) {

	}
	
}

//event事件名称枚举
customEventInstance.EvantName = {
	CUSEVENT_BEFORETEXTCHANGED : 'beforeTextChanged',
	CUSEVENT_ONTEXTCHANGED : 'onTextChanged',
	CUSEVENT_AFTERTEXTCHANGED : 'afterTextChanged'
}