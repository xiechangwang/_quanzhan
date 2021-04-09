import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Info extends Component{
  render(){
    return(
      <div>
        info
        <Link to="/info/info2">info2</Link>
        {this.props.children}
      </div>
    )
  }
}