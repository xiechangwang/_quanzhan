const koa=require('koa');

let server=new koa();
server.listen(8080);


server.keys=['adsda4asd2as54as3d43a','4as3dsa54d56asd23as','sdf456sd1f23sdf8dsf123','asdas2d12asd315as4d6d2'];

server.use(async (ctx,next)=>{
	/*获取cookies
	 获取有签名的cookie时，有签名需要加,{signed:true}
	*/
	// console.log(ctx.cookies.get('aaaa',{signed:true}))
	
	/*设置cookies
	  signed=true--需要添加keys
	*/
	// ctx.cookies.set('aaaa','12asdjaksl',{maxAge:24*3600*1000,signed:true});
})


const session = require('koa-session');
const app = new koa();
 
app.keys = ['adf53asd456asd1asd465a'];
 
const CONFIG = {
	key: 'koa:sess', /**  cookie的key。 (默认是 koa:sess) */
    maxAge: 24*1000,   /**  session 过期时间，以毫秒ms为单位计算 。*/
    autoCommit: true, /** 自动提交到响应头。(默认是 true) */
    overwrite: true, /** 是否允许重写 。(默认是 true) */
    httpOnly: true, /** 是否设置HttpOnly，如果在Cookie中设置了"HttpOnly"属性，那么通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这样能有效的防止XSS攻击。  (默认 true) */
    signed: true, /** 是否签名。(默认是 true) */
    rolling: true, /** 是否每次响应时刷新Session的有效期。(默认是 false) */
    renew: false, /** 是否在Session快过期时刷新Session的有效期。(默认是 false) */
};
 
app.use(session(CONFIG, app));
// or if you prefer all default config, just use => app.use(session(app));
 
app.use(async (ctx,next) => {
  let n = ctx.session.views || 0;
  ctx.session.views = ++n;
  ctx.body = n + ' views';
});
 
app.listen(3000);
console.log('listening on port 3000');