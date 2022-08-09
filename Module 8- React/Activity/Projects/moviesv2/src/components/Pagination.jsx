import React from 'react'

function Pagination() {
  return (
    <div className='mb-4 '>
        <button className='p-2 border border-red-300  text-red-400 border-r-0 rounded-l-xl'>Previous</button>
        <button className='p-2 border border-red-300  text-red-400 shadow-indigo-500/50 bg-gray-200'>1</button>
        <button className='p-2 border border-red-300  text-red-400 border-l-0 rounded-r-xl'>Next</button>
    </div>
  )
}

export default Pagination