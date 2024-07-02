import React from 'react'
import "./Navbar.css"
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='navbar'>
         <div className="container">
               <div className="navbarwrapper">
                     <h1>ZOODMALL</h1>
                     <form className='form'>
                         <input className='input' type="text" placeholder='Search products'/>
                         <IoSearchOutline />
                     </form>
               </div>
         </div>
    </div>
  )
}

export default Navbar
