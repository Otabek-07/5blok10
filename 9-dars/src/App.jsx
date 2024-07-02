import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState(false )

  const click = () => {
    setName(prevName => prevName === "Hello, world" ? "world, Hello," : "Hello, world")
  }

  return (
    <div>
         <button onClick={click}>Click</button>
         <h1>{name}</h1>
    </div>
  )
}

export default App

