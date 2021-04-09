import request from '../request';

export function getHomeList(options){
  let params=[];
  for(let key in options){
    params.push(`${key}=${options[key]}`);
  }
  params=params.join('&');
  
  return request({
    url:`/home?${params}`,
    method:'get',
  })
}