var webpack = require('webpack');
var uglifyjsPlugin=require('uglifyjs-webpack-plugin');

module.exports = {
  entry: __dirname + '/index.js',
  output: {
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
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
  optimization: {
      minimizer: [
          new uglifyjsPlugin({
              uglifyOptions: {
                  compress: false
              }
          })
      ]
  }
};