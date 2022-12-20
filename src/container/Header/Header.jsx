import React from 'react'
import Navbar from '../../components/Navbar'
import NavbarList from '../../components/NavbarList'

const Hero = ({ isToggle, handleTogle }) => {
  return (
    <div className=''>
      <Navbar isToggle={isToggle} handleTogle={handleTogle} />
      <NavbarList isToggle={isToggle} handleTogle={handleTogle} />
    </div>
  )
}

export default Hero
