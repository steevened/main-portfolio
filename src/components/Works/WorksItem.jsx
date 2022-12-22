import React from 'react'

const WorksItem = ({ work }) => {
  const { title, desc, code, imgs, live } = work
  return (
    <div className='relative group overflow-hidden text-white'>
      <div className='absolute inset-0 group-hover:bg-black/50 z-10 transition-colors duration-700'></div>
      <figure className='w-full group-hover:scale-110 transition-all duration-700'>
        <img className='' src={imgs.main} alt='work' />
      </figure>
      <div className='absolute left-3 -bottom-full group-hover:bottom-4 transition-all duration-500 z-20'>
        <h3 className='text-base'>{title}</h3>
        <p className='text-xs opacity-70'>{desc.short}</p>
      </div>
    </div>
  )
}

export default WorksItem
