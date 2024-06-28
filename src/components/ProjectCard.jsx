import React from 'react'
import Image from 'next/image'
import Subtech from './Subtech'

const ProjectCard = () => {
  return (
    <div className='bg-slate-200 md:w-[70%] md:h-[35%] p-5 rounded-lg bg-custom-gradient shadow-lg shadow-slate-900'>
        <div className='relative md:flex gap-5'>
            <div className='w-[65%]  md:p-2 h-[90%] md:m-1'>
                <h1 className='text-xl'><b>Linguify</b></h1>
                <p className='text-slate-300 border-b-2 border-slate-600 md:p-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, iusto praesentium minus quo tempora ea consequuntur consequatur laboriosam. Excepturi optio sequi itaque totam quia. Corrupti quisquam reiciendis molestias sit nesciunt?</p>
                
                <p className='p-2 '><b className='
                text-xl'><b>Tech</b></b></p>
          <div className='flex flex-wrap gap-8'>
          <Subtech logo='/node.png' name='Nodejs'/>
          <Subtech logo='/react.svg' name='Reactjs'/>
          <Subtech logo='/node.png' name='javascript'/>
          
          </div>
          
            </div>
            <div className='p-1 '>
                <Image src='/github.png' title='logo' height={260} width={260}></Image>
            </div>
        </div>

    </div>
  )
}

export default ProjectCard