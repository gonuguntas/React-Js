import React from 'react';
import ReactDOM from 'react-dom';

class Reference extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         data: ''
      }
      this.updateState = this.updateState.bind(this);
      this.clearInput = this.clearInput.bind(this);
   };
   updateState(e) {
      const val = e.target.value
      e.persist();
      /*
      If you want to access the event properties in an asynchronous way, 
      you should call event.persist() on the event, which will remove the synthetic event
      from the pool and allow references to the event to be retained by user code.

      synthetic event--- in asynchronous cann't access event properties directly 
       
      without  e.persist() --- This synthetic event is reused for performance reasons. 
      If you're seeing this, you're accessing the property `target` on a released/nullified synthetic event.
      This is set to null. If you must keep the original synthetic event around, use event.persist().
      */
      setTimeout(() => {
         this.setState({data: val});
         console.log(e.target.tagName);    
      }, 0);

   }
   clearInput() {
      this.setState({data: ''});
      ReactDOM.findDOMNode(this.refs.myInput).focus();
   }
   render() {
      return (
         <div>
             <p><b>Ref : </b>The ref is used to return a reference to the element. --- Synthetic event</p>
            <input value = {this.state.data} onChange = {this.updateState} 
               ref = "myInput"></input>
            <button onClick = {this.clearInput}>CLEAR</button>
            <h4>data : {this.state.data}</h4>
         </div>
      );
   }
}
export default Reference;