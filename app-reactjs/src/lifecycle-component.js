import React from 'react';

class Lifecycle extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: 0
      };
      console.log("constructor")
      this.setNewNumber = this.setNewNumber.bind(this)
   };

   componentWillMount(){
       console.log("Component will mount");
   }

   componentDidMount(){
       console.log("component did mounnt");
   }
   componentWillReceiveProps(newProps){
        console.log("component will receive Props");
   }

   shouldComponentUpdate(newProps, newState){
        return true;
   }

   componentWillUpdate(netProps, nextState){
       console.log("component will update");
   }

   componentDidUpdate(preProps, preState){
       console.log("component did update");
   }

   componentWillUnmount(){
       console.log("component will unmount");
   }
   
   setNewNumber() {
      this.setState({data: this.state.data + 1});
   }
   render() {

    console.log("render method");
      return (
         <div>
             <p>Check in console</p>
            <p>{this.state.data}</p>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Child />
         </div>
      );
   }
}
class Child extends React.Component {
    componentWillReceiveProps(newProps){
        console.log("component will receive Props");
   }
   render() {
       console.log("Child component");
      return (
        <div>
        </div>
      );
   }
}
export default Lifecycle;