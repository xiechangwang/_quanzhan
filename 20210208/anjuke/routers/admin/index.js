const express=require('express');
const config=require('../../config');
const common=require('../../libs/common');

let router=express.Router();

module.exports=router;

//进入所有的admin相关页面之前，都要校验用户身份-如果没登录过->去登陆(/admin/login)
//'所有路由拦截、除了/admin/login'
router.use((req,res,next)=>{
	if(!req.session['admin_ID']&&req.url!='/login'){
		res.redirect('/admin/login');	//重定向
	}else{
		next();
	}
});

//服务端-渲染login页面
router.get('/login',(req,res)=>{
	let error_msg='';
	res.render('login',{error_msg:error_msg});
});

//login-post接口
router.post('/login',(req,res)=>{
	// delete req.session['admin_ID']
	// console.log(req.session)
	
	let {user,pass}=req.body;	//经过bodyParser中间件解析
	let error_msg='';
	
	//判断两次
	if(user==config.root_username){
		if(common.md5(pass)==config.root_password){
			console.log('超级管理员已登录');
			req.session['admin_ID']='1';
			res.redirect('/admin/');	//重定向到admin根路径
		}else{
			showError('用户名或密码出现错误');
		}
	}else{
		//非超级管理员
		req.db.query(`SELECT * FROM admin_table WHERE username='${user}'`,(err,data)=>{
			if(err){
				showError('数据库出错');
			}else if(data.length<=0){
				showError('用户名或密码出现错误');
			}else{
				if(common.md5(pass)==data[0].password){
					console.log('普通管理员登录成功');
					req.session['admin_ID']=data[0].ID;
					res.redirect('/admin/');	//重定向到admin根路径
				}else{
					showError('用户名或密码出现错误');
				}
			}	
		});
	}
	function showError(msg){
		res.render('login',{error_msg:msg});
	}
});



