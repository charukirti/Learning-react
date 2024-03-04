function Button() {
  // function without parameter
  //   const handleClick = () => console.log('Hello World')

  // function with parameter
  //   const handleClickP = (name) => console.log(`${name} stop clicking ):`)

  //   onclick with condition

  //   let count = 0
  //   const handle = (name) => {
  //     if (count < 3) {
  //       count++
  //       console.log(`${name} clicked me ${count} time/s`)
  //     } else {
  //       console.log(`${name} stop clicking me`)
  //     }
  //   }

  // Working with events

  const handleClick = (e) => (e.target.textContent = 'Aah aah oucch 💦')

  return <button onClick={(e) => handleClick(e)}>Click Me 😊</button>
}

export default Button
