import { useState } from 'react'

import SectionAbout from './sections/SectionAbout'
import SectionSkills from './sections/SectionSkills'
import SectionProjects from './sections/SectionProjects'
import HamburgerMenu from './assets/svg/HamburgerMenu'

function App() {
  const getNavList = () => {
    return <div className='text-5xl'>
      {
        [...Array(4)].map((i) => {
          return <div key={i} className='mb-5'>•</div>
        })
      }
    </div>
  }

  return (
    <div className='karla-font pt-15'>
      <div className='grid grid-cols-12'>
        {/* About */}
        <div className='col-start-3 col-span-8 pt-15'>
          <SectionAbout />
        </div>
        <div className='col-start-11 flex flex-col items-center justify-between'>
          <button>
            <HamburgerMenu />
          </button>
          {/* {getNavList()} */}
          <div></div>
        </div>
        {/* Skills */}
        <div className='bg-white row-start-2 col-span-12'>
          <div className='row-start-2 col-start-3 col-span-8'>
            <SectionSkills />
          </div>
        </div>
        {/* Projects */}
        <div className='bg-tan-1 row-start-3 col-span-12'>
          <div className='row-start-3 col-span-12'>
            <SectionProjects />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
