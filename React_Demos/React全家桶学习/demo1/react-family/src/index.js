// document.getElementById('app').innerHTML = "Webpack works"

// /*使用es6的箭头函数*/
//  var func = str => {
//      document.getElementById('app').innerHTML = str;
//  };
//  func('我现在在使用Babel!');

// import React from 'react';
// import ReactDom from 'react-dom';
// ReactDom.render(
// 	<div>hello react!</div>,
// 	document.getElementById('app')
// 	);

// import React from 'react';
// import ReactDom from 'react-dom';
// import Hello from './component/Hello/Hello';
// ReactDom.render(
// 	<Hello/>,
// 	document.getElementById('app')
// 	);


import React from 'react';
import ReactDom from 'react-dom';
import getRouter from 'router/router';
import {AppContainer} from 'react-hot-loader';

/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if(module.hot){
	module.hot.accept('./router/router',()=>{
		const getRouter = require('./router/router').default;
		renderWithHotReload(getRouter());
	}); //使用模块热替换
}

function renderWithHotReload(RootElement){
	ReactDom.render(
		<AppContainer>
			{RootElement}
		</AppContainer>,
		document.getElementById('app')
		)
}