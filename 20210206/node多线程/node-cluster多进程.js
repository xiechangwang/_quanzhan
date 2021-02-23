const cluster = require('cluster');

//主进程才能fork
//isMaster:如果该进程是主进程，则为 true
if(cluster.isMaster){
	cluster.fork();
}


console.log('qi dong');