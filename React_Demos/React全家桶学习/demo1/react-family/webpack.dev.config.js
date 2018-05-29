const path = require('path');
const webpack = require('webpack');

module.exports = {
 
    /*入口*/
    entry: [ 
	    'react-hot-loader/patch',
	    path.join(__dirname, 'src/index.js')
    ],
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },

     /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
	 /*cacheDirectory是用来缓存编译结果，下次编译加速*/
	 module: {
	     rules: [
	     {
	         test: /\.js$/,
	         use: ['babel-loader?cacheDirectory=true'],
	         include: path.join(__dirname, 'src')
	     },
	     {
	     	test: /\.css$/,
	     	use: ['style-loader','css-loader']
	     },
	     {
	     	test: /\.(png|jpg|gif)$/,
	     	use:[
	     	{
	     		loader: 'url-loader',
	     		options: {
	     			//小于等于8K的图片会被转成base64编码，直接插入HTML中，减少HTTP请求。
	     			limit: 8192
	     		}
	     	}
	     	]
	     }
	    ]
	 },

 	// plugins: [
    // 	new webpack.HotModuleReplacementPlugin() //模块热替换
    // ]
     // hot: true //启用模块热替换
	devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    },

    //目录别名配置
     resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers'),
            reduxdir: path.join(__dirname, 'src/redux')
        }
    },

    devtool: 'inline-source-map'
};