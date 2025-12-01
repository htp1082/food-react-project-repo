import { useState } from "react"

export default function Practice() {

    const [count,setcount] = useState(0)
    const increase =()=>{
        setcount(count + 1);
    }
    const decrease =()=>{
        if( count>0){
            setcount(count -1);
        }
    }
  return(
      
    <div>
        <h3>Count:{count}</h3>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease} disabled={count===0}>Decrease</button>
    </div>
  )
}
