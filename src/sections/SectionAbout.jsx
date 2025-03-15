import React from 'react'
import Stars from '../assets/svg/Stars'
import Flower from '../assets/svg/Flower'
import profilePic from '../assets/img/profile_pic.png'

const SectionAbout = () => {
  return (
    <div className='flex max-w-4xl mx-auto text-brown-1'>
        <div className='flex flex-col items-center'>
            <div className='flex items-center mb-12 mt-20'>
                <div className='mr-20'>
                    <div className='relative'>
                        <div className='relative bg-yellow-1 aspect-square w-full max-w-2xs min-w-2xs rounded-full overflow-clip flex items-end justify-center'>
                            <img src={profilePic} alt="profile_pic.png" className='w-2/3 absolute top-1/9'  />
                        </div>
                        <div className='absolute top-2 -left-2 -rotate-8'>
                            <Flower petals='#91BEF8' pistil='#FFF9E6' width={30} />
                        </div>
                        <div className='absolute top-9 -left-10 rotate-5'>
                            <Flower petals='#FA6255' pistil='#FFF9E6' width={40} />
                        </div>
                    </div>
                </div>
                <div className='grow flex flex-col font-bold'>      
                    <p className='text-4xl mb-4'>Samantha Tolentino</p>
                    <p className='text-3xl uppercase mb-6'>Web Developer</p>
                    <p className='text-pink-1 uppercase mb-1'>Email</p>
                    <p className='font-medium mb-4'>S.Tolentino0828@gmail.com</p>
                    <p className='text-pink-1 uppercase mb-1'>LinkedIn</p>
                    {/* Make link */}
                    <p className='font-medium mb-4'>www.linkedin.com/in/samanthatolentino/</p>
                    <p className='text-pink-1 uppercase mb-1'>GitHub</p>
                    <p className='font-medium mb-4'>www.github.com/SamTole</p>
                </div>
            </div>
            <div className='px-10'>
                <div className='border-y-1 border-brown-1 py-12 px-6'>
                    Hi, my name is Samantha Tolentino. I’m lorem ipsum dolor sit amet. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Hi, my name is Samantha Tolentino. I’m lorem ipsum dolor sit amet. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionAbout
