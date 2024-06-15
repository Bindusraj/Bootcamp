import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0);
    const handleIncrement=()=>{
        setCount(count+1);
    }
  return (
    <div>
       <button onClick={handleIncrement}>Click here</button>
       <h1>{count}</h1>

    </div>
  );
}
export default Counter;
