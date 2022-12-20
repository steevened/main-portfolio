import React from 'react'
import { CgClose } from 'react-icons/cg'

const NavbarList = ({ isToggle, handleTogle }) => {
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
      <div
        className={`${
          isToggle ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } delay-[0.6s] transition-all duration-500`}
      >
        <p>NavbarList</p>
      </div>
    </div>
  )
}

export default NavbarList
