import React from 'react'
import { CgClose } from 'react-icons/cg'
import NavbarItem from './NavbarItem'

const NavbarList = ({ isToggle, handleTogle }) => {
  const links = ['Work', 'About', 'Skills', 'Contact']

  // console.log(isToggle)

  return (
    <div
      className={`fixed top-0 bottom-0 w-4/6  h-screen overflow-hidden transition-all ease-in-out duration-500 z-50 ${
        isToggle ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className='h-full bg-slate-200 z-50 relative'>
        <button
          onClick={handleTogle}
          className={`transition-all duration-500 z-50 absolute top-4 right-3 cursor-pointer ${
            !isToggle ? 'scale-0 delay-75' : 'delay-[1300ms]'
          }`}
        >
          <CgClose className='text-2xl text-slate-700' />
        </button>
        <ul className='absolute inset-0  flex flex-col items-center justify-center gap-10 text-3xl'>
          {links.map((link, i) => (
            <NavbarItem key={i} i={i} isToggle={isToggle}>
              <p>{link}</p>
            </NavbarItem>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavbarList
