import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar">
        <div className="links">
            <Link to="/">Shop</Link>
            <Link to="/cart">Cart Icon</Link>
        </div>
    </div>
  )
}

export default NavBar