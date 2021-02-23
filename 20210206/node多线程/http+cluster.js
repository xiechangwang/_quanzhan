const http=require('http');
const url=require('url');
const fs=require('fs');
const cluster = require('cluster');
const os=require('os');
const process=require('process');	//process（进程）

//主进程才能fork
if(cluster.isMaster){//isMaster:如果该进程是主进程，则为 true 创建子进程
	//根据内核创造子进程数量
	for(let i=0;i<os.cpus().length;i++){
		cluster.fork();
	}
	console.log('主进程');
}else{
	// 子进程程序
	http.createServer((req,res)=>{
		let {pathname,query}=url.parse(req.url,true);
		
		console.log(`由${process.pid}处理！`)
		
		let rs=fs.createReadStream(`../www${pathname}`);
		rs.pipe(res);
		
		rs.on('error',err=>{
			res.writeHeader(404,{'Content-Type':'text/plain;charset=utf-8'});
			res.write('not found');
			res.end();
		});
		
	}).listen(8080);
}


