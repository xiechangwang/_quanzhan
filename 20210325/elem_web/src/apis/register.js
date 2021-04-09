import request from '../request';

export function sigin(options){
  return request({
    url:'/user',
    method:"post",
    data:options
  })
}