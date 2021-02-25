const express=require('express');
const cookieSession = require('cookie-session')

let server=express();
server.listen(8080);

server.use(cookieSession({
	name:'session',
	keys:['key1'],
	secret:'dasd45asd12as',	//秘钥
}));

server.get('/',(req,res,next)=>{
	console.log(req.session);
	req.session.name='123456'
	res.end();
})