const router=require('./router');

let users={}

router.on('/login',(req,res)=>{
	let {user,pass}=req.query;
	console.log(user,pass)
	if(!users[user]){
		res.send({code:1,msg:"用户不存在"});
		res.end();
	}
	else if(users[user]!=pass){
		res.send({code:1,msg:"用户或密码不对"});
		res.end();
	}
	else{
		res.send({code:0,msg:"成功"});
		res.end();
	}
});

router.on('/reg',(req,res)=>{
	let {user,pass}=req.query;
	if(users[user]){
		res.send({code:1,msg:"用户已存在"});
		res.end();
	}else{
		users[user]=pass
		
		res.send({code:0,msg:"成功"});
		res.end();
	}
});

