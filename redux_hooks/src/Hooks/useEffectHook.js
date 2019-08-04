 import React, { useState, useEffect } from 'react';

 function CounterUseEffectHook() {
    const [count, setCount] = useState(0)

    useEffect( () => {
        document.title = `You clicked ${count} times`;
    })
        
    
    return (
      <>
        <p> The Effect Hook perform side effects in functional components. It is a close replacement for 
              componentDidMount(), componentDidUpdate() and componentWillUnmount()
        </p>
        <h5>Count : {count}</h5>
        <button onClick={ ()=> setCount( count + 1)}>Count</button>      </>
    );
  }

  export default CounterUseEffectHook;



/*
export default class Aaa extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }

    componentDidMount(){
        document.title = `You clicked ${this.state.counter} times`;
    }

    componentDidUpdate(){
        document.title = `You clicked ${this.state.counter} times`;
    }
    render(){
        return(
            <div>
                <h5>Count : {this.state.counter}</h5>
                <button onClick={ ()=> this.setState({counter: this.state.counter + 1})}>Count</button>

            </div>
        )
    }

}
 */