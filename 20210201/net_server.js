const net = require('net');
const crypto = require('crypto');

//创建一个tcp服务器
let server = net.createServer(socket => {
	console.log('连接socket')
	socket.once('data', data => {
		//1、接收头部

		//第一步，把数据转换成header的json
		let str = data.toString();
		let aHeaders = str.split('\r\n');
		aHeaders.shift(); //去除第一个
		aHeaders.pop(); //去除数组最后空字符串
		aHeaders.pop(); //去除数组最后空字符串
		let headers = [];
		aHeaders.forEach(str => {
			let [name, value] = str.split(': ');
			headers[name] = value;
		});

		//第二步，校验
		if (headers['Connection'] != 'Upgrade' || headers['Upgrade'] != 'websocket') {
			console.log('接收到一个ws以外的协议，扔了~')
			socket.end();
		} else {
			//第三步、处理webSocket专有头
			if (headers['Sec-WebSocket-Version'] != 13) {
				console.log('接收到一个13以外的版本，扔了~')
				socket.end();
			} else {
				//第四步、处理key
				// + 99BA5433-DF5F-A898-C8E0-78B8BA55F251（GUID）
				let secWebSocketKey = headers['Sec-WebSocket-Key'];
				//计算websocket校验
				let secWebSocketAccept = getSecWebSocketAccept(secWebSocketKey);
				//服务端响应的内容
				let res = [
					'HTTP/1.1 101 Switching Protocols',
					'Upgrade: websocket',
					`Sec-WebSocket-Accept: ${secWebSocketAccept}`,
					'Connection: Upgrade',
					'\r\n'
				].join('\r\n');
				//给客户端发送响应内容
				socket.write(res);
				
				//注意这里不要断开连接，继续监听'data'事件
				socket.on('data', (buffer)=> {
							
				});
			}
		}
		// console.log(str);
	});

	socket.on('end', () => {
		console.log('断开连接~')
	})
});

server.listen(8088);


//计算websocket校验
function getSecWebSocketAccept(key) {
	return crypto.createHash('sha1')
		.update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')
		.digest('base64');
}
