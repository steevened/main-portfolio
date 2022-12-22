import React, { useState } from 'react'
import './Navbar.scss'

const NavbarItem = ({ children, isToggle, i }) => {
  return (
    <div
      className={`${
        isToggle ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }  delay-${i} transition-all duration-500`}
    >
      {children}
    </div>
  )
}
export default NavbarItem
