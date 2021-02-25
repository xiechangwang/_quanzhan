const express=require('express');
const router_user=require('./routers/user');
const router_active=require('./routers/active');


let server=express();
server.listen(8080);

// //--------Router user----
// let router_user=express.Router();
server.use('/user',router_user);

// router_user.get('/',(req,res,next)=>{
// 	res.send('user');
// 	res.end()
// })

// router_user.get('/login',(req,res,next)=>{
// 	res.send('user login');
// 	res.end()
// })

// //--------Router user/vip-------
// //user下面一级路由
// let router_vip=express.Router();
// router_user.use('/vip',router_vip);	//把vip-use到user身上
// router_vip.get('/',(req,res)=>{
// 	res.send('vip');
// 	res.end();
// })


// //--------Router active----
// let router_active=express.Router();
server.use('/active',router_active);

// router_active.get('/',(req,res,next)=>{
// 	res.send('active');
// 	res.end()
// })