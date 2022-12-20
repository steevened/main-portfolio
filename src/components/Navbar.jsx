import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Navbar.scss'

const Navbar = ({ isToggle, handleTogle }) => {
  // console.log(isToggle)

  return (
    <div className='relative z-50'>
      <div className='fixed  top-0 left-0 right-0 py-4 text-center text-slate-50'>
        <div>
          STEEVENED <span className='text-xl text-red-600'>.</span>
        </div>

        <div className='absolute right-2 top-1/2 -translate-y-1/2 '>
          <button>
            <label
              htmlFor='toggle'
              className={`group overflow-hidden  p-2 hover:text-purple-500 transition-all duration-500 delay-200 cursor-pointer ${
                isToggle ? 'text-purple-500' : ''
              }`}
            >
              Menu
              <div
                className={`absolute w-0 group-hover:w-4/6  h-[2px] bg-purple-300 -bottom-1  transition-all duration-300 -translate-x-1/2 left-1/2 ${
                  isToggle ? 'w-4/6' : ''
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
    </div>
  )
}

export default Navbar
