const cluster = require('cluster');
const os=require('os');
const process=require('process');	//process（进程）

//主进程才能fork
//isMaster:如果该进程是主进程，则为 true
if(cluster.isMaster){
	// console.log(os.cpus().length)
	//根据内核创造子进程数量
	for(let i=0;i<os.cpus().length;i++){
		cluster.fork();
	}
	console.log('主进程');
}else{
	//process.pid 属性会返回进程的 PID
	console.log(`子进程${process.pid}`)
}


