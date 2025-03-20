import React from 'react'
import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Flower from '../assets/svg/Flower'
import TaskAppGif from '../assets/img/task_app_gif.gif'
import AquastockGif from '../assets/img/aquastock_gif.gif'

const SectionProjects = () => {
  const btnComponent = (text, link) => {
    return <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
    >
        <a href={link} target="_blank" className='flex text-white items-center bg-pink-1 py-2 px-5 rounded shadow mr-2'>
        <p className='mr-2'>{text}</p>
        <FontAwesomeIcon icon={faAngleRight} />
      </a>
    </motion.div>
  }

  return (
    <div className='flex flex-col max-w-4xl mx-auto text-brown-1 px-15 pb-6 font-medium'>
      <div className='flex items-center mb-2'>
          <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: -75 }}
              transition={{ repeat: Infinity, repeatType: "mirror", ease: 'easeInOut', duration: 2.3 }}
          >
              <Flower petals='#FA6255' pistil='#FFF' width={23} />
          </motion.div>
          <p className='uppercase text-xl font-bold ml-2 mt-1'>Personal Projects</p>
      </div>
      <div className='flex flex-col mb-8 ml-3'>
        <img src={TaskAppGif} alt="task_app_gif.png" className='w-full rounded mb-3 shadow' />
        <div className='flex flex-col'>
            <p className='text-4xl font-bold mb-1'>ListIt</p>
            <p className='font-semibold mb-2'>MongoDB, Express, React, Node.js, TailwindCSS</p>
            <p className='mb-3'>A straightforward and user-friendly task management application built using the MERN Stack. Key features include user authentication and the ability to create, edit, and delete tasks and categories.</p>
            <div className='flex items-center'>
              {btnComponent('Demo', 'https://listittaskmanager.onrender.com/login')}
              {btnComponent('GitHub', 'https://github.com/SamTole/listit')}
            </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <img src={AquastockGif} alt="aquastock_gif.png" className='w-full rounded mb-3 shadow' />
        <div className='flex flex-col'>
            <p className='text-4xl font-bold mb-1'>Aquastock</p>
            <p className='font-semibold text-brown-2 mb-2'>MongoDB, Express, React, Node.js, TailwindCSS</p>
            <p className='mb-3'>A cute and simple web application inspired by a personal hobby of mine: fish-keeping! It provides personalized fish recommendations based on user input such as tank size, temperament, and difficulty level.</p>
            <div className='flex'>
              {btnComponent('Demo', 'https://aquastock.onrender.com/')}
              {btnComponent('GitHub', 'https://github.com/SamTole/aquastock')}
            </div>
        </div>
      </div>
    </div>
  )
}

export default SectionProjects
