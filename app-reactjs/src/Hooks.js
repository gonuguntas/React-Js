import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Hook(){

    // They let you use state and other React features without writing a class.
    const [data, setData] = useState({ results:[]});
    const [count, setCount] = useState(0);
/*
    const fetchData = async () => {
        const result = await axios('http://localhost:4000/products');
        setData(result.data);
      };
    
      useEffect(() => {
        fetchData();
      });   */
    return (
        <div>
          {/*
            { data.results.map((item)=>(
                <li>{item._id}</li>
            )) }
             
            */}

                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                        Click me
                </button>
        </div>
    );
}

export default Hook;