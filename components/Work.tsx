import React from 'react'
import { WorkCarousel } from './WorkCarousel'

const Work = () => {
  return (
    <div className='w-full h-screen p-10 flex flex-col justify-center border-t'>
          <h2 className="text-[3em] pl-10  pt-0 pb-0">Selected Work</h2>
          <WorkCarousel/>
    </div>
  )
}

export default Work