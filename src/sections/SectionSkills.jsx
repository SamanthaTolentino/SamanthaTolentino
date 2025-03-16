import React from 'react'

import Skills from '../assets/svg/Skills'
import HTML from '../assets/svg/HTML'
import CSS from '../assets/svg/CSS'
import JavaScript from '../assets/svg/JavaScript'

const SectionSkills = () => {
  return (
    <div className='flex flex-col items-center max-w-4xl mx-auto text-brown-1'>
        <div className='mb-16'>
            <Skills />
        </div>
        <div className='grid grid-cols-5 items-center'>
            <HTML />
            <CSS />
            <JavaScript />
        </div>
    </div>
  )
}

export default SectionSkills
