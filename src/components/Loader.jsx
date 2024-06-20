import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-12 h-12 border-4 border-gray-300 rounded-full animate-spin'/>
    </div>
  )
}

export default Loader