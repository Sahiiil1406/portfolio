import React from 'react'
import ProjectCard from '@/components/ProjectCard'

const page = () => {
  return (
    <div className="bg-custom-gradient h-full text-slate-200  ">
      <h1 className='text-4xl underline p-8 flex justify-center mr-4 '><b>Projects</b></h1>
    <div className='md:ml-48 p-8 flex flex-wrap gap-5 '>
    <ProjectCard/>
    <ProjectCard/>
    
    </div>
    </div>
  )
}

export default page