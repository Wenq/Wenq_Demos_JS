
console.log('load EventCenter.js successed!')

//自定义事件对象
var customEventInstance = {}

//event中心，封装event各类接口
customEventInstance.EventCenter = {

	//event注册对象列表
	eventList: [],

	//注册event
	registerEvent: function attachEvent(eventName, callback) {
		// body...
		this.eventList.push({
			eventName,
			callback
		});
		console.warn('注册event成功: ' + eventName)
	},

	//触发event
	triggerEvent: function triggerEvent(eventName, params) {
		for (var i = 0; i < this.eventList.length; i++) {
			if (this.eventList[i].eventName == eventName) {
				this.eventList[i].callback && this.eventList[i].callback(params);
				console.warn('已触发event: ' + eventName + ', 参数： ' + params)
			}
		}
	},

	//发布event
	// publishEvent: function publishEvent(argument) {
	// 	// body...
	// },

	//注销event（什么时候主动注销？？）
	unRegisterEvent: function unAttachEvent(eventName) {
		//根据eventName遍历eventList中对象，找到最近一个与eventName名称一样的事件对象，移除该对象
		for (var i = 0; i < this.eventList.length; i++) {
			if (this.eventList[i].eventName == eventName) {
				this.eventList.splice(i, 1)
				console.warn('注销event成功: ' + eventName)
				break;
			}
		}
	}

}

//event事件名称枚举
customEventInstance.EvantName = {
	CUSEVENT_BEFORETEXTCHANGED: 'beforeTextChanged',
	CUSEVENT_ONTEXTCHANGED: 'onTextChanged',
	CUSEVENT_AFTERTEXTCHANGED: 'afterTextChanged'
}