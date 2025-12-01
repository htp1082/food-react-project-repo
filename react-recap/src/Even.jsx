 import React from 'react';
import { useState } from 'react';
 
 const Even = () => {

     const [count,setCount] = useState(0)
      const [six,setSix] = useState(0); 

     const increase=()=>{
          const updated = count + 1;
          setCount(updated)
     }
     const decrease=()=>{
        const updated = count -1
        setCount(updated)
     }

   
     const sixCount =()=>{
        const updated = count + 6;
        const updateSix =  six + 1;
        setCount(updated);
        setSix(updateSix)
     }
    return (
        <div>
            <h3>{six}</h3>
            <h1>Count: {count}</h1>
             <button onClick={increase}>Increase</button>
             <button onClick={decrease} disabled={count===0}>Decrease</button>
             <button onClick={sixCount}>Six</button>
        </div>
    );
 };
 
 export default Even;