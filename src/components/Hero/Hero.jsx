import React, { useState } from 'react'
import heroImg from '../../assets/hero.png'

import './Hero.scss'

const Hero = ({ setIsToggle }) => {
  const homeStyle = {
    backgroundImage: `url("${heroImg}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: `50% -${window.scrollY / 5}px`,
    height: '100vh',
  }

  // console.log(window.scrollY / 10)

  return (
    <div
      onClick={() => setIsToggle(false)}
      style={homeStyle}
      className={`bg-fixed  w-full relative`}
    >
      <div className='absolute  inset-0 flex flex-col justify-center items-center text-slate-300 text-center text-2xl  bg-black/30 px-5'>
        <h1 className='font-bold '>
          HELLO
          <span className='block mt-5 leading-10 font-normal'>
            I'm Steven Alvarado, a Web Developer based in Ecuador{' '}
          </span>
        </h1>
        <div className='absolute top-3/4'>
          <div className='relative border-slate-300 w-6 h-[45px] rounded-full border-2 flex items-center justify-center'>
            <div className='absolute  scroll w-[5px] h-[5px] bg-slate-300 rounded-full'></div>
            {/* <div className='text-xs absolute -bottom-6'>SCROLL</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
