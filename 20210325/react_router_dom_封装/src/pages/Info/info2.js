import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';


class Info2 extends Component{
  constructor(props){
    super(props);
    this.handleInfo3=this.handleInfo3.bind(this);
  }
  render(){
    return(
      <div>
        info2

        <div>
            <p onClick={this.handleInfo3}>info3</p>
            {/* 三级路由 */}
            {this.props.children}
        </div>
      </div>
    )
  }
  handleInfo3(){
    // 此处js跳转路由的模块必须要使用withRouter包裹组件
    let id='456'
    this.props.history.push({pathname:'/info/info2/info3/'+id});
  }
}

export default withRouter(Info2);