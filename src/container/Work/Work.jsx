import React from 'react'
import { motion, useAnimation } from 'framer-motion'

const Works = () => {
  const controls = useAnimation()

  const handleScroll = (event) => {
    // Start the animation when the user scrolls down to the "Recent Works" section
    if (event.deltaY > 0) {
      controls.start('visible')
    }
  }

  return (
    <section className="py-12">
      <motion.h2
        animate={controls}
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: 'easeInOut',
            },
          },
          hidden: {
            opacity: 0,
            y: -24,
          },
        }}
        className="text-3xl font-bold text-center mb-8"
      >
        Recent Works
      </motion.h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="h-48 w-full object-cover"
              src="https://source.unsplash.com/random"
              alt="Project 1"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-600">
                Description of project 1 goes here...
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="h-48 w-full object-cover"
              src="https://source.unsplash.com/random"
              alt="Project 2"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Project 2</h3>
              <p className="text-gray-600">
                Description of project 2 goes here...
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="h-48 w-full object-cover"
              src="https://source.unsplash.com/random"
              alt="Project 3"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Project 3</h3>
              <p className="text-gray-600">
                Description of project 3 goes here...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works
