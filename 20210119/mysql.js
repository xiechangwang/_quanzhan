const mysql=require('mysql');
//连接池--共享
//1连接
let db=mysql.createConnection({host:"localhost",user:'root',password:'root',database :'20210119'});
// console.log(db)
//2查询数据
db.query('SELECT * FROM user_table',(err,data)=>{
	if(err){
		console.log(err);
	}else{
		console.log(JSON.stringify(data));
	}
});