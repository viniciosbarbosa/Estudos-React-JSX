import React from 'react'
import { Link , NavLink} from 'react-router-dom'

import "./NavBar.css"

const NavBar = () => {
  return (
    <div className="navBar">
      <span>Loja do russo</span>

      <nav className='navC'>
        <NavLink className='nav-btn' to="">Home</NavLink>
        <NavLink className='nav-btn' to="Products">Produtos</NavLink>
      </nav>
      
    </div>
  )
}

export default NavBar