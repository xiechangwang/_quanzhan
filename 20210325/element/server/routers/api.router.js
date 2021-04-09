const Router = require('koa-router');

const db = require('../libs/database');
const md5 = require('../libs/cryto');

let router = new Router();

router.get('home', async (ctx, next) => {
  console.log(ctx.query);
  let { c, p } = ctx.query;
  let current = c | 0;
  let pagesize = p | 8;
  let datas = await db.query(`SELECT * FROM restaurant_table limit ${current},${pagesize}`);
  ctx.response.body = datas;
})


//注册
router.post('user', async (ctx) => {
  //获取前台参数body体中
  let { username, password, code } = ctx.request.body;
  if (!username) {
    ctx.body = { code: 1, msg: 'user not null' }
    return;
  }

  if (!password) {
    ctx.body = { code: 1, msg: 'pass not null' }
    return;
  }

  if (!code) {
    ctx.body = { code: 1, msg: 'code not null' }
    return;
  }

  let sessionCode = ctx.session.code.toUpperCase();
  if (sessionCode != code.toUpperCase()) {
    ctx.body = { code: 1, msg: '验证码错误' }
  } else {
    password = md5(password); //密码md5加密
    let datas = await db.select('user_table', '*', { 'username': username, 'password': password });
    if (datas.length > 0) {
      ctx.response.body = { code: 1, msg: '用户已存在' };
    } else {
      await db.insert('user_table', { 'username': username, 'password': password });
      ctx.response.body = { code: 0, msg: '注册成功' }
    }
  }
})


const svgCaptcha = require('svg-captcha');
//获取code
router.get('getCode', async (ctx) => {
  let captcha = svgCaptcha.create({
    size: 4, //位数
    fontSize: 50,  //字体大小
    width: 120,
    height: 34,
    background: '#cc9966',
  })
  //保存生成的验证结果
  ctx.session.code = captcha.text;

  //设置相应头
  ctx.response.type = 'image/svg+xml';

  ctx.body = captcha.data;
})

module.exports = router.routes();
