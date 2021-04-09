import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  } 
}

export default App;
