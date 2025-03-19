import React from 'react'
import HelloThere from '../assets/svg/HelloThere'
import Flower from '../assets/svg/Flower'
import profilePic from '../assets/img/profile_pic.png'

const SectionAbout = () => {
  return (
    <div className='flex max-w-4xl mx-auto text-brown-1 px-15 mb-12'>
        <div className='flex flex-col w-full items-center'>
            <HelloThere />
            <div className='grow flex flex-col items-center mb-3'>      
                <p className='text-4xl font-bold mb-3'>I'm Samantha Tolentino.</p>
                <p className='text-3xl font-medium uppercase'>Web Developer</p>
            </div>
            <div className='relative flex items-center'>
                <div className='relative mr-9'>
                    <div className='relative bg-white aspect-square w-full max-w-2xs min-w-2xs rounded-full overflow-clip flex items-end justify-center'>
                        <img src={profilePic} alt="profile_pic.png" className='w-2/3 absolute top-1/9'  />
                    </div>
                    <div className='absolute top-10 -left-0 rotate-10'>
                        <Flower petals='#6677C9' pistil='#FFF' width={40} />
                    </div>
                    <div className='absolute top-3 left-8 -rotate-10'>
                        <Flower petals='#91BEF8' pistil='#FFF' width={30} />
                    </div>
                    <div className='absolute bottom-8 right-3 -rotate-10'>
                        <Flower petals='#91BEF8' pistil='#FFF' width={30} />
                    </div>
                </div>
                <div className='font-bold'>
                    <p className='text-xl text-blue-2 uppercase mb-1'>Email</p>
                    <p className='font-medium mb-4'>S.Tolentino0828@gmail.com</p>
                    <p className='text-xl text-blue-2 uppercase mb-1'>GitHub</p>
                    <p className='font-medium mb-4'>www.github.com/SamTole</p>
                    <p className='text-xl text-blue-2 uppercase mb-1'>LinkedIn</p>
                    <p className='font-medium'>www.linkedin.com/in/samanthatolentino/</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionAbout
