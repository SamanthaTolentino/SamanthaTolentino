import React from 'react'
import HelloThere from '../assets/svg/HelloThere'
import Stars from '../assets/svg/Stars'
import Flower from '../assets/svg/Flower'
import profilePic from '../assets/img/profile_pic.png'

const SectionAbout = () => {
  return (
    <div className='flex max-w-4xl mx-auto text-brown-1 px-15 mb-1'>
        <div className='flex flex-col items-center'>
            <HelloThere />
            {/* <p className='text-4xl font-bold mb-3'>I'm Samantha Tolentino.</p>
            <p className='text-3xl font-medium uppercase mb-5'>Web Developer</p> */}
            <div className='flex items-center mb-5'>
                <div className='relative'>
                    <div className='relative bg-tan-1 aspect-square w-full max-w-2xs min-w-2xs rounded-full overflow-clip flex items-end justify-center shadow'>
                        <img src={profilePic} alt="profile_pic.png" className='w-2/3 absolute top-1/9'  />
                    </div>
                    <div className='absolute top-10 -left-10 rotate-10'>
                        <Flower petals='#6677C9' pistil='#FFF9E6' width={40} />
                    </div>
                    <div className='absolute top-3 -left-2 -rotate-10'>
                        <Flower petals='#91BEF8' pistil='#FFF9E6' width={30} />
                    </div>
                    <div className='absolute bottom-10 -right-10 -rotate-10'>
                        <Flower petals='#91BEF8' pistil='#FFF9E6' width={40} />
                    </div>
                    <div className='absolute bottom-3 -right-2 rotate-10'>
                        <Flower petals='#6677C9' pistil='#FFF9E6' width={30} />
                    </div>
                </div>
            </div>
            <div className='grow flex flex-col items-center font-bold mb-3'>      
                <p className='text-4xl mb-3'>I'm Samantha Tolentino.</p>
                <p className='text-3xl uppercase'>Web Developer</p>
            </div>
            <div className='relative'>
                <p>
                    Hi, my name is Samantha Tolentino. I’m lorem ipsum dolor sit amet. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Hi, my name is Samantha Tolentino. I’m lorem ipsum dolor sit amet. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                {/* <div>
                    <p className='text-xl text-blue-2 uppercase mb-1'>Email</p>
                    <p className='font-medium mb-4'>S.Tolentino0828@gmail.com</p>
                    <p className='text-xl text-blue-2 uppercase mb-1'>GitHub</p>
                    <p className='font-medium mb-4'>www.github.com/SamTole</p>
                    <p className='text-xl text-blue-2 uppercase mb-1'>LinkedIn</p>
                    <p className='font-medium mb-4'>www.linkedin.com/in/samanthatolentino/</p>
                </div> */}
                {/* <div className='absolute -bottom-2 -right-8 -rotate-10'>
                    <Flower petals='#FDCB46' pistil='#FFF9E6' width={40} />
                </div>
                <div className='absolute -bottom-8 right-0 rotate-10'>
                    <Flower petals='#91BEF8' pistil='#FFF9E6' width={30} />
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default SectionAbout
