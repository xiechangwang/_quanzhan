import React,{Component} from 'react';

class Info3 extends Component{
  render(){
    return(
      <div>
        info3............end

        <div>接收到的参数{this.props.match.params.id}</div>
      </div>
    )
  }
}

export default Info3;