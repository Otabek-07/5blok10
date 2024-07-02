import { useState } from 'react'
import './App.css'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <Navbar/>
         <Main/>
    </>
  )
}

export default App
