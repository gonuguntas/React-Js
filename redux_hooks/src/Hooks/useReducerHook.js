import React, { useReducer } from "react";


const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function CounterWithUseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns
           the current state paired with a dispatch method. (If you’re familiar with Redux,
            you already know how this works.)
      </p>
      <p>
        useReducer is usually preferable to useState when you have complex state logic that involves multiple
         sub-values or when the next state depends on the previous one. useReducer also lets you
          optimize performance for components that trigger deep updates because
           you can pass dispatch down instead of callbacks.
      </p>
      <h5>Count : {count}</h5>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </>
  );
}

export default CounterWithUseReducer;