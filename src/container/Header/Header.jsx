import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NavbarList from '../../components/Navbar/NavbarList'

const Hero = ({ isToggle, handleTogle, setIsToggle }) => {
  return (
    <div className=''>
      <Navbar
        isToggle={isToggle}
        handleTogle={handleTogle}
        setIsToggle={setIsToggle}
      />
      <NavbarList isToggle={isToggle} handleTogle={handleTogle} />
    </div>
  )
}

export default Hero
