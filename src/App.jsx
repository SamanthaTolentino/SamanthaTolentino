import { useState } from 'react'
import { motion } from 'framer-motion'
import HelloThere from './assets/svg/HelloThere'
import SectionProfile from './sections/SectionProfile'
import SectionAbout from './sections/SectionAbout'
import SectionSkills from './sections/SectionSkills'
import SectionProjects from './sections/SectionProjects'
import HamburgerMenu from './assets/svg/HamburgerMenu'

function App() {
  const sectionContainerVariants = {
    hidden: { 
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.3,
        when: 'beforeChildren'
      }
    } 
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: -50 },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, ease: 'easeOut'
      }
    }
  }

  const getNavList = () => {
    return <div className='text-4xl'>
      {
        [...Array(3)].map((i) => {
          return <div key={i} className='mb-5'>•</div>
        })
      }
    </div>
  }

  return (
    <div className='karla-font pt-15'>
      <motion.div className='grid grid-cols-12'
        variants={sectionContainerVariants}
        initial='hidden'
        animate='show'
      >
        <motion.div className='col-start-3 col-span-8 flex flex-col items-center mb-4'
          variants={sectionVariants}
        >
          <HelloThere />
          <div className='grow flex flex-col items-center'>      
              <p className='text-4xl font-bold mb-3'>I'm Samantha Tolentino.</p>
              <p className='text-3xl font-medium uppercase'>Web Developer</p>
          </div>
        </motion.div>
        {/* Profile */}
        <motion.div className='row-start-2 col-start-3 col-span-8'
          variants={sectionVariants}
        >
          <SectionProfile />
        </motion.div>

        <div className='col-start-11 flex flex-col items-center justify-between'>
          <button>
            <HamburgerMenu />
          </button>
          {/* {getNavList()} */}
          <div></div>
        </div>
        
        {/* About */}
        <motion.div className='row-start-3 col-span-12'
          variants={sectionVariants}
        >
          <div className='row-start-3 col-start-3 col-span-8'>
            <SectionAbout />
          </div>
        </motion.div>
        {/* Skills */}
        <motion.div className='row-start-4 col-start-3 col-span-8'
          variants={sectionVariants}
        >
            <SectionSkills />
        </motion.div>
        {/* Projects */}
        <motion.div className='bg-blue row-start-5 col-span-12'
          variants={sectionVariants}
        >
          <div className='row-start-5 col-span-12'>
            <SectionProjects />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default App
