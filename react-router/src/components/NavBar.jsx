import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
   <nav>
        <Link to={"/"} >Home</Link>
        <Link to={"/about"} >Sobre</Link>
   </nav>
  )
}

export default NavBar