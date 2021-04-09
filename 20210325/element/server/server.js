const koa=require('koa');
const static=require('koa-static');
const Router=require('koa-router');
const db=require('./libs/database');
const config=require('./config');
const pathlib=require('path');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');



//创建服务
const server=new koa();
server.listen(config.PORT);
console.log('http://localhost:'+config.PORT);


//设置session中间件
server.keys = ['asdasd-asdmlaksdln','asdjasoidjkasdkljaksld'];
const CONFIG = {
   key: 'koa:sess',   //cookie key (default is koa:sess)
   maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
   overwrite: true,  //是否可以overwrite    (默认default true)
   httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
   signed: true,   //签名默认true
   rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
   renew: false,  //(boolean) renew session when session is nearly expired,
};
server.use(session(CONFIG, server));


//导入bodyparser中间件
server.use(bodyParser());

//导入路由中间件
let router=new Router();

router.use('/api/',require('./routers/api.router'));

server.use(router.routes());


//设置静态文件
server.use(static(pathlib.resolve(__dirname,'www/')));  

