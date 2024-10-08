import React, { useState } from 'react'

function Counter() {
    const [count , setCount] = useState(0);
    function handleIncrement() {
        if(count<10)
        setCount(count+1);
    
    }
    function handleDecrement() {
        if(count>0)
        setCount(count-1);
    }
  return (

    
    <div className=' '>

        
      
      <button onClick={handleIncrement} >
        + Increment
      </button>
      <h2>Count : {count}</h2>
      <button onClick={handleDecrement}>
        - Decrement
      </button>
    </div>
  )
}

export default Counter
