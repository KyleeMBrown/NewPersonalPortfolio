import React from 'react'
import { WorkCarousel } from './WorkCarousel'

const Work = () => {
  return (
    <div className='w-full h-screen max-[768px]:h-full p-10 max-[768px]:p-8 flex flex-col justify-center border-t'>
          <h2 className="text-[3em] max-[768px]:text-[2.5em] pl-10 max-[768px]:pl-0 pt-0 pb-0">Selected Work</h2>
          <WorkCarousel/>
    </div>
  )
}

export default Work