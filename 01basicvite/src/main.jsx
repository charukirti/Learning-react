import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Learning and creating react lib

const reactElem = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'click me to visit google',
}

function MyApp() {
  return (
    <div>
      <h1>Custom React app</h1>
    </div>
  )
}

const AnotherElem = (
  <a href="https://google.com" target="_blank">
    Head towards google
  </a>
)

const actualReactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />

  //    <MyApp/>

//   actualReactElement
)
