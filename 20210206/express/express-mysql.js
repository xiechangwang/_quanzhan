const express=require('express');
const mysql=require('mysql');
const { v4: uuidv4 } = require('uuid');
const crypto=require('crypto');

let server=express();

server.listen(8080);

const db=mysql.createPool({host:'localhost',port:'3306',user:'root',password:'root',database:'20210223'});

//1.参数校验
server.get('/reg',(req,res,next)=>{
	let {user,pass}=req.query;
	// console.log(req.query);
	if(!user){
		res.send({code:1,msg:'user不能为空'});
	}else if(!pass){
		res.send({code:1,msg:'pass不能为空'});
	}else if(!/^\w{6,32}$/.test(user)){
		res.send({code:1,msg:'user必须是数字字母下划线，6~32位'});
	}else if(!/^.{6,}$/.test(pass)){
		res.send({code:1,msg:'pass最短6位'});
	}else{
		next();
	}	
});

//2.查询是否有这个用户
server.get('/reg',(req,res,next)=>{
	let {user,pass}=req.query;
	db.query(`SELECT * FROM user_table WHERE username='${user}'`,(err,data)=>{
		if(err){
			res.send({code:1,msg:'数据库问题1'});
		}else if(data.length>0){
			res.send({code:1,msg:'已存在'});
		}else{
			next();
		}
	})
});

//3.生成uuid，并且检测不能存在
server.get('/reg',(req,res,next)=>{
	_next();
	function _next(){
		let id=uuidv4().replace(/\-/g,'');
		db.query(`SELECT * FROM user_table WHERE ID='${id}'`,(err,data)=>{
			if(err){
				res.send({code:1,msg:'数据库问题2'});
			}else if(data.length>0){
				//id重复再调用自己
				_next();
			}else{
				//通过req传递参数
				req._uuid=id;
				next();
			}
		})
	}
});


//4.写入
server.get('/reg',(req,res,next)=>{
	let {user,pass}=req.query;
	//pass-md5加密
	const md5=crypto.createHash('md5');
	md5.update(pass);
	pass=md5.digest('hex');
	
	//通过req._uuid接收参数
	db.query(`INSERT INTO user_table (ID,username,password) VALUES('${req._uuid}','${user}','${pass}')`,(err)=>{
		if(err){
			res.send({code:1,msg:'注册失败'});
		}else{
			res.send({code:0,msg:'ok'});
		}	
	})
});


