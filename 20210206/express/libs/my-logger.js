const fs=require('fs');
module.exports=function(req,res,next){
	//日志中间件
	let arr=[];
	
	//客户端ip
	// console.log(req.connection);
	
	//时间
	let oDate=new Date();
	arr.push(`[${oDate.toGMTString()}]`);
	//方式
	arr.push(req.method);
	
	//地址
	arr.push(req.url);
	
	fs.appendFile('logs/access.log',arr.join(' ')+'\n',(err)=>{
		if(err){
			console.log('日志写入失败',err);
		}
		next();
	});
};