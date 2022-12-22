import React from 'react'
import { CgClose } from 'react-icons/cg'
import NavbarItem from './NavbarItem'

const NavbarList = ({ isToggle, handleTogle }) => {
  const links = ['work', 'about', 'skills', 'contact']

  return (
    <div
      className={`absolute h-screen w-4/6 bg-white z-50 ${
        isToggle ? 'left-0' : '-left-full'
      } transition-all duration-1000 ease px-3 py-10`}
    >
      <button
        onClick={handleTogle}
        className={`transition-all delay-700 absolute top-4 right-3 cursor-pointer ${
          !isToggle ? 'scale-0 delay-75' : ''
        }`}
      >
        <CgClose className='text-2xl' />
      </button>
      <ul className='mt-10 ml-4 flex flex-col gap-10 text-3xl'>
        {links.map((link) => (
          <NavbarItem isToggle={isToggle}>
            <p>{link}</p>
          </NavbarItem>
        ))}
      </ul>
    </div>
  )
}

export default NavbarList
