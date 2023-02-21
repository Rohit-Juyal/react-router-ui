import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer section-padding'>
        <div className="footer-container ">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="products">Products</NavLink>
            <NavLink to="posts">Posts</NavLink>
        </div>
    </footer>
  )
}

export default Footer

