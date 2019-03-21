import React, { Component, lazy, Suspense } from 'react';
//mport Child from './Child';

const Child = lazy( ()=> import('./Child'));

export default class Parent extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            text: "Increment"
         }
         this.updatecounter = this.updatecounter.bind(this);
      };
      updatecounter() {
         this.setState({counter: this.state.counter + 1});
      }
/* The React.lazy function lets you render a dynamic import as a regular component
 React.lazy and Suspense is not yet available for server-side rendering. 
 If you want to do code-splitting in a server rendered app, we recommend Loadable Components. */

 render(){
    return (
        <Suspense fallback = {<div>Loading ........</div>}>
        <div> 
            <h4>Dynamic import using React.Lazy</h4>  <hr color='green'></hr>
            <p>Counter</p>
            <p>{this.state.counter}</p>
            
            <Child updateparent={this.updatecounter} updateText= { this.state.text }/>
            <b>chid to parent component communication</b>
            <p>Calling Parent Component function using Child Component</p>
        </div>
        </Suspense>
    )
}

}