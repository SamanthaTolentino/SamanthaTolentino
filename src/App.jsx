import { useState } from 'react'

import SectionAbout from './sections/SectionAbout'
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
        <div className='col-start-3 col-span-8 pb-34'>
          <SectionAbout />
        </div>
        <div className='col-start-11 flex flex-col items-center justify-between'>
          <button>
            <HamburgerMenu />
          </button>
          {/* {getNavList()} */}
          <div></div>
        </div>

        <div className='row-start-2 bg-yello-1 col-span-12 h-96'>hi</div>
      </div>
    </div>
  )
}

export default App
