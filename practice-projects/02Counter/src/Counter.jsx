import { useState } from 'react'

function Count() {
  const [count, setCount] = useState(0)

  /* function for increment */
  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  /* function for decrement */
  const decrement = () => {
    setCount((prevCount) => prevCount - 1)
  }

  /* function for reset counter */

  const reset = () => {
    setCount(0)
  }

  return (
    <>
      <h1 className="heading">Simple Counter</h1>
      <div className="counter">
        <p className="count-value">{count}</p>

        <div className="btn-container">
          <button className="btn btn-decrement" onClick={decrement}>
            Decrement
          </button>
          <button className="btn btn-reset" onClick={reset}>
            Reset
          </button>
          <button className="btn btn-increment" onClick={increment}>
            Increment
          </button>
        </div>
      </div>
    </>
  )
}

export default Count
