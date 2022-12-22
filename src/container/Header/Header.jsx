import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NavbarList from '../../components/Navbar/NavbarList'

const Hero = ({ isToggle, handleTogle, setIsToggle, isScrollUp }) => {
  return (
    // <div className='relative z-50'>
    <Navbar
      isToggle={isToggle}
      handleTogle={handleTogle}
      setIsToggle={setIsToggle}
      isScrollUp={isScrollUp}
    />
    // </div>
  )
}

export default Hero
