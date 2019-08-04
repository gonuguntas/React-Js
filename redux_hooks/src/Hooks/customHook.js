import React, {useState, useEffect} from "react";

// Custom Hook
const useDocumentTitle = title => {
    useEffect(
        () =>{
            document.title = title;
        },
        [title]
    )
}


function CustomHook(){
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const title = `You clicked ${count} times`;
    useDocumentTitle(title)

    return (
        <div>
            <h4>Count :{count}</h4>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default CustomHook;