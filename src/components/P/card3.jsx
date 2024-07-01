"use client"
import React from 'react'
import Subtech from '../Subtech'
import Image from 'next/image'
import Link from 'next/link'

const card3 = () => {
  return (
    <div className='bg-slate-200 lg:w-[70%] lg:h-[35%] p-5 rounded-lg bg-custom-gradient shadow-lg shadow-slate-900'>
        <div className='relative lg:flex gap-5'>
            <div className='w-auto lg:w-[80%]  lg:p-2 h-auto lg:m-1'>
                <h1 className='text-xl hover:text-slate-400'><b><Link href='https://github.com/Sahiiil1406/LMS'>EduManage</Link></b></h1>
                <div className='text-slate-300 border-b-2 border-slate-600 md:p-2'> 
                EduManage is a digital platform designed to facilitate the creation, organization, and management of educational courses and content. It provides
                tools for educators to track progress, engage with students, and streamline administrative tasks, enhancing the overall learning experience.
                    <br />
                    <li>Course Management</li>
                    <li>User Authorisation and authentication</li>
      
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