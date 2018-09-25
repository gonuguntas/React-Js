import React from 'react';



class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name : "nag"
    }
  }

  componentDidMount(){
      this.setState({name:"gonugunta"});
  }

  render() {
    return (
      <div className="foo">
        <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
        </ul>
      </div>
    );
  }
}


export default A;

