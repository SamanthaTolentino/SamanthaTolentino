import React from 'react'
import { motion } from 'framer-motion'

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
import Flower from '../assets/svg/Flower'

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
        return <div key={index} className={`flex sm:justify-center justify-start rounded-md py-3 font-medium`}>
            <motion.div className='flex items-center'
                whileHover={{ scale: 1.15 }}
            >
                <div className='mr-3'>{skill.component}</div>
                <p>{skill.name}</p>
            </motion.div>
        </div> 
    }

  return (
    <div className='max-w-4xl mx-auto lg:px-15 px-8 pb-6'>
        <div className='flex items-center mb-1'>
            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: -75 }}
                transition={{ repeat: Infinity, repeatType: "mirror", ease: 'easeInOut', duration: 2.3 }}
            >
                <Flower petals='#FA6255' pistil='#FFF' width={23} />
            </motion.div>
            <p className='uppercase text-xl font-bold ml-2 mt-1'>My Skills</p>
        </div>
        <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-start gap-4 sm:ml-0 ml-8'> 
            {skillsComponents.map((skill, index) => getSkillsDiv(skill, index))}
        </div>
    </div>
  )
}

export default SectionSkills
