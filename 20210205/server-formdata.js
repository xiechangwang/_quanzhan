const http=require('http');
const url=require('url');
const queryString=require('querystring')

let server=http.createServer((req,res)=>{
	//get
	let {pathname,query}=url.parse(req.url,true);	//true解析query成json
	
	//post
	let aBuffer=[];
	req.on('data',data=>{
		aBuffer.push(data);
	});
	req.on('end',()=>{
		let data=Buffer.concat(aBuffer);	//buffer连接
		//multipart/form-data
		console.log(data.toString())
		/*
		------WebKitFormBoundaryohvCpaiz8H5q74mJ
		Content-Disposition: form-data; name="f1"; filename="20210205.text"
		Content-Type: text/plain
		
		文件内容区域
		
		------WebKitFormBoundaryohvCpaiz8H5q74mJ--
		*/
	});
	
})
	
server.listen(8080);