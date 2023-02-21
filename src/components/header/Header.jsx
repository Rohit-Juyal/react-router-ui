import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header className='header section-padding'>
        <div className="header-content">
            <div className="logo">
                <h1><Link to="/">My Store</Link></h1>
            </div> 
            <div className="navigation">
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="products">Products</NavLink>
                <NavLink to="posts">Posts</NavLink>
            </div>
        </div>
    </header>
  )
}

export default Header