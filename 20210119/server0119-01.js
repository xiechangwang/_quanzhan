const http = require('http');
const fs = require('fs');
const url = require('url');
const mysql = require('mysql');
const io = require('socket.io');
const regs=require('./libs/regs.js');
//数据库
let db = mysql.createPool({
	hort: 'localhost',
	user: 'root',
	password: 'root',
	database: '20210119'
});

//1、http服务		  
let httpServer = http.createServer((req,res) => {
	
	let {pathname,query}=url.parse(req.url,true);
	
	if (pathname == '/reg') {
		//注册接口
		let {user,pass}=query;
		
		//1.校验数据
		if(!regs.username.test(user)){
			res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
			res.write(JSON.stringify({code:1,msg:'用户名不符合规范'}));
			res.end();
		}else if(!regs.password.test(pass)){
			res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
			res.write(JSON.stringify({code:1,msg:'密码不符合规范'}));
			res.end();
		}else{
		//2.检验用户名是否重复
		console.log(db)
		db.query('SELECT * FROM user_table WHERE username="'+user+'"',(err,data)=>{
			if(err){
				res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
				res.write(JSON.stringify({code:1,msg:'服务器挂了'}));
				res.end();
			}else if(data.length>0){
				res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
				res.write(JSON.stringify({code:1,msg:'此用户名存在'}));
				res.end();
			}else{
			//3.插入数据
			db.query(`INSERT INTO user_table (username,password,online) VALUES('${user}','${pass}',0)`,err=>{
				console.log(err)
				if(err){
					res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
					res.write(JSON.stringify({code:1,msg:'数据错误'}));
					res.end();
				}else{
					res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
					res.write(JSON.stringify({code:0,msg:'注册成功'}));
					res.end();
				}
			})
			}	
		})
		
		}
	} else if (pathname == '/login') {
		//登录接口
		// console.log('请求了登录')
		let {user,pass}=query;
		//1.校验数据
		if(!regs.username.test(user)){
			res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
			res.write(JSON.stringify({code:1,msg:'用户名不符合规范'}));
			res.end();
		}else if(!regs.password.test(pass)){
			res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
			res.write(JSON.stringify({code:1,msg:'密码不符合规范'}));
			res.end();
		}else{
			db.query(`SELECT ID,password FROM user_table WHERE username='${user}'`,(err,data)=>{
				if(err){
					res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
					res.write(JSON.stringify({code:1,msg:'数据库出错'}));
					res.end();
				}else if(!data||data.length==0){
					res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
					res.write(JSON.stringify({code:1,msg:'此用户名不存在'}));
					res.end();
				}else if(data[0].password!=pass){
					res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
					res.write(JSON.stringify({code:1,msg:'密码不正确'}));
					res.end();
				}else{
					//3.设置登录状态
					db.query(`UPDATE user_table SET online=1 WHERE ID=${data[0].ID}`,(err,data)=>{
						if(err){
							res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
							res.write(JSON.stringify({code:1,msg:'登录失败'}));
							res.end();
						}else{
							res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
							res.write(JSON.stringify({code:0,msg:'登录成功'}));
							res.end();
						}	
					})
				}	
			});
		}
	} else {
		fs.readFile(`www${pathname}`, (err, data) => {
			if (err) {
				res.writeHead(404);
			} else {
				res.write(data)
			}
			res.end();
		});
	}
});
httpServer.listen(8080)
