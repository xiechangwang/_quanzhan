import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component{
  render(){
  return(
    <div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/info">Info</NavLink>
        </div>
  )
}
}