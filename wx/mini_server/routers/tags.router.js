const Router=require('koa-router');

const router=new Router();

router.get('tags',async (ctx)=>{
  const tags=["推荐","影视","音乐","搞笑","娱乐","生活","aaa","ccc"];
  ctx.body=tags;
});

module.exports = router.routes();