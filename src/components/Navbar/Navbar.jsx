import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Navbar.scss'

const Navbar = ({ isToggle, handleTogle, setIsToggle }) => {
  // console.log(isToggle)

  return (
    <div className='fixed w-full bg-transparent py-4 text-center text-slate-300'>
      <div>
        STEEVENED <span className='text-xl text-red-500'>.</span>
      </div>

      <div className='absolute right-2 top-1/2 -translate-y-1/2 '>
        <button>
          <label
            htmlFor='toggle'
            className={`group overflow-hidden  p-2 hover:text-red-500 transition-all duration-500 delay-200 cursor-pointer ${
              isToggle ? 'text-red-300' : 'text-slate-300'
            }`}
          >
            Menu
            <div
              className={`absolute  group-hover:w-4/6  h-[2px] bg-red-300 -bottom-1  transition-all duration-300 -translate-x-1/2 left-1/2 ${
                isToggle ? 'w-4/6' : 'w-0'
              }`}
            ></div>
          </label>
        </button>
        <input
          onChange={handleTogle}
          type='checkbox'
          name='toggle'
          id='toggle'
          className='appearance-none'
        />
      </div>
    </div>
  )
}

export default Navbar
