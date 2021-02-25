const express=require('express');
const router_vip=require('./vip');

let router_user=express.Router();

router_user.get('/',(req,res,next)=>{
	res.send('user');
	res.end()
})

router_user.get('/login',(req,res,next)=>{
	res.send('user login');
	res.end()
})

router_user.use('/vip',router_vip);	//把vip-use到user身上

module.exports=router_user;