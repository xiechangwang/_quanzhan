/* 
  统一状态
*/
import * as constant from './constant';

//定义state仓库
const defaultState={
  msg:'456456464',
  aa:'456456464644',
}


const reducer=(state=defaultState,action)=>{
  /* 
    这边返回action中type属性
    然后switch判断
  */
  switch(action.type){
    case constant.ADD:
      //修改指定值，没有修改部分也需要返回
      return {...state,msg:action.msg};
    default:
      return state;
  }
}

export default reducer;