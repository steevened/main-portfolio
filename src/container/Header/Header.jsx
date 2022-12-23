import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NavbarList from '../../components/Navbar/NavbarList'

const Hero = ({ isToggle, handleTogle, setIsToggle, isScrollUp, isSticky }) => {
  return (
    // <div className='relative z-50'>
    <Navbar
      isToggle={isToggle}
      handleTogle={handleTogle}
      setIsToggle={setIsToggle}
      isScrollUp={isScrollUp}
      isSticky={isSticky}
    />
    // </div>
  )
}

export default Hero
