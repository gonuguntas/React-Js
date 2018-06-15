import React, { PropTypes } from 'react';



// to test components
//  npm test   
// https://github.com/vjwilson/enzyme-example-jest ----------git url

const propTypes = {};

const defaultProps = {};

class Foo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="foo">
        Bar
      </div>
    );
  }
}

Foo.propTypes = propTypes;
Foo.defaultProps = defaultProps;

export default Foo;
