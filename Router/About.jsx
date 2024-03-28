import React from 'react'
import Navbar from './Navbar'
import { NavLink, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <>
    <Navbar/>
    <h1>ABOUT PAGE</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit corrupti nulla obcaecati, quia nostrum, quaerat quam voluptates dolore hic illum inventore quasi aliquam ullam magnam itaque aperiam et, possimus nam!</p>
    <ul>
      <li>
        <NavLink to="/about/profile">PROFILE</NavLink>
        <NavLink to="/about/updateprofile">UPDATE PROFILE</NavLink>
      </li>
    </ul>

  </>
  )
}

export default About