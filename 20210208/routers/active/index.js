const express=require('express');

let router_active=express.Router();

router_active.get('/',(req,res,next)=>{
	res.send('active');
	res.end()
})

module.exports=router_active;