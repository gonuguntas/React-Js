import React, { useState, useCallback } from 'react';

// Keeps track of all created functions during the app's life 
const functions = new Set();

function CallbackHook() {

    const [c1, setC1] = useState(0);
    const [c2, setC2] = useState(0);

    //const increment1 = () => setC1(c1 + 1);
    //const increment2 = () => setC2(c2 + 1);

    // Cache/memoize the functions - do not create new ones on every rerender
    // Let's ignore the dependencies for now - i.e. use []

    //const increment1 = useCallback(() => setC1(c1 + 1), []);
    //const increment2 = useCallback(() => setC2(c2 + 1), []);

    // The useCallback caches depend on the values of c1 and c2
    const increment1 = useCallback(() => setC1(c1 + 1), [c1]);
    const increment2 = useCallback(() => setC2(c2 + 1), [c2]);



    // Register the functions so we can count them
    functions.add(increment1);
    functions.add(increment2);

    return (<div>
        <div> Counter 1 is {c1} </div>
        <div> Counter 2 is {c2} </div>
        <br />
        <div>
            <button onClick={increment1}>Increment Counter 1</button>
            <button onClick={increment2}>Increment Counter 2</button>
        </div>
        <br />
        <div> Newly Created Functions: {functions.size - 2} </div>
    </div>)
}

export default CallbackHook;