import React from 'react'
import { motion } from 'framer-motion'

import Flower from '../assets/svg/Flower'
import profilePic from '../assets/img/profile_pic.png'

const SectionAbout = () => {
    return (
        <div className='flex max-w-4xl mx-auto text-brown-1 px-15 mb-6'>
            <div className='flex flex-col w-full items-center'>
                <div className='flex flex-col items-center'>
                    <div className='relative'>
                        <div className='relative bg-yellow-1 aspect-square w-full max-w-xs min-w-xs rounded-full overflow-clip flex items-end justify-center mb-4 shadow'>
                            <img src={profilePic} alt="profile_pic.png" className='w-2/3 absolute top-1/9'  />
                        </div>
                        <motion.div className='absolute top-10 -left-5 rotate-10'
                            initial={{ rotate: 0 }}
                            animate={{ rotate: -55 }}
                            transition={{ repeat: Infinity, repeatType: "mirror", ease: 'easeInOut', duration: 2.3 }}
                        >
                            <Flower petals='#FA6255' pistil='#FFF' width={40} />
                        </motion.div>
                        <motion.div className='absolute top-3 left-3 -rotate-10'
                            initial={{ rotate: 0 }}
                            animate={{ rotate: -70 }}
                            transition={{ repeat: Infinity, repeatType: "mirror", ease: 'easeInOut', duration: 2.3 }}
                        >
                            <Flower petals='#FA6255' pistil='#FFF' width={30} />
                        </motion.div>
                        <motion.div className='absolute bottom-10 -right-2 rotate-10'
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 70 }}
                            transition={{ repeat: Infinity, repeatType: "mirror", ease: 'easeInOut', duration: 2.5 }}
                        >
                            <Flower petals='#FA6255' pistil='#FFF' width={35} />
                        </motion.div>
                    </div>
                    <div className='grow flex flex-col items-center'>      
                        <p className='text-4xl font-bold mb-3'>I'm Samantha Tolentino.</p>
                        <p className='text-3xl font-medium uppercase'>Web Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionAbout
