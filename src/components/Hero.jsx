import React from 'react'
import heroImg from '../assets/hero.png'

import './Hero.scss'

const Hero = () => {
  const homeStyle = {
    backgroundImage: `url("${heroImg}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  }

  return (
    <div style={homeStyle} className={`bg-fixed min-h-screen w-full`}>
      <div className='absolute inset-0 flex flex-col justify-center items-center text-slate-50/60 text-center text-2xl w-3/4 mx-auto'>
        <h1 className='font-bold '>
          STEEVENED
          <span className='block mt-5 leading-10 font-normal'>
            I'm Steven Alvarado, a Web Developer based in Ecuador{' '}
          </span>
        </h1>
        <div className='absolute top-3/4'>
          <div className='relative border-slate-50 w-6 h-[45px] rounded-full border-2 flex items-center justify-center'>
            <div className='absolute  scroll w-[5px] h-[5px] bg-slate-50 rounded-full'></div>
            <div className='text-xs absolute -bottom-6'>SCROLL</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
