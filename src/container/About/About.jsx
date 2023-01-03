import React from 'react'
import me from '../../assets/about.jpeg'
import bg from '../../assets/dotted_light.png.webp'
import { FiDownload } from 'react-icons/fi'

const Works = () => {
  return (
    <section className='pt-12 pb-24 bg-[#000] px-6'>
      <h2 className='text-center text-4xl'>About Me</h2>
      <div className='flex flex-col md:flex-row md:gap-16 md:px-24'>
        <div className='relative mt-10 flex flex-1'>
          <figure className='z-10'>
            <img src={me} alt='portrait' />
          </figure>
          <figure className='absolute -bottom-10 z-0 w-full flex justify-end -right-5'>
            <img src={bg} className='w-5/6' alt='background' />
          </figure>
        </div>
        <div className='mt-20 flex-1'>
          <h3 className='text-3xl text-center'>We can make it together</h3>
          <div className='text-justify text-sm mt-5 flex flex-col gap-5 font-normal leading-8 text-gray-400'>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
          <div className='flex justify-evenly flex-row-reverse my-5'>
            <button className='py-2 border px-4 group rounded-full hover:bg-white hover:text-[#000] transition-all duration-300 hover:shadow-sm font-semibold'>
              <a
                href='../../assets/dotted_light.png.webp'
                download={true}
                className='flex items-center gap-2'
              >
                Download CV
                <span>
                  <FiDownload className='inline mb-1 text-amber-400 group-hover:text-black animate-bounce' />
                </span>
              </a>
            </button>
            <button className='py-2 px-4 group rounded-full bg-amber-400 border-amber-500 text-[#000] hover:text-amber-500 border transition-all duration-300 hover:shadow-sm hover:bg-[#000] font-semibold'>
              <a href='#' className='flex items-center gap-2'>
                Hire me
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works
