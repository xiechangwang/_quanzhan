const express=require('express');
// const querystring=require('querystring');
const myBodyParser=require('./libs/my-body-parser');
const myLogger=require('./libs/my-logger');

let server=express();
server.listen(8080);

//my-body-parser
//这里的use不写接口名，代表任何请求方式必须先经过这个操作再向下执行
// server.use((req,res,next)=>{
// 	let str='';
// 	req.on('data',(data)=>{
// 		str+=data;
// 	})
// 	req.on('end',()=>{
// 		// console.log(querystring.parse(str));
// 		req.body=querystring.parse(str);
// 		next();
// 	})
// });

//封装单独文件调用--等同于上面
server.use(myBodyParser.urlencoded);
//日志
server.use(myLogger);

server.post('/aaa',(req,res)=>{
	console.log(req.body);
});