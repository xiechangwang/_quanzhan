const koa=require('koa');
const koa_static=require('koa-static')
let server=new koa();
server.listen(8080);

// server.use(async function (ctx,next){
// 	console.log(arguments);
// })

//1、接口-koa-route
const route=require('koa-route');
server.use(route.get('/a',async (ctx,next)=>{
	// ctx.req
	// ctx.res
	// ctx.request
	// ctx.response
	//动态路由接参数
	//.get('/name/:params',(ctx,next,params)=>{params:value});
	//get--前端？后面的参数接收
	//ctx.request.query
	//post--接收参数
	
}));

//接口-module:koa-router
const Router = require('koa-router');
let router =new Router();

server.use(router.routes())

router.get('/data/:page',async (ctx, next) => {
  console.log(ctx.params)
  ctx.response.body='456465';
});

//koa-router模块引入
router.use('/user',require('./routes/user'));


/*
中间件-koa-better-body
中间件-koa-convert	解决generators函数不支持的警告
*/
const body=require('koa-better-body');
const convert=require('koa-convert')

server.use(convert(body({
	uploadDir: path.resolve(__dirname, './static/upload') //指定文件上传路径
	keepExtensions: 'true' //文件是否需要扩展名
})));

server.use((ctx)=>{
	console.log('456465')
})


