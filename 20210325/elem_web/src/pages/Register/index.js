import React,{Component} from 'react';

import {sigin} from '../../apis/register';

class Register extends Component{
  constructor(props){
    super(props);
    this.state={
      user:'',
      pass:'',
      code:'',
      src:`http://localhost:8088/api/getCode`,
    }
  }


  //注册
  handelSub(){
    let {user,pass,code}=this.state;
    console.log(user+','+pass);
    sigin({username:user,password:pass,code:code}).then(res=>{
      let msg=res.data;
      if(msg.code==0){
        alert('注册成功');
      }else{
        alert(msg.msg);
      }
    },err=>{
      console.log(err);
    })
  }

  //获取验证码
  handelImg(){
    alert('1231313')
    this.setState({
      src:'http://localhost:8088/api/getCode?id=' + Math.random(),  //加上一个无用参数可实现刷新
    })
  }


  render(){
    return(
      <div>
        <form>
          <div>
            <label>
              用户名：
            </label>
            <input type="text" onChange={(e)=>this.setState({user:e.target.value})}/>
          </div>
          <div>
            <label>
              密码:
            </label>
            <input type="password" onChange={(e)=>this.setState({pass:e.target.value})} />
          </div>
          <div>
            <label>
              验证码:
            </label>
            <input type="text" onChange={(e)=>this.setState({code:e.target.value})} />
            <img src={this.state.src} onClick={()=>this.handelImg()} alt="es-lint want to get"/>
          </div>
          <button onClick={()=>this.handelSub()}>注册</button>
        </form>

      </div>

    )
  }
}

export default Register;