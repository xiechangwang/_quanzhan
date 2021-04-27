const Koa=require('koa');
const Router=require('koa-router');

const server=new Koa();
const router=new Router();

router.use('/',require('./routers/tags.router'));

server.use(router.routes());

const prot=3000;
server.listen(prot,()=>{
    console.log(`loaclhost:${prot}`);
});
