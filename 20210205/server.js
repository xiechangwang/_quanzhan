const http=require('http');
const url=require('url');
const queryString=require('querystring')

let server=http.createServer((req,res)=>{
	//get
	let {pathname,query}=url.parse(req.url,true);	//true解析query成json
	
	console.log(pathname)
	//post
	req.on('data',data=>{
		console.log(data.toString());
	});
	req.on('end',()=>{});
	
})
	
server.listen(8080);