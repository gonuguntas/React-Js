import React from 'react';
import { shallow, mount, render } from 'enzyme';

// to test components
//  npm test   
import A from '../A';

describe('A component', function() {
  it('should render without throwing an error', function() {
    expect(mount(<A />).contains(<div className="foo">
    <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
    </ul>
  </div>)).toBe(true);
  });


  it("list items length must be 4",function(){
      expect(shallow(<A />).find('ul').children().length).toBe(4);
  });

  it("first list item text is a ",function(){
    expect(shallow(<A />).find('ul').childAt(0).text()).toBe('a');
  });
  it("element has class foo ",function(){
    expect(shallow(<A />).find('.foo').hasClass('foo')).toBe(true);
  });

  it("element is div ",function(){
    expect(shallow(<A />).name()).toBe('div');
  });

  it("ul parent is div ",function(){
    expect(shallow(<A />).find('ul').parent().is('div')).toBe(true);
  });

  it("li parents length must be 2 ",function(){
    expect(shallow(<A />).find('ul').parents().length).toBe(1);
  });

  it("name in Constructor state is nag ",function(){
    expect(shallow(<A />).state('name')).toBe('nag');
  });

  it("name in DidMount state is gonugunta ",function(){
    expect(mount(<A />).state('name')).toBe('gonugunta');
  });
});

/*

Shallow
Real unit test (isolation, no children render)

Simple shallow
Calls:
constructor
render
Shallow + setProps
Calls:

componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render
Shallow + unmount
Calls:
componentWillUnmount


Mount
The only way to test componentDidMount and componentDidUpdate.
 Full rendering including child components. Requires a DOM (jsdom, domino). More constly in execution time. 

Simple mount
Calls:
constructor
render
componentDidMount

Mount + setProps
Calls:
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate

Mount + unmount
Calls:
componentWillUnmount


Render
only calls render but renders all children.

So my rule of thumbs is:

Always begin with shallow
If componentDidMount or componentDidUpdate should be tested, use mount
If you want to test component lifecycle and children behavior, use mount
If you want to test children rendering with less overhead than mount and
 you are not interested in lifecycle methods, use render

 */