import React, { useState, useMemo, useEffect } from 'react';

function UseMemoHook(){
    const [count, setCount] = useState(0);

    const incre = () => {
        setCount(count + 1);
    }
   
    const memoChild = useMemo(() => {       // useMemo returns  memorized value.
        return <Child></Child>
    }, [])                              //  Here you can pass count. If count changes memochild re-renders.
    
   /* 
    const memoChild = useMemo(() => {       
        return <Child></Child>
    }, [count])                   //  Here you can pass count. If count changes memochild re-renders.
    */
    
    return (
        <div>
            <h6>Count {count}</h6>
            <button onClick={incre}>Increment</button>
            <Child></Child>
            <h6>Memo render count</h6>
            <div> {memoChild} </div>
        
        </div>
    )
};

export default UseMemoHook;



let renderCount = 0;
function Child(){
    useEffect( ()=>{
        renderCount ++;
    } );
    return <div>Render Count is : {renderCount}</div>
}

