import React, { Component } from 'react';

import Funct from './components/funct';


class Memo extends Component {
    constructor(props) {
        super(props);
        this.state = { val:1 }
    }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({val:1});
            //console.log(this.state.val);
        },2000);
    }
    render() { 
        return ( <div>
                    {this.state.val}
                    <Funct val = {this.state.val}></Funct>
                </div> );
    }
}
 
export default Memo;


 /* React.memo() is similar to PureComponent in that it will help us control when our components rerender.
 Components will only rerender if its props have changed! Normally all of our React components in our tree will go through a render when changes are made.
  With PureComponent and React.memo(), we can have only some components render.

  PureComponent works with classes. React.memo() works with functional components.
  
 */