import React from 'react'
import jsonWork from '../../../json/works.json'
import WorksItem from '../../components/Works/WorksItem'

const Works = () => {
  return (
    <div className='bg-black/90 py-10'>
      <h2 className='text-center text-4xl'>Works</h2>
      <div className='mt-5 px-6 grid grid-cols-1 gap-5'>
        {jsonWork.map((work) => (
          <WorksItem key={work.id} work={work} />
        ))}
      </div>
    </div>
  )
}

export default Works
