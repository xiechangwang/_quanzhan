const express=require('express');
const bodyParser=require('body-parser');
const multer=require('multer');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const consolidate=require('consolidate');
const mysql=require('mysql');
const config=require('./config');
const cookieKey=require('./serct/cookie_key');	 
const sessionKey=require('./serct/session_key');	 

//构建服务
let server=express();
server.listen(config['port']);

//连接mysql
let db=mysql.createPool({host:config['mysql_host'],port:config['mysql_port'],user:config['mysql_url'],password:config['mysql_password'],database:config['mysql_database']});

server.use((req,res,next)=>{
	//db挂载到req身上
	req.db=db;
	next();
});


//中间件
//普通post数据
server.use(bodyParser.urlencoded({extended:false}));

//文件post数据
let multerObj=multer({dest:'./upload'});
server.use(multerObj.any());

//cookie
server.use(cookieParser(cookieKey));

//cookie-session
server.use(cookieSession({name:'session',keys:sessionKey}));

//模板
server.engine('html',consolidate.ejs)
server.set('view engine','html');
server.set('views','./template');

//处理请求
// let admin_router=express.Router();
server.use('/admin/',require('./routers/admin'));

// let www_router=express.Router();
server.use('/',require('./routers/www'));

//静态文件请求
server.use(express.static('./www/'));
