const http=require('http');
const url=require('url');
const fs=require('fs');
const { v4: uuidv4 } = require('uuid');

let httpServer=http.createServer((req,res)=>{
	res.setHeader('Access-Control-Allow-Origin', '*');
	let {pathname,query}=url.parse(req.url,true);
	if(pathname=='/upBase64')
	{
		//注意：下面post接收方式有瑕疵
		//接受base64
		let str='';
		req.on('data',data=>{
			str+=data;
		});
		req.on('end',()=>{
			str=decodeURIComponent(str);
			str=str.replace(/data:[a-z\-]+(\/[a-z\-]+)?;base64,/i, "");	//去掉base64头
			//保存成文件
			fs.writeFile(`./static/${uuidv4().replace(/\-/g,'')}.png`,str,"base64",err=>{
				if(err){
					res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'})
					res.writeHeader(500);
					res.write('weite file error');
				}else{
					res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'})
					res.write('成功');
				}
				res.end();
			})
		});
		
		
	}else if(pathname=='/upPost'){
		//注意：下面post接收方式有瑕疵
		let str='';
		req.on('data',data=>{
			str+=data;
		});
		req.on('end',()=>{
			console.log('接收完了'+str);
			//保存成文件
			
		});
		res.write('成功');
		res.end();
	}
})

httpServer.listen(8080)