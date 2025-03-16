import React from 'react'

import Skills from '../assets/svg/Skills'
import HTML from '../assets/svg/HTML'
import CSS from '../assets/svg/CSS'
import JavaScript from '../assets/svg/JavaScript'
import ReactSVG from '../assets/svg/ReactSVG'
import Vue from '../assets/svg/Vue'
import Angular from '../assets/svg/Angular'

const SectionSkills = () => {
  return (
    <div className='flex flex-col items-center justify-between max-w-4xl mx-auto text-brown-2 px-10'>
        <div className='mb-7'>
            {/* <Skills /> */}
            <p className='text-4xl font-bold'>Skills</p>
        </div>
        <div className='grid grid-cols-6 items-start gap-6'>
            <div className='flex flex-col items-center text-xl font-bold'>
                <HTML />
                {/* <div>HTML</div> */}
            </div>
            <CSS />
            <div className='bg-black w-fit'>
                <JavaScript />
            </div>
            <ReactSVG />
            <Vue />
            <Angular />
        </div>
    </div>
  )
}

export default SectionSkills
