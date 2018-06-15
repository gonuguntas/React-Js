import React from 'react';
import { shallow, mount, render } from 'enzyme';

// to test components
//  npm test   
import B from '../B';

describe('B component', function() {

    const wrapper = mount(<B />);

  it('clicks length should be 1', function() {
    expect(wrapper.find('.clicks-0').length).toBe(1);
  });

// event testing
  it('click event', function() {
    expect(wrapper.find('a').simulate('click'));
  });

  // keys 
  it('keys testing bar', function() {
    expect(keystest.at(1).key()).toBe('bar');
  });
 
  // prop & ref testing
  it('second ref prop amount must be 4', function() {
    expect(wrapper.ref('secondRef').prop('amount')).toBe(4);
  });

   // props & ref testing
   it('second ref props method amount must be 4', function() {
    expect(wrapper.ref('secondRef').props().amount).toBe(4);
  });

  // ref testing
  it('second ref text must be Second', function() {
    expect(wrapper.ref('secondRef').text()).toBe('Second');
  });
 
  it('Third ref prop name must be nag', function() {
    expect(wrapper.ref('thirdRef').prop('name')).toBe('nag');
  });

  // type method
  it('type method testing', function() {
    expect(wrapper.type()).toBe(B);
  });


  



// keys testing.
  
  const keystest = mount((
    <ul>
      {['foo', 'bar'].map(s => <li key={s}>{s}</li>)}
    </ul>
  )).find('li');

  it('keys testing foo', function() {
    expect(keystest.at(0).key()).toBe('foo');
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