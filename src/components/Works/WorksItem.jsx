import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BsCodeSlash } from 'react-icons/bs'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
// const imgs = [img1, img2, img3]

const WorksItem = ({ work, i, selectedId }) => {
  const { title, desc, code, live, imgs, categoryId } = work

  // console.log(i)
  return (
    <div
      className={`relative group overflow-hidden text-white transition-all duration-500 ${
        selectedId === 0
          ? 'scale-100 h-full opacity-100'
          : selectedId === categoryId
          ? 'order-first scale-100 h-full opacity-100'
          : 'order-last scale-0 h-0 opacity-0'
      }`}
    >
      <div className='absolute inset-0 group-hover:bg-black/70 z-10 transition-colors duration-700'></div>

      <figure
        key={i}
        className='w-full group-hover:scale-110 transition-all duration-700'
      >
        <img src={imgs.main} alt='work' />
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
