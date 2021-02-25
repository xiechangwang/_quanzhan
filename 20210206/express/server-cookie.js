const express=require('express');
const cookieParser = require('cookie-parser')

let server=express();
server.listen(8080);

server.use(cookieParser('adasd45ada231'))

server.get('/',(req,res,next)=>{
	// console.log(req.cookies);
	console.log(req.signedCookies)
	
	//cookie(name,value,options)
	res.cookie('password','123456',{
		//domain
		//expires:date	有效时间
		//maxAge:int
		//path
		//secure:true	只用于https
		signed:true	//将signed设置为true，表示对cookie进行签名
	})
	
	res.end();
});