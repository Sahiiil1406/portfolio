import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='flex-column justify-center p-6 md:ml-32 md:mr-32'>
        <h1 className='flex p-2 gap-2'>
            <Image src='about.svg' height={24} width={24} alt='logo'></Image>
            <div className='text-3xl'><b>About</b></div>
        </h1>
       
        <p className='text-slate-300 p-5'>I am a passionate Software Enginneer
          <br />
          <br />
          Currently, I am pursuing a B.Tech in Computer Science and Engineering from NITK Surathkal. Let's connect and explore how I can help bring your next project to life with my unique blend of web development and blockchain expertise.
        </p>
    </div>
  )
}

export default About