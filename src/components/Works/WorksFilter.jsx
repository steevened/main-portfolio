import React, { useState } from 'react'

const WorksFilter = ({ setSelectedId }) => {
  return (
    <ul className='flex justify-between w-3/4 mx-auto my-5'>
      {filters.map((filter, i) => (
        <li
          onClick={() => setSelectedId(i)}
          className='cursor-pointer hover:text-red-400 transition-all duration-500'
          key={i}
        >
          <p>{filter}</p>
        </li>
      ))}
    </ul>
  )
}

export default WorksFilter

const filters = ['All', 'Finder', 'Ecommerce', 'Pokedex']
