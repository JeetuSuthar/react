import { useState } from 'react'

import './App.css'

function App() {
  let [Counter,setCounter]=useState(0);


  const Increment = ()=> {
    if(Counter<=20)
    setCounter(Counter++);
  }
  const Decrement = ()=> {
    if(Counter>=0)
    setCounter(Counter--);
  }



  return (
    <>
      <h1>Jeetu learning ReactJs framework</h1>
      <hr />
      <h2>Counter Value : {Counter}</h2>
      
      <button
        onClick={Increment}
      >Increment</button>
      <br /><br />
      <button
        onClick={Decrement}
      >Decrement</button>

    </>
  )
}

export default App
