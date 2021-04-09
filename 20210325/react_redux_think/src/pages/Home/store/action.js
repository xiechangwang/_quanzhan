/* 
action.js
这里面定义异步方法。
dispatch派发
*/
import * as constant from './constant';

export const ADD_MSG=msg=>async (dispatch,getState)=>{
  console.log(msg);
  dispatch({
    //type为必选。后面参数可以自己定义
    type:constant.ADD,
    msg:msg,  
  })
}
