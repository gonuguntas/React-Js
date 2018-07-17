import React from 'react';
import Child from './Child';

export default class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0
         }
         this.updatecounter = this.updatecounter.bind(this);
      };
      updatecounter() {
         this.setState({counter: this.state.counter + 1});
      }

render(){
    return (
        <div> 
            <p>Counter</p>
            <p>{this.state.counter}</p>
            
            <Child updateparent={this.updatecounter} />
            <b>chid to parent component communication</b>
            <p>Calling Parent Component function using Child Component</p>
        </div>
    )
}

}