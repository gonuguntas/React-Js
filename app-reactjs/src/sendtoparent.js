import React from 'react';

class Sendtoparent extends React.Component {

    constructor() {
        super();
        this.handleData = this.handleData.bind(this);
        this.state = {
          fromChild: ''
        };
      }
      
      handleData(data) {
        this.setState({
          fromChild: data
        });
      }
      
      render() {
        return (
          <div>
            <InputFoo handlerFromParant={this.handleData} /> 
            <h5>Received by parent:<br />{this.state.fromChild}</h5>

            <Sibling siblingdata={this.state.fromChild}>Received by Sibling Component</Sibling>
          </div>
        );
      }  
}


class InputFoo extends React.Component {
    constructor() {
      super();
      this.handleChange = this.handleChange.bind(this);
      this.submitHandler = this.submitHandler.bind(this);
      this.state = {
        inputField: ''
      };
    }
    
    submitHandler(evt) {
      evt.preventDefault();
      // pass the input field value to the event handler passed
      // as a prop by the parent (App)
      this.props.handlerFromParant(this.state.inputField);
      
      this.setState({
        inputField: ''
      });
    }
    
    handleChange(event) {
      this.setState({
        inputField: event.target.value
      });
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.submitHandler}>
            <input type="text" 
                   id="theInput" 
                   value={this.state.inputField} 
                   onChange={this.handleChange} />
            <input type="submit" />
          </form>
          <h5>Visible in child:<br />{this.state.inputField}</h5>
        </div>
      );
    }
  }


  class Sibling extends React.Component {  
    render() {
      return (
        <div>
           {this.props.children} <p>{this.props.siblingdata}</p>
        </div>
      );
    }
  }

export default Sendtoparent;