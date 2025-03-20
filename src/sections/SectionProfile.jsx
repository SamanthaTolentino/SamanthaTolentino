import React from 'react'
import { motion } from 'framer-motion'
import Flower from '../assets/svg/Flower'
import profilePic from '../assets/img/profile_pic.png'

const SectionAbout = () => {
    const linkVariants = {
        hover: {
            scale: 1.05,
            color: '#6677C9',
        }
    }

    return (
        <div className='flex max-w-4xl mx-auto text-brown-1 px-15 mb-6'>
            <div className='flex flex-col w-full items-center'>
                <div className='relative flex items-center'>
                    <div className='relative mr-9'>
                        <div className='relative bg-white aspect-square w-full max-w-2xs min-w-2xs rounded-full overflow-clip flex items-end justify-center'>
                            <img src={profilePic} alt="profile_pic.png" className='w-2/3 absolute top-1/9'  />
                        </div>
                        <motion.div className='absolute top-10 -left-0 rotate-10'
                            initial={{ rotate: 0 }}
                            animate={{ rotate: -55 }}
                            transition={{ repeat: Infinity, repeatType: "mirror", ease: 'easeInOut', duration: 2.3 }}
                        >
                            <Flower petals='#6677C9' pistil='#FFF' width={40} />
                        </motion.div>
                        <motion.div className='absolute top-3 left-8 -rotate-10'
                            initial={{ rotate: 0 }}
                            animate={{ rotate: -70 }}
                            transition={{ repeat: Infinity, repeatType: "mirror", ease: 'easeInOut', duration: 2.3 }}
                        >
                            <Flower petals='#91BEF8' pistil='#FFF' width={30} />
                        </motion.div>
                        <motion.div className='absolute bottom-8 right-3 rotate-10'
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 70 }}
                            transition={{ repeat: Infinity, repeatType: "mirror", ease: 'easeInOut', duration: 2.5 }}
                        >
                            <Flower petals='#91BEF8' pistil='#FFF' width={30} />
                        </motion.div>
                    </div>
                    <div className='font-bold'>
                        <p className='text-xl text-blue-2 uppercase mb-1'>Email</p>
                        <div className='font-medium mb-4'>
                            <motion.a href='mailto:S.Tolentino0828@gmail.com' className='inline-block'
                                whileHover={linkVariants.hover}
                            >  
                                S.Tolentino0828@gmail.com
                            </motion.a>
                        </div>
                        <p className='text-xl text-blue-2 uppercase mb-1'>GitHub</p>
                        <div className='font-medium mb-4'>
                            <motion.a href='https://github.com/SamTole' target="_blank" className='inline-block'
                                whileHover={linkVariants.hover}
                            >  
                                www.github.com/SamTole
                            </motion.a>
                        </div>
                        <p className='text-xl text-blue-2 uppercase mb-1'>LinkedIn</p>
                        <div className='font-medium mb-4'>
                            <motion.a href='https://www.linkedin.com/in/samanthatolentino/' target="_blank" className='inline-block'
                                whileHover={linkVariants.hover}
                            >  
                                www.linkedin.com/in/samanthatolentino/
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionAbout
