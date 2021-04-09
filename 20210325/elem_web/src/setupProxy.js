const proxy =require('http-proxy-middleware');

module.exports=function(app){
  app.use(proxy.createProxyMiddleware('/wql',{  //wql 需要转发的请求
      target:'http://192.168.3.83:8088/api',
      changeOrigin: true,
      pathRewrite: {
        '^/wql':'/'
      },
  }))
}