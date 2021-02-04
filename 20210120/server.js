const http=require('http');

let server=http.createServer(function(req,res){
	console.log(req['headers'])
	res.setHeader('Access-Control-Allow-Origin','*');
	res.end();
})
server.listen(5050);
