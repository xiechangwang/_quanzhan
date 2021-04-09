import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component{
  render(){
  return(
    <div>
          <NavLink to="/home">About</NavLink>
          <NavLink to="/food">Info</NavLink>
        </div>
  )
}
}