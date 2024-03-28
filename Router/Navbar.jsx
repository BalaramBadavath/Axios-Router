import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
        <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
        <li>
          <NavLink to="/services">SERVICES</NavLink>
        </li>
      </ul>
    </>
  )
}

export default Navbar