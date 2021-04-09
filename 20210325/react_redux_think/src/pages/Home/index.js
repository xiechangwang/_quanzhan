import React,{Component} from 'react';
import {connect} from 'react-redux';
// 引入-局部store中action方法
import {action} from './store';
import './index.css';
class About extends Component{
  constructor(props){
    super(props);
    this.state={};
    console.log(this.props);
  }
  render(){
    
    const {
      // 属性
      aa,
      msg,
      //action-方法
      handleClick,
    }=this.props;
    return(
      <div className="home_main">
        {
          msg
        }
        <button onClick={()=>handleClick()}>按钮</button>
      </div>
      
    )
  }
}
const mapStateToProps=(state)=>{
  return {
    //获取
    aa:state.home.aa,
    msg:state.home.msg,
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    handleClick(){
      let newMsg='456456aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      dispatch(action.ADD_MSG(newMsg));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(About);