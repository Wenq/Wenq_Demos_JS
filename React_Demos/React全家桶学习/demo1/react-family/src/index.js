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

import {Provider} from 'react-redux';
import store from './redux/store';

import {BrowserRouter as Router} from 'react-router-dom';
import App from 'components/App/App';

/*初始化*/
renderWithHotReload(App);

/*热更新*/
if(module.hot){
	// module.hot.accept('./router/router',()=>{
	// 	const getRouter = require('./router/router').default;
	// 	renderWithHotReload(getRouter());
	// }); //使用模块热替换
	module.hot.accept('components/App/App',()=>{
		const NextApp = require('components/App/App').default;
		renderWithHotReload(NextApp);
	}); //使用模块热替换
}

//Provider组件是让所有的组件可以访问到store。不用手动去传。也不用手动去监听。
function renderWithHotReload(RootElement){
	ReactDom.render(
		<AppContainer>
			<Provider store={store}>
				{RootElement}
			</Provider>
		</AppContainer>,
		document.getElementById('app')
		)
}