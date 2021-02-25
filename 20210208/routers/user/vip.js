const express=require('express');

//user下面一级路由
let router_vip=express.Router();

router_vip.get('/',(req,res)=>{
	res.send('vip');
	res.end();
})

module.exports=router_vip;