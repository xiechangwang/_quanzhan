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
		//urlencoded--post默认数据格式
		const post=queryString.parse(data.toString());
		console.log(post)
	});
	
})
	
server.listen(8080);