import React from 'react'

const NavbarItem = ({ children, isToggle }) => {
  return (
    <div
      className={`${
        isToggle ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      } delay-[0.6s] transition-all duration-500`}
    >
      {children}
    </div>
  )
}
export default NavbarItem
