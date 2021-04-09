import React,{Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return (
      <Provider store={store}>
      <div>
        {this.props.children}
      </div>
      </Provider>
    )
  } 
}

export default App;
