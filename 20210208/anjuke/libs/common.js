const crypto=require('crypto');
const { v4: uuidv4 } = require('uuid');

module.exports={
	md5(str){
		let obj=crypto.createHash('md5');
		obj.update(str);
		return obj.digest('hex');
	},
	uuidv4(){
		let uuid=uuidv4().replace(/\-/g,'');
		return uuid;
	}
	
}	