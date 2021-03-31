import React,{Component} from 'react';
import {HashRouter as Router,Switch,Route,Redirect } from 'react-router-dom';
import routersMap from './routerMap/index';

import NavBar from '../components/navBar';
/** 
 *此处路由引入注意:react不支持像vue的路由懒加载 
  const xx =()=>import('xx');
 */

export default class ORouter extends Component{
  render(){
    // 封装路由模块
    const routerModel=(rs)=>{
       return rs.map((item)=>{
              if(item.children&&item.children.length>0){
                  return (
                    <Route path={item.path} key={item.path} render={()=>
                          <item.component>
                          {
                            routerModel(item.children)
                          }
                          </item.component>
                    }></Route>)
              }else{
                  return (<Route path={item.path} key={item.path} component={item.component}></Route>)
          }
      })
    }

    return(
      <Router>
        <NavBar/>
        <Switch>
            {/* 路由重定向 */}
            <Route exact path="/" render={() => <Redirect to="/about" push />} />
            {
              routerModel(routersMap)
            }
         </Switch>
      </Router>
    )
  }

}
