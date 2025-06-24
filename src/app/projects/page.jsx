"use client"
import React from 'react'
import ProjectCard from '@/components/P/BlockBuzz'
import Card2 from '@/components/P/Linguify'
import Card3 from '@/components/P/EduManage'
import Card4 from '@/components/P/SolidityTestCraft'
import ProxifyCard from '@/components/P/Proxify'
import ContainerOpsCard from '@/components/P/ContainerOps'
const page = () => {
  return (
    <div className="bg-custom-gradient h-[100%] text-slate-200  ">
      <h1 className='text-4xl underline p-8 flex justify-center'><b>Projects</b></h1>
    <div className='p-8 flex flex-wrap gap-5 justify-center items-center'>
    <ContainerOpsCard/>
    <ProxifyCard/>
    <ProjectCard/>
    <Card2/>
    <Card3/>
    <Card4/>
    
    
    </div>
    </div>
  )
}

export default page