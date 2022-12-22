import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BsCodeSlash } from 'react-icons/bs'

const WorksItem = ({ work }) => {
  const { title, desc, code, imgs, live } = work
  return (
    <div className='relative group overflow-hidden text-white'>
      <div className='absolute inset-0 group-hover:bg-black/70 z-10 transition-colors duration-700'></div>
      <figure className='w-full group-hover:scale-110 transition-all duration-700'>
        <img className='' src={imgs.main} alt='work' />
      </figure>
      <div className='absolute  left-1/2 -translate-x-1/2 -bottom-full group-hover:bottom-4 transition-all duration-500 z-20 text-center'>
        <h3 className='text-base'>{title}</h3>
        <p className='text-xs opacity-70'>{desc.short}</p>
      </div>
      <a
        href='#'
        className='absolute z-20 -top-full group-hover:top-0 left-3 flex flex-col items-center transition-all duration-500'
      >
        <div className='h-7 w-[1px] bg-white/40'></div>
        <div className='p-2 border border-white inline-block  rounded-full'>
          <AiOutlineEye />
        </div>
      </a>
      <a
        href='#'
        className='absolute z-20 -top-full group-hover:top-0 right-3 flex flex-col items-center transition-all duration-500'
      >
        <div className='h-7 w-[1px] bg-white/40'></div>
        <div className='p-2 border border-white inline-block  rounded-full'>
          <BsCodeSlash />
        </div>
      </a>
    </div>
  )
}

export default WorksItem