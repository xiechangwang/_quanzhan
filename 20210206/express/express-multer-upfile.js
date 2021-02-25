const express=require('express');
const multer=require('multer');
const fs=require('fs');
const path=require('path');


let server=express();
server.listen(8080);

//dest:上传哪里的路径
let multerObj=multer({dest:'./upload/'})

//multer
server.use(multerObj.any());

server.post('/upload',(req,res)=>{
	let i=0;
	_next();
	function _next(){
		//获取源文件拓展名
		let ext=path.extname(req.files[i].originalname);
		let newName=req.files[i].path + ext;
		//重命名:fs.rename('旧文件.txt路径名', '新文件.txt路径名',(err)=>{})
		fs.rename(req.files[i].path,newName,(err)=>{
			if(err){
				res.sendStatus(500,'rename error');
				res.end();
			}else{
				i++
				//判断files是不是结束
				if(i>=req.files.length){
					res.send('完成');
					res.end();
				}else{
					_next();
				}
			}
		});
	}
	
});