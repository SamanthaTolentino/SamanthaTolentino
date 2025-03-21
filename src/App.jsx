import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import HelloThere from './assets/svg/HelloThere'
import SectionProfile from './sections/SectionProfile'
import SectionAbout from './sections/SectionAbout'
import SectionSkills from './sections/SectionSkills'
import SectionProjects from './sections/SectionProjects'
import resumePDF from './assets/pdf/Resume_Samantha_Tolentino.pdf'

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

  const getSocialMediaIcons = () => {
    return <div className='flex items-center'>
      <motion.a href='mailto:S.Tolentino0828@gmail.com' target="_blank" title='Email' className='mr-2 border py-2 px-3 rounded-xl'
        whileHover={{ scale: 1.15 }}
      >
        <FontAwesomeIcon icon={faEnvelope} size='xl' />
      </motion.a>
      <motion.a href={resumePDF} target="_blank" title='Resume' className='mr-2 border py-2 px-4 rounded-xl'
        whileHover={{ scale: 1.15 }}
      >
        <FontAwesomeIcon icon={faFile} size='xl'  />
      </motion.a>
      <motion.a href='https://github.com/SamanthaTolentino' target="_blank" title='Github' className='mr-2 border py-2 px-3 rounded-xl'
        whileHover={{ scale: 1.15 }}
      >
        <FontAwesomeIcon icon={faGithub} size='xl' />
      </motion.a>
      <motion.a href='https://www.linkedin.com/in/samanthatolentino/' target="_blank" title='LinkedIn' className='border py-2 px-3 rounded-xl'
        whileHover={{ scale: 1.15 }}
      >
        <FontAwesomeIcon icon={faLinkedin} size='xl' />
      </motion.a>
    </div>
  }

  return (
    <div className='karla-font lg:pt-15 pt-8 text-brown-1'>
      <motion.div className='grid grid-cols-12'
        variants={sectionContainerVariants}
        initial='hidden'
        animate='show'
      >
        {/* Hello Title */}
        <motion.div className='col-start-3 col-span-8 flex flex-col items-center'
          variants={sectionVariants}
        >
          <HelloThere />
        </motion.div>

        {/* Profile */}
        <motion.div className='row-start-2 col-start-3 col-span-8'
          variants={sectionVariants}
        >
          <SectionProfile />
        </motion.div>

        {/* Social Media */}
        <div className='col-start-11 lg:flex hidden items-center justify-end'>
          {getSocialMediaIcons()}
        </div>
        
        {/* About */}
        <motion.div className='row-start-3 col-span-12 bg-yellow-1'
          variants={sectionVariants}
        >
          <SectionAbout />
        </motion.div>

        {/* Skills */}
        <motion.div className='row-start-4 col-span-12 bg-yellow-1'
          variants={sectionVariants}
        >
          <SectionSkills />
        </motion.div>

        {/* Projects */}
        <motion.div className='row-start-5 col-span-12 bg-yellow-1'
          variants={sectionVariants}
        >
          <SectionProjects />
          <div className='flex items-center justify-center text-sm py-5'>
            {getSocialMediaIcons()}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div className='row-start-6 col-span-12 bg-tan-1 p-3'
          variants={sectionVariants}
        >
          <div className='flex flex-col items-center justify-center text-sm text-center'>
            <p>&#169; 2025 - Present, Samantha Tolentino. All illustrations created by me.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default App
