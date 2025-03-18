import React from 'react'

import Projects from '../assets/svg/Projects'
import TaskAppPic from '../assets/img/task_app_pic.png'
import AquastockPic from '../assets/img/aquastock_pic.png'

const SectionProjects = () => {
  return (
    <div className='flex flex-col max-w-4xl mx-auto text-brown-1 pt-4 px-15'>
      <p className='text-xl text-blue-2 uppercase font-bold mb-3'>Projects</p>
      <div className='flex mb-8'>
        <div className='w-1/2 mr-8'>
            <img src={TaskAppPic} alt="task_app_pic.png" className='w-full rounded-xl' />
        </div>
        <div className='flex flex-col w-1/2'>
            <p className='text-4xl font-bold mb-2'>ListIt</p>
            <p className='font-medium text-brown-2 mb-3'>MongoDB, Express, React, Node.js, TailwindCSS</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <div className='flex'>
        <div className='w-1/2 mr-8'>
            <img src={AquastockPic} alt="task_app_pic.png" className='w-full rounded-xl' />
        </div>
        <div className='flex flex-col w-1/2'>
            <p className='text-4xl font-bold mb-2'>Aquastock</p>
            <p className='font-medium text-brown-2 mb-3'>MongoDB, Express, React, Node.js, TailwindCSS</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  )
}

export default SectionProjects
