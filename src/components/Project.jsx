import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Project = () => {
  return (
    <div className='flex-column justify-center p-8 md:ml-32 md:mr-32 '>
        <div className='text-xl flex gap-2 p-2'> 
            <Image src='/project.svg' height={24} width={24}></Image>
            <p className='text-2xl'><b>Projects</b></p>
        </div>
        
        <div className='md:flex md:gap-10 p-4 text-slate-300'>
        <div>
            <p>My projects showcase a blend of traditional web development and cutting-edge blockchain technology, reflecting my expertise in both areas. From dynamic, user-friendly web applications built with the MERN stack to secure, efficient decentralized applications leveraging Solidity and Hardhat, each project demonstrates my commitment to delivering high-quality solutions.
              <br />
              <br />
               These projects highlight my ability to solve complex challenges with innovative approaches, ensuring robust and scalable outcomes. Through continuous learning and practical application, I strive to stay at the forefront of technological advancements, bringing creative and effective solutions to life.</p>
            <Link href='/projects'><button className='border-b-2 border-r-2 rounded-lg p-2 mt-5 text-white shadow-2xl shadow-slate-700 hover:border-0 hover:border-t hover:border-l hover:text-slate-200'>View Projects..</button></Link>
        </div>
        </div>
        
    </div>
  )
}

export default Project