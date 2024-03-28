import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  let navigate = useNavigate()

  let handleNavigate = ()=>{
    navigate("/")
  }
  return (
    <>
      <Navbar/>
     <h1>SERVICES PAGE</h1>
     <button onClick={handleNavigate}>GO TO HOME</button>
    </>
  )
}

export default Services