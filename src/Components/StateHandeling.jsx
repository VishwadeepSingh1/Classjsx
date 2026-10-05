import React, { useState } from 'react'

function StateHandeling() {
  const[Count,setCount]=useState(100);
  function increment(){
    setCount(Count+20);
  }
    function deccrement(){
    setCount(Count-10);
  }
  return (
    <div>StateHandeling
      <h2>Count={Count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={deccrement}>Decrement</button>
    </div>
  )
}

export default StateHandeling