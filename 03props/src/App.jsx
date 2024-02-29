import Student from "./Student"

function App() {
 

  return (
    <>
      <Student name='John Doe' age={20} isStudent={true}/>

      {/* Multiple components with different data */}

      <Student name='Jane Doe' age={24} isStudent={false}/>

      <Student/>
    </>
  )
}

export default App
