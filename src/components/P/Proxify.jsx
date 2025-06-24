"use client"
import React from 'react'
import Image from 'next/image'
import Subtech from '../Subtech'
import Link from 'next/link'

const ProxifyCard = () => {
  return (
    <div className='bg-slate-200 lg:w-[70%] lg:h-[35%] p-5 rounded-lg bg-custom-gradient shadow-lg shadow-slate-900'>
        <div className='relative lg:flex lg:gap-6'>
            <div className='w-auto lg:w-[75%]  p-2 h-auto lg:m-1'>
                <h1 className='text-xl  '><b><Link href='https://github.com/Sahiiil1406/proxify'>Proxify</Link></b></h1>
                <div className='text-slate-200 border-b-2 border-slate-600 lg:div-2'>
                Proxify is a lightweight reverse proxy that automatically routes *.localhost domains to running Docker containers based on their names (e.g., nginx.localhost → nginx container IP). It solves the problem of manually managing port mappings and remembering random ports when developing with multiple Docker containers.
                <li>Auto-discovery of running Docker containers</li>
                <li>Real-time route updates with Docker events</li>
                <li>Management API with health checks and route inspection</li>
                </div>
                
                <p className='p-2 '><b className='
                text-xl'>Tech</b></p>
          <div className='flex flex-wrap gap-4'>
          <Subtech logo='/js.svg' name='JavaScript'/>
          <Subtech logo='/docker.svg' name='Docker'/>
          <Subtech logo='/express.svg' name='Express.js'/>
          <Subtech logo='/nginx.svg' name='Nginx'/>

          </div>
          
            </div>
            <div className='p-3 items-center flex  justify-center'>
                <Image src='/project/proxify.png' title='logo' height={300} width={500}></Image>
            </div>
        </div>

    </div>
  )
}

export default ProxifyCard