import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'

function App() {
  // const [count, setCount] = useState(0);

//   const [searchValue, setSearchValue] = useState("");
//   const [show, setShow] = useState(false);


//   const incrment = () => {
//      if(count < 10){
//        setCount(count +1)
//      }
//   }
  
// const submits = (e) => {
//    e.prventDefault()

//    setShow(true)
// }

  const [userData, setUserData] = useState ([])

  useEffect (() => {
      fetch("https://jsonplaceholder.typicode.com/users")
       .then(response => response.json())
       .then(data => setUserData(data))
  },[])


  return (
    <>

       us


     {/* <form onSubmit={submits}>
     <input type="text" placeholder='Search praduct' onChange={(e) => setSearchValue(e.target.value)}/>
      <button type='submit'>Submit</button>
     </form>

     {
       show ? <h1>{searchValue}</h1> : <></>
     }

          <h1>{count}</h1>
          <button onClick={incrment}>Incrment</button> */}
    </>
  )
}

export default App
