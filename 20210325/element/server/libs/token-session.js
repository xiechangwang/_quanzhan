const redis=require('redis');
const config=require('../config');

const client=redis.createClient({
  host:config.REDIS_HOST,
  port:config.REDIS_PROT
})


module.exports=function(){
  return{
    get(token,key){
      return new Promise((resolve,reject)=>{
        client.get(`${token}_${key}`,(err,data)=>{
          if(err){
            reject(err);
          }else{
            resolve(data);
          }
        })
      })
    },
    set(token,key,val){
      return new Promise((resolve,reject)=>{
        client.set(`${token}_${key}`,val,err=>{
          if(err){
            reject(err);
          }else{
            resolve();
          }
        })
      })
    }
  }
}
