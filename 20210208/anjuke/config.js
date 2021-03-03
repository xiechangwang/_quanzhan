module.exports={
	//服务器端口
	port:8080,
	
	//数据库接口
	mysql_host:'localhost',
	mysql_port:3306,
	mysql_url:'root',
	mysql_password:'root',
	mysql_database:'anjuke',
	
	//超级管理员配置
	root_username:'bule',
	//md5加密的密码（123456）
	root_password:'e10adc3949ba59abbe56e057f20f883e',	
	
	//数据表配置
	show_in_admin_house:'ID:ID,title:标题,ave_pice:均价,tel:电话',
	show_in_admin_broker:'ID:ID,title:名字',
	show_in_admin_link:'ID:ID,title:标题,type:类型,link:地址',
	show_in_admin_ad:'ID:ID,title:标题,type:类型,link:地址,expires:有效期',
	
}