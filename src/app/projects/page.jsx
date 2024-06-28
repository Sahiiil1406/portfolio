import React from 'react'
import ProjectCard from '@/components/P/card1'
import Card2 from '@/components/P/card2'
import Card3 from '@/components/P/card3'

const page = () => {
  return (
    <div className="bg-custom-gradient h-[100%] text-slate-200  ">
      <h1 className='text-4xl underline p-8 flex justify-center mr-4 '><b>Projects</b></h1>
    <div className='md:ml-48 p-8 flex flex-wrap gap-5 '>
    <ProjectCard/>
    <Card2/>
    <Card3/>
    </div>
    </div>
  )
}

export default page