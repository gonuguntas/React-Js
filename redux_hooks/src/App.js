import React from 'react';

import './App.css';
import Counter from './Hooks/redux/containers/counter';
import Grandmother from './Hooks/contextApi/grandMother';
import TextInputWithuseRefHook from './Hooks/useRefHook';
import CounterWithUseStateHook from './Hooks/useStateHook'
import CounterUseEffectHook from './Hooks/useEffectHook';
import CounterWithUseReducer from './Hooks/useReducerHook';
import CallbackHook from './Hooks/useCallbackHook';
import CustomHook from './Hooks/customHook';
import UseMemoHook from './Hooks/useMemoHook';

function App() {
  return (
    <div className="App">
        <h3>useState  Hook</h3>
        <CounterWithUseStateHook></CounterWithUseStateHook>
        <hr />
        <h3>useSelector  and useDispatch  Hooks</h3>
        <Counter></Counter>
        <hr />
        <h3>useContext Hook</h3>
        <Grandmother></Grandmother>
        <hr />
        <h3>useRef Hook</h3>
        <TextInputWithuseRefHook></TextInputWithuseRefHook>
        <hr />
        <h3>useEffect Hook</h3>
        <CounterUseEffectHook></CounterUseEffectHook>
        <hr />
        <h3>useReducer Hook</h3>
        <CounterWithUseReducer></CounterWithUseReducer>
        <hr />
        <h3>useCallback Hook</h3>
        <CallbackHook></CallbackHook>
        <hr />
        <h3>useMemo Hook</h3>
        <UseMemoHook></UseMemoHook>
        <hr />
        <h3>Custom Hook</h3>
        <CustomHook></CustomHook>
    </div>
  );
}

export default App;
