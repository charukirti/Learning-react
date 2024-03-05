import { useState } from 'react'

function SimpleCounter() {

    const [count, setCount]= useState(0)

    function decrement(){
        setCount(prevCount => prevCount - 1)
    }

    function increment(){
        setCount(prevCount => prevCount + 1)
    }
    



  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default SimpleCounter
