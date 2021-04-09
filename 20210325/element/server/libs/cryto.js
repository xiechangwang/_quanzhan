const cryto= require('crypto');

const md5=(str)=>{
  let m=cryto.createHash('md5');
  m.update(str,'utf8');
  return m.digest('hex').toUpperCase();
}

module.exports=md5;