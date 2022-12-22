import React from 'react'
import { CgClose } from 'react-icons/cg'
import NavbarItem from './NavbarItem'

const NavbarList = ({ isToggle, handleTogle }) => {
  const links = ['work', 'about', 'skills', 'contact']

  console.log(isToggle)

  return (
    <div
      className={`absolute w-full flex h-screen overflow-hidden transition-all duration-500 z-50 ${
        isToggle ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className='w-4/6 h-full bg-slate-200 z-50 relative'>
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
      <div
        onClick={handleTogle}
        className={`h-full w-2/6 z-40 transition-all duration-500  ${
          isToggle ? 'bg-black/50 delay-200' : 'bg-transparent'
        }`}
      ></div>
    </div>
  )
}

export default NavbarList
