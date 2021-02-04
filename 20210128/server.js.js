const express = require('express')
const http=require('http');
const paths = require('path');
const url=require('url');
const fs = require('fs');
const formidable = require('formidable');
const multer = require('multer')


let objMulter = multer({dest: './static/'})
 
// 基于express框架的node服务器
let server = express()
 
// 允许所有类型的文件传递过来
server.use(objMulter.any())
 
server.post('/upload', function(req,res){
	// 设置请求头为允许跨域
	res.header('Access-Control-Allow-Origin', '*');
    // 因为上传过来的文件名称比较复杂,我们需要给文件重新命名
    var newName = req.files[0].path	+'.'+ req.files[0].originalname.split('.')[req.files[0].originalname.split('.').length - 1];
	console.log(req.files)
    // 利用fs模块的文件重命名
    // req.files[0].path这个是文件的在传递中被修改的名字，newName是文件原名称,function回调函数
    fs.rename(req.files[0].path, newName, function(err){
        if(err){
            res.send('失败')
        }else{
            res.send('成功')
        }
    })
 
 
})
 
// 监听端口
server.listen(8081,function(){
    console.log('服务启动中~~')
});



