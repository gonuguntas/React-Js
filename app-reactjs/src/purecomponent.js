import React, { Component, PureComponent } from 'react';

    const Temp = (props)=> {
        console.log("render Temp");
        return (<div>{ props.value }</div>)
    }

/* export default class Purecomp extends Component {
        state = {
            value: 1
        }
    componentDidMount(){
        setInterval(()=>{
            this.setState(()=>{
                return { value : 1}

                // return { value : Math.random()}    // This case rerendering happens.
            });
        },1000);
    }
    shouldComponentUpdate(nextProp, nextState){
        // currentState & nectState are equal  returns false then it will not rerender 
        return (this.state.value === nextState.value ? false : true)
    }
    render(){
        console.log("render App");
        return (
            <div>
                <p>Pure Component check in console it will not rerender in PureComponent</p>
                <Temp value={this.state.value} />            </div>
        );
    }

}   */
export default class Purecomp extends PureComponent {
    state = {
        value: 1
    }
    /* in purecomponet  currentstate & nextstate are same then it will not rerender. 
         No need to go for  shouldComponentUpdate()  */
componentDidMount(){
    setInterval(()=>{
        this.setState(()=>{
            return { value : 1}
        });
    },1000);
}
render(){
    console.log("render App");
    return (
        <div>
            <p>Pure Component check in console it will not rerender in PureComponent</p>
            <Temp value={this.state.value} />            </div>
    );
}

}
