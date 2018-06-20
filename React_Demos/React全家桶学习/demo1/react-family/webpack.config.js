//生产环境打包
const merge = require('webpack-merge');

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
    devtool: 'cheap-module-source-map',
    module: {
        // rules: [{
        //     test: /\.css$/,
        //     use: ExtractTextPlugin.extract({
        //         fallback: "style-loader",
        //         use: "css-loader"
        //     })
        // }]

        rules:  [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "postcss-loader"]
            })
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*.*']),
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })
    ]
};

module.exports = merge(commonConfig, publicConfig);


//单独打包文件，没有抽离基础打包配置
// const path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin'); //动态生成html文件
// var webpack = require('webpack');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //压缩
// const CleanWebpackPlugin = require('clean-webpack-plugin'); //清理文件
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// module.exports = {
//     devtool: 'cheap-module-source-map',
//     entry: {
//         app: [
//             path.join(__dirname, 'src/index.js')
//         ],
//         vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
//     },
//     output: {
//         path: path.join(__dirname, './dist'),
//         filename: '[name].[chunkhash].js',
//         chunkFilename: '[name].[chunkhash].js',
//         publicPath: '/'  //静态文件资源路径
//     },
//     module: {
//         rules: [{
//             test: /\.js$/,
//             use: ['babel-loader'],
//             include: path.join(__dirname, 'src')
//         }, {
//             test: /\.css$/,
//             use: ExtractTextPlugin.extract({
//             	fallback: 'style-loader',
//             	use: 'css-loader'
//             })
//         }, {
//             test: /\.(png|jpg|gif)$/,
//             use: [{
//                 loader: 'url-loader',
//                 options: {
//                     limit: 8192
//                 }
//             }]
//         }]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             filename: 'index.html',
//             template: path.join(__dirname, 'src/index.html')
//         }),
//         new webpack.optimize.CommonsChunkPlugin({
//             name: 'vendor' //必须在runtime之前
//         }),
//         new webpack.optimize.CommonsChunkPlugin({
//         	name:'runtime' //优化缓存
//         }),
//         new UglifyJSPlugin(),  //压缩打包后的文件
//         new webpack.DefinePlugin({
//         	'process.env':{
//         		'NODE_ENV':JSON.stringify('production')  //优化library打包
//         	}
//         }),
//         new webpack.HashedModuleIdsPlugin(), //优化缓存
//         new CleanWebpackPlugin(['dist']), //清理目录
//         new ExtractTextPlugin({
//         	filename: '[name].[contenthash:5].css',
//         	allChunks: true
//         })
//     ],

//     resolve: {
//         alias: { //目录别名
//             pages: path.join(__dirname, 'src/pages'),
//             component: path.join(__dirname, 'src/component'),
//             router: path.join(__dirname, 'src/router'),
//             actions: path.join(__dirname, 'src/redux/actions'),
//             reducers: path.join(__dirname, 'src/redux/reducers')
//         }
//     }
// };