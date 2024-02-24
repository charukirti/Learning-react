import Youtube from './youtube'
import RenderName from './charukirti'


function App() {
  const username = 'charukirti'

  return (
    <>
     <h1>Vite react app {2 + 2}</h1>
     <h1>Vite react app {username}</h1>
    <Youtube />
    <RenderName />
    </>
   
  )
}

export default App
