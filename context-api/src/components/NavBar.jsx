import React from 'react'
import {NavLink} from "react-router-dom"


const NavBar = () => {
  return (
    <div>
        <nav>
            <NavLink to="">Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
            <NavLink to="/products">Produtos</NavLink>
        </nav>
    </div>
  )
}

export default NavBar