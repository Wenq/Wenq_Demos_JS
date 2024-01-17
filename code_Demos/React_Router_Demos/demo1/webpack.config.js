// var webpack = require('webpack');
// var uglifyjsPlugin=require('uglifyjs-webpack-plugin');

// module.exports = {
//   entry: './index.js',

//   output: {
//     filename: 'bundle.js',
//     publicPath: ''
//   },

//   module: {
//     loaders: [
//       { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
//     ]
//   }
// }

let path = require('path');//node的模块
module.exports = {
  entry: './index.js',
  output: {
    filename:'build.js',
    // 这个路径必须是绝对路径
    path: path.resolve('./dist')
  },
  devServer:{
    contentBase:'./dist',
    port:8080,
    compress:true,// 服务器压缩
    open:true,// 自动打开浏览器
    // hot:true//热更新
    },// 开发服务器
  performance: {
      hints:false   
  },
  mode: 'development', // 设置mode // 可以更改模式
  module: { // 模块配置
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules"
      },
    ]
  },
  // plugins: [
  // webpack 4.0之后不再用这个写法
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: { warnings: false }
  //   })
  // ]
  //压缩js webpack 4.0写法
  // optimization: {
  //     minimizer: [
  //         new uglifyjsPlugin({
  //             uglifyOptions: {
  //                 compress: false
  //             }
  //         })
  //     ]
  // }
};