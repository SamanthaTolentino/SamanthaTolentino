import React from 'react'

import Skills from '../assets/svg/Skills'
import HTML from '../assets/svg/HTML'
import CSS from '../assets/svg/CSS'
import JavaScript from '../assets/svg/JavaScript'
import ReactSVG from '../assets/svg/ReactSVG'
import Vue from '../assets/svg/Vue'
import Angular from '../assets/svg/Angular'
import Node from '../assets/svg/Node'

const SectionSkills = () => {
    const skillsComponents = [
        { component: <HTML />, name: 'HTML' },
        { component: <CSS />, name: 'CSS' },
        { component: <JavaScript />, name: 'JavaScript' },
        { component: <ReactSVG />, name: 'React' },
        { component: <Vue />, name: 'Vue' },
        { component: <Angular />, name: 'Angular' },
        { component: <Node />, name: 'Node' },
    ]

    const getSkillsDiv = (skill, index) => {
        return <div key={index} className='flex items-center text-xl font-medium shadow-md rounded-lg px-5 py-2'>
            <div className='mr-3'>{skill.component}</div>
            <p className='grow'>{skill.name}</p>
        </div>
        
    }

    return (
        <div className='flex flex-col items-center justify-between max-w-4xl mx-auto text-brown-1 w-full'>
            <div className='mb-7'>
                <p className='text-4xl font-bold italic text-brown-2'>Skills</p>
            </div>
            <div className='grid grid-cols-4 items-start gap-6'> 
                {skillsComponents.map((skill, index) => getSkillsDiv(skill, index))}
            </div>
        </div>
    )
}

export default SectionSkills
