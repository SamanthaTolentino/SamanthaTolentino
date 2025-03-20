import React from 'react'
import { motion } from 'framer-motion'

import Flower from '../assets/svg/Flower'

const SectionAbout = () => {
    return (
        <div className='flex flex-col justify-between max-w-4xl mx-auto w-full px-15 py-6'>
            <div className='flex flex-col'>
                <div className='flex items-center'>
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: -75 }}
                        transition={{ repeat: Infinity, repeatType: "mirror", ease: 'easeInOut', duration: 2.3 }}
                    >                        
                        <Flower petals='#FA6255' pistil='#FFF' width={23} />
                    </motion.div>
                    <p className='uppercase text-xl font-bold ml-2 mt-1'>About Me</p>
                </div>
                <p className='font-medium ml-3'>
                    Pleasure to meet you! I'm Samantha Tolentino, a Full Stack Web Developer based in the New Jersey and New York areas. I earned my B.S. in Information Technology with a specialization in Web Applications from the New Jersey Institute of Technology. I have two years of professional experience as a Software Engineer and am knowledgeable in both front end and back end technologies. I'm particularly passionate about front end languages and frameworks, and I thrive on building visually stunning, user-friendly websites!
                </p>
            </div>
        </div>
    )
}

export default SectionAbout
