import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
import { useSelector } from 'react-redux'

const NavBar = () => {
    const itemsd= useSelector((state)=>state.cart.products)
  return (
    <div>
        <div className='navBarMain'>
            <Link className='navLink' to="/">Home</Link>
            <Link className='navLink' to="/cart">Cart</Link>
            <span>items:{itemsd.length}</span>
        </div>
      
    </div>
  )
}

export default NavBar
