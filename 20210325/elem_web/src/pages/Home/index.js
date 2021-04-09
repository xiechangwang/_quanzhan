import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import './index.css';

//api-接口方法
import {getHomeList} from '../../apis/home';

class About extends Component{
  constructor(props){
    super(props);
    this.state={
      list:[],
    };
  }

  //钩子-挂在dom
  componentDidMount(){
    this.getList();
  }

  getList(){
    let current=0;
    let pagesize=8;
    let param={
      current,
      pagesize
    }
    //`current=${current}&pagesize=${pagesize}`
    getHomeList(param).then(res=>{
      console.log(res);
      let list=res.data;
      this.setState({list:list},function(){
        console.log(this.state.list);
      })
      
    },err=>{
      console.log(err);
    })
  }

    //注册
    sigup(event){
      this.props.history.push({pathname:'/register'});
    }

  render(){
    let list=this.state.list;
    let ALi=null;
    if(list.length>0){
      ALi=list.map((item)=>{
        return (
          <li key={item.ID}>
            <h5>{item.name}</h5>
            <p>{item.distance}</p> 
          </li>)
      })
    }
    return(
      <div className="home_main">
        <button onClick={(e)=>this.sigup(e)}>注册</button>
        <ul>
          {ALi}
         </ul>
      </div>
    )
  }
}
export default withRouter(About);