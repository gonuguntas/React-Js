 
 import React, { useState } from 'react';


 function CounterWithUseStateHook() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const [name, setName] = useState({firstName:"", lastName:""})

    const [items, setItems] = useState([])

    const incrementFive = () => {
        for(let i=0; i<5; i++){
            //setCount(count + 1);
            setCount( prevCount => prevCount + 1 );  // setState with previous value
        }
    }

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }]);
    }

    return (
      <>
        <p>Count : {count}</p>

        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={incrementFive}>Increment 5</button>

        <div>
        <h3>useState with objects</h3>
        <label>First Name</label>
        <input type="text" value={name.firstName} onChange={ e => setName({...name, firstName: e.target.value})} />
        <label>Last Name</label>
        <input type="text" value={name.lastName} onChange={ e => setName({...name, lastName: e.target.value})} />
        <h4>First Name is {name.firstName} </h4>
        <h4>Last Name is {name.lastName}</h4>
        <h4>{JSON.stringify(name)}</h4>
        </div>  

        <div>
            <h3>useState with Arrays</h3>
            <button onClick= {addItem}>Add a Number</button>
                <ul>
                    {items.map( item => (
                        <li key={item.id}>{item.value}</li>
                    ))}
                </ul>
        </div>
      </>
    );
  }

  export default CounterWithUseStateHook;
 