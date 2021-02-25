const express=require('express');
const mysql=require('mysql');
const consolidate=require('consolidate');

//连接服务器
let db=mysql.createPool({host:'localhost',user:'root',password:'root',database:'20210223'});

let server=express();
server.listen(8080);

//1、选择一种模板引擎
server.engine('html',consolidate.ejs)

//2、指定模板文件的拓展名
server.set('view engine', 'html');

//3、指定模板文件路径
server.set('views', './template');

server.get('/aaa',(req,res,next)=>{
	db.query('SELECT * FROM user_table',(err,data)=>{
		if(err){
			res.send('error db')
			res.end();
		}else{
			console.log(data)
			res.render('index',{arr:data})	
		}
	})
})