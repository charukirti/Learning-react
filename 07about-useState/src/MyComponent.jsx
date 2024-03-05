import { useState } from "react"

function MyComponent() {
  const [name, setName] = useState('Guest') // returns an array with two functions 1) variable 3) setter function
  const [age, setAge] = useState(0)

  const [isEmployed, setIsEmployed] = useState(false)

  const updateName = () => {
    setName('Bob the builder')
    console.log(name)
  }

  const updateAge = () => {
    setAge(age + 1)
  }

  const toggleIsEmployed = () => {
    setIsEmployed(!isEmployed)
  }

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Employed: {isEmployed ? 'Yes' : 'No'}</p>
      <button onClick={updateName}>Set Name</button>{' '}
      <button onClick={updateAge}>Set Age</button>{' '}
      <button onClick={toggleIsEmployed}>Set employment state</button>
    </div>
  )
}

export default MyComponent
