"use client"
import React from 'react'
import Subtech from '../Subtech'
import Image from 'next/image'

const card3 = () => {
  return (
    <div className='bg-slate-200 md:w-[70%] md:h-[35%] p-5 rounded-lg bg-custom-gradient shadow-lg shadow-slate-900'>
        <div className='relative md:flex gap-5'>
            <div className='w-auto lg:w-[80%]  md:p-2 h-auto md:m-1'>
                <h1 className='text-xl'><b>CourseNavigator</b></h1>
                <div className='text-slate-300 border-b-2 border-slate-600 md:p-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, iusto praesentium minus quo tempora ea consequuntur consequatur laboriosam. Excepturi optio sequi itaque totam quia. Corrupti quisquam reiciendis molestias sit nesciunt?
                    <br />
                    <li></li>
                    <li></li>
                    <li></li>
                </div>
                
                <p className='p-2 '><b className='
                text-xl'><b>Tech</b></b></p>
          <div className='flex flex-wrap gap-8'>
          <Subtech logo='/next.png' name='Nextjs'/>
          <Subtech logo='/node.png' name='Nodejs'/>
          <Subtech logo='/express.svg' name='Express js'/>
          <Subtech logo='/mongo.png' name='Mongo db'/>
          
          </div>
          
            </div>
            <div className='p-1 items-center flex justify-center'>
                <Image src='/github.png' title='logo' height={260} width={260}></Image>
            </div>
        </div>

    </div>
  )
}

export default card3