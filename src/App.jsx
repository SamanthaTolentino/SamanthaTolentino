import { useState } from 'react'

import SectionProfile from './sections/SectionProfile'
import SectionAbout from './sections/SectionAbout'
import SectionProjects from './sections/SectionProjects'
import HamburgerMenu from './assets/svg/HamburgerMenu'

function App() {
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
      <div className='grid grid-cols-12'>
        {/* Profile */}
        <div className='col-start-3 col-span-8'>
          <SectionProfile />
        </div>
        <div className='col-start-11 flex flex-col items-center justify-between'>
          <button>
            <HamburgerMenu />
          </button>
          {getNavList()}
          <div></div>
        </div>
        {/* About */}
        <div className='bg-white row-start-2 col-span-12'>
          <div className='row-start-2 col-start-3 col-span-8'>
            <SectionAbout />
          </div>
        </div>
        {/* Projects */}
        <div className='bg-blue row-start-3 col-span-12'>
          <div className='row-start-3 col-span-12'>
            <SectionProjects />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
