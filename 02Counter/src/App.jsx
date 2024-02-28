import './App.css'
import { useState } from 'react'
function App() {
  // let counter = 12

  let [counter, setCounter] = useState(1)
  let [message, setMessage] = useState('')

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1)
    setMessage('')
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1)
      // setMessage('')
    } else {
      // console.log('Counter is already 0')
      setMessage('Counter already reached 0')
      console.log(message)
    }
  }

  return (
    <>
      <h1>A simple Counter</h1>
      <h2>Counter value {counter}</h2>
      <button onClick={addValue}>Add a value</button>{' '}
      <button onClick={removeValue} disabled={counter === 0}>
        Remove a value
      </button>
      <p>Footer: {message ? <span>{message}s</span> : null}</p>
    </>
  )
}

export default App
