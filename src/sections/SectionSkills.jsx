import React from 'react'

import Skills from '../assets/svg/Skills'
import HTML from '../assets/svg/HTML'
import CSS from '../assets/svg/CSS'
import JavaScript from '../assets/svg/JavaScript'
import ReactSVG from '../assets/svg/ReactSVG'
import Vue from '../assets/svg/Vue'
import Angular from '../assets/svg/Angular'
import Tailwind from '../assets/svg/Tailwind'
import Node from '../assets/svg/Node'
import Mongo from '../assets/svg/Mongo'
import SQL from '../assets/svg/SQL'
import Git from '../assets/svg/Git'
import Figma from '../assets/svg/Figma'

const SectionSkills = () => {
    const skillsComponents = [
        { component: <HTML />, name: 'HTML' },
        { component: <CSS />, name: 'CSS' },
        { component: <JavaScript />, name: 'JavaScript' },
        { component: <ReactSVG />, name: 'React' },
        { component: <Vue />, name: 'Vue' },
        { component: <Angular />, name: 'Angular' },
        { component: <Tailwind />, name: 'Tailwind' },
        { component: <Node />, name: 'Node' },
        { component: <Mongo />, name: 'MongoDB' },
        { component: <SQL />, name: 'SQL' },
        { component: <Git />, name: 'Git' },
        { component: <Figma />, name: 'Figma' },
    ]

    const getSkillsDiv = (skill, index) => {
        return <div key={index} className={`flex items-center rounded-md py-3 font-medium`}>
            <div className='mr-3'>{skill.component}</div>
            <p className=''>{skill.name}</p>
        </div>
        
    }

    return (
        <div className='flex flex-col justify-between max-w-4xl mx-auto text-brown-1 w-full px-15 mb-3'>
            <div className=''>
                <div className='mb-3'>
                    {/* <p className='text-xl text-blue-2 uppercase font-bold'>My Skills</p> */}
                </div>
                <div className='grid grid-cols-6 items-start gap-4'> 
                    {skillsComponents.map((skill, index) => getSkillsDiv(skill, index))}
                </div>
                {/* <div className='grid grid-cols-6 items-start gap-8'> 
                    {skillsComponents.map((skill, index) => getSkillsDiv(skill, index))}
                </div> */}
            </div>
        </div>
    )
}

export default SectionSkills
