const http = require('http');
const fs = require('fs');
const url = require('url');
const mysql = require('mysql');
const io = require('socket.io');
const regs=require('./libs/regs.js');
//数据库
let db = mysql.createPool({
	hort: 'localhost',
	user: 'root',
	password: 'root',
	database: '20210119'
});

//1、http服务		  
let httpServer = http.createServer((req,res)=>{
	fs.readFile(`www${req.url}`, (err, data) => {
		if (err) {
			res.writeHead(404);
		} else {
			res.write(data)
		}
		res.end();
	});
});
httpServer.listen(8080,'127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');

let aSock=[];
//2.websocket服务器
let webServeer=io(httpServer);
webServeer.on('connection',sock=>{
	aSock.push(sock);
	//登录标志
	let cur_username='';
	let	cur_userID=0;
	
	//注册	
	sock.on('reg',(user,pass)=>{
		console.log(user,pass)
		//检验数据
		if(!regs.username.test(user)){
			sock.emit('reg_ret',1,'用户名不符合')
		}else if(!regs.password.test(pass)){
			sock.emit('reg_ret',1,'密码不符合规范')
		}else{
			//用户名是否存在
			db.query(`SELECT ID FROM user_table WHERE username='${user}'`,(err,data)=>{
				if(err){
					sock.emit('reg_ret',1,'数据库有问题')
				}else if(data.length>0){
					sock.emit('reg_ret',1,'用户名已存在')
				}else{
					//插入数据
					db.query(`INSERT INTO user_table (username,password,online) VALUES('${user}','${pass}',0)`,(err,data)=>{
						if(err){
							sock.emit('reg_ret',1,'失败')
						}else{
							sock.emit('reg_ret',0,'成功')
						}
					})
				}
			});
		}	
	});
	
	//登录
	sock.on('login',(user,pass)=>{
		//1.检验数据
		if(!regs.username.test(user)){
			sock.emit('login_ret',1,'用户名不符合');
		}else if(!regs.password.test(pass)){
			sock.emit('login_ret',1,'密码不符合规范')
		}else{
			//2.用户信息-数据库查询
			db.query(`SELECT ID,username,password FROM user_table WHERE username='${user}'`,(err,data)=>{
				if(err){
					sock.emit('login_ret',1,'数据库错误')
				}else if(data.length==0){
					sock.emit('login_ret',1,'用户不存在')
				}else if(data[0].password!=pass){
					sock.emit('login_ret',1,'密码错误')
				}else{
					//3.修改登录状态
					db.query(`UPDATE user_table SET online=1 WHERE ID=${data[0].ID}`,err=>{
						if(err){
							sock.emit('login_ret',1,'数据库错误')
						}else{
							sock.emit('login_ret',0,'登录成功')
							cur_username=data[0].username;
							cur_userID=data[0].ID;
						}
					})
				}
			})
		}
	});
	
	//发言
	sock.on('msg',txt=>{
		if(!txt){
			sock.emit('msg_ret',1,"消息文本不能为空")
		}else{
			//广播给所有人
			aSock.forEach(item=>{
				if(item==sock)return;
				item.emit('msg',cur_username,txt)
			});
			sock.emit('msg_ret',0,'发送成功');
		}
	})

	//离线(disconnect)离线事件是定义好的
	sock.on('disconnect',function(){
		db.query(`UPDATE user_table SET online=0 WHERE ID=${cur_userID}`,err=>{
			if(err){
				console.log('数据库有误',err);
			}	
			cur_userID=0;
			cur_username="";
			aSock=aSock.filter(item=>item!=sock);
		})
	})
});