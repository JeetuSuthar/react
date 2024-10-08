import React, { useState } from 'react'

function Counter() {
    const [count , setCount] = useState(0);
    
   
  return (

    
    <div className=' '>

        
      <button onClick={()=> setCount(count+1)} >
        + Increment
      </button>
      <h2>Count : {count}</h2>
      <button onClick={()=> setCount(count-1)}>
        - Decrement
      </button>
    </div>
  )
}

export default Counter
