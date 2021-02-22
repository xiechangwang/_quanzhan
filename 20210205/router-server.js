const http=require('http');
const fs=require('fs');
const url=require('url');
const router=require('./libs/router');
const zlib=require('zlib');
const user=require('./libs/user');

http.createServer((req,res)=>{
	let {pathname,query}=url.parse(req.url,true);
	
	req.query=query;
	
	res.send=function(data){
		//a=arr|json|<data>
		if(!(data instanceof Buffer) && typeof data!='string'){
			data=JSON.stringify(data);
		}
		res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
		res.write(data);
	};
	//不是个接口
	if(false==router.emit(pathname,req,res)){
		//2文件
		let rs=fs.createReadStream(`www${pathname}`);
		let gz=zlib.createGzip();
		
		//设置头
		res.setHeader('Content-Encoding','gzip');
		
		rs.pipe(gz).pipe(res);	//先压缩后读文件
		
		//3读取失败
		rs.on('error',err=>{
			res.writeHeader(404);
			res.write('not found');
			res.end();
		})
	}else{
		//是个接口
			
	};
}).listen(8080);