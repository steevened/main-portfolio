import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Navbar.scss'

const Navbar = ({ isToggle, handleTogle, isScrollUp, isSticky }) => {
  // console.log(isToggle)

  return (
    <div
      className={`fixed duration-500 w-full bg-transparent py-4 text-center text-slate-300 z-50 transition-all ${
        isSticky ? 'bg-slate-200 text-slate-700' : ''
      } ${isScrollUp ? 'scrolldown' : 'scrollup '}`}
    >
      <div className='text-xl font-bold'>
        STEEVENED <span className='text-xl text-amber-500'>.</span>
      </div>

      <div className='absolute right-2 top-1/2 -translate-y-1/2 '>
        <button>
          <label
            htmlFor='toggle'
            className={`group overflow-hidden  p-2 hover:text-amber-500 transition-all duration-500 delay-200 cursor-pointer ${
              isSticky ? 'text-slate-700' : ''
            } ${isToggle ? 'text-amber-300' : 'text-slate-300'}`}
          >
            Menu
            <div
              className={`absolute  group-hover:w-4/6  h-[2px] bg-amber-300 -bottom-1  transition-all duration-300 -translate-x-1/2 left-1/2 ${
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
