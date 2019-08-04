import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

function Counter() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Counter: {counter}</h2>
      <button onClick={(()=>dispatch({type:"INCREMENT"}))}>INCREMENT</button>
      <button onClick={(()=>dispatch({type:"DECREMENT"}))}>DECREMENT</button>
    </div>
  );
}

export default Counter;