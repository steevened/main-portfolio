import React from 'react'
import me from '../../assets/about.jpeg'
import bg from '../../assets/dotted_light.png.webp'
import { BsDownload } from 'react-icons/bs'

const Works = () => {
  return (
    <section className='pt-12 pb-24 bg-[#000] px-6'>
      <h2 className='text-center text-4xl'>About Me</h2>
      <div className='relative mt-10 flex'>
        <figure className='z-30'>
          <img src={me} alt='portrait' />
        </figure>
        <figure className='absolute -bottom-10 z-10 w-full flex justify-end'>
          <img src={bg} className='w-5/6' alt='background' />
        </figure>
      </div>
      <div className='mt-20'>
        <h3 className='text-3xl text-center'>We can made it together</h3>
        <div className='text-justify text-sm mt-5 flex flex-col gap-5 font-normal leading-8 text-gray-400'>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
        <div className='flex justify-center my-5'>
          <button className='py-2 border px-4 group rounded-lg hover:bg-white hover:text-[#000] transition-all duration-300 hover:shadow-sm hover:shadow-white'>
            <a
              href='../../assets/dotted_light.png.webp'
              download={true}
              className='flex items-center gap-2'
            >
              Download CV
              <span>
                <BsDownload className='inline mb-1' />
              </span>
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Works
