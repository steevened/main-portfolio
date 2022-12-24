import React, { useState } from 'react'
import jsonWork from '../../../json/works.json'
import WorksFilter from '../../components/Works/WorksFilter'
import WorksItem from '../../components/Works/WorksItem'

const Works = () => {
  const [selectedId, setSelectedId] = useState(0)

  // console.log(selectedId)

  return (
    <div className='bg-slate-900 py-10'>
      <h2 className='text-center text-4xl'>Works</h2>
      <WorksFilter setSelectedId={setSelectedId} />
      <div className='mt-5 px-6 grid grid-cols-1 md:grid-cols-2 gap-5'>
        {jsonWork.map((work, i) => (
          <WorksItem key={work.id} work={work} i={i} selectedId={selectedId} />
        ))}
      </div>
    </div>
  )
}

export default Works
