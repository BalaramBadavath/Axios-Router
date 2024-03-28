import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  let navigate = useNavigate()
  let handleNavigate=()=>{
    navigate(-1)
  }
  return (
    <>
    <Navbar/>
    <h1>CONTACT PAGE</h1>
    <button onClick={handleNavigate}>GO TO PREVIOUS PAGE</button>
  </>
  )
}

export default Contact