import React from 'react'

import TaskAppPic from '../assets/img/task_app_pic.png'
import AquastockPic from '../assets/img/aquastock_pic.png'
import TaskAppGif from '../assets/img/task_app_gif.gif'
import AquastockGif from '../assets/img/aquastock_gif.gif'

const SectionProjects = () => {
  return (
    <div className='flex flex-col max-w-4xl mx-auto text-brown-1 px-15 mb-6'>
      <p className='text-xl text-blue-2 uppercase font-bold mb-3'>Personal Projects</p>
      <div className='flex flex-col mb-6'>
        <img src={TaskAppGif} alt="task_app_gif.png" className='w-full rounded mb-3' />
        <div className='flex flex-col'>
            <p className='text-4xl font-bold mb-1'>ListIt</p>
            <p className='font-medium text-brown-2 mb-2'>MongoDB, Express, React, Node.js, TailwindCSS</p>
            <p>A straightforward and user-friendly task management application built using the MERN Stack. Key features include user authentication and the ability to create, edit, and delete tasks and categories.</p>
        </div>
      </div>
      <div className='flex flex-col'>
        <img src={AquastockGif} alt="aquastock_gif.png" className='w-full rounded mb-3' />
        <div className='flex flex-col'>
            <p className='text-4xl font-bold mb-1'>Aquastock</p>
            <p className='font-medium text-brown-2 mb-2'>MongoDB, Express, React, Node.js, TailwindCSS</p>
            <p>A cute and simple web application inspired by a personal hobby of mine: fish-keeping! It provides personalized fish recommendations based on user input such as tank size, temperament, and difficulty level.</p>
        </div>
      </div>
    </div>
  )
}

export default SectionProjects
