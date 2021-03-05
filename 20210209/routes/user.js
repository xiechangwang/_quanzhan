const Router=require('koa-router');

let router=new Router();

router.get('/aaa',async (ctx,next)=>{
	ctx.response.body='aaaaa';
})

router.get('/ddd',async (ctx,next)=>{
	ctx.response.body='dddd';
})

module.exports=router.routes();