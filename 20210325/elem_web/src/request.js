import Axios from 'axios';

const axios=Axios.create({
  baseURL:'wql'
})

//请求拦截
axios.interceptors.request.use((config)=>{
  let token='*************';
  if(token)config.headers.sessionToken=token;
  return config;
},err=>{
  return Promise.reject(err);
})

//响应拦截
axios.interceptors.response.use((response)=>{
  console.log(response)
  //返回成功
  if(response.status===200){
    return Promise.resolve(response);  
  }else{
    return Promise.reject(response);
  }
},err=>{
  return Promise.reject(err);
});

export default axios;