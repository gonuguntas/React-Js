import React from 'react';



class B extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
    render() {
      const { count } = this.state;
      return (
        <div>
          <div className={`clicks-${count}`}>
            {count} clicks
          </div>
          <a href="url" onClick={() => { this.setState({ count: count + 1 }); }}>
            Increment
          </a>

            <span ref="firstRef" amount={2}>First</span>
            <span ref="secondRef" amount={4}>Second</span>
            <span ref="thirdRef" amount={8} name={"nag"}>Third</span>

        
        </div>
      );
    }
  }


export default B;

class ChildOfB extends React.Component {
   
    render() {
      return (
        <div>
         
        </div>
      );
    }
  }

 