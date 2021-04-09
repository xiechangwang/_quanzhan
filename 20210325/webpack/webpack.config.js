const path=require('path');
const webpack=require('webpack');
const webpackDevServer = require('webpack-dev-server');

module.exports={
  //单入口、单出口
  entry:'./src/1',
  output:{
    path:path.resolve(__dirname,'dest'),
    filename:'build.js'
  },
  //多入口、多出口
  // entry:{
  //   'a':'./src/1',
  //   'bb':'./src/2'
  // },
  // output:{
  //   path:path.resolve(__dirname,'dest'),
  //   filename:'[name].build.js'
  // },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),  //热更新依赖的插件配合hot
  ],
  devServer:{
    contentBase:path.resolve(__dirname,'pubilc'), //指定文件路径
    port:3000,                                    //端口
    historyApiFallback: true,                     //所有的 404 请求都会响应 index.html 的内容:devServer.historyApiFallback 设为 true开启
    hot:true,               //开启热更新
    // open:true,           //打开浏览器
    inline: true,          //应用程序将启用 inline模式。这意味着将在整个页面重新加载;=false实现更改热更新
  }
}