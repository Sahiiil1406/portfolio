"use client"
import React from 'react'
import Image from 'next/image'
import Subtech from '../Subtech'
import Link from 'next/link'

const ContainerOpsCard = () => {
  return (
    <div className='bg-slate-200 lg:w-[70%] lg:h-[35%] p-5 rounded-lg bg-custom-gradient shadow-lg shadow-slate-900'>
        <div className='relative lg:flex lg:gap-6'>
            <div className='w-auto lg:w-[75%]  p-2 h-auto lg:m-1'>
                <h1 className='text-xl  '><b><Link href='https://github.com/Sahiiil1406/ContainerOps'>ContainerOps</Link></b></h1>
                <div className='text-slate-200 border-b-2 border-slate-600 lg:div-2'>
                ContainerOps is a comprehensive Continuous Deployment (CD) platform that simplifies Docker-based application deployment through automated Dockerfile generation, GitHub integration, and real-time monitoring capabilities. It empowers developers with seamless deployment orchestration and container lifecycle management.
                <li>Automated Dockerfile generation with intelligent project analysis</li>
                <li>GitHub OAuth integration with webhook-based CI/CD pipeline</li>
                <li>Real-time monitoring with WebSocket-powered live logs</li>
                <li>Dynamic Nginx configuration for custom domain routing</li>
                </div>
                
                <p className='p-2 '><b className='
                text-xl'>Tech</b></p>
          <div className='flex flex-wrap gap-4'>
          <Subtech logo='/techstack/python.png' name='Python'/>
          <Subtech logo='/django.svg' name='Django'/>
          <Subtech logo='/docker.svg' name='Docker'/>
          <Subtech logo='/psql.svg' name='PostgreSQL'/>
          <Subtech logo='/nginx.svg' name='Nginx'/>
          
          </div>
          
            </div>
            <div className='items-center flex  justify-center'>
                <Image src='/project/ContainerOps.png' title='logo' height={300} width={450}></Image>
            </div>
        </div>

    </div>
  )
}

export default ContainerOpsCard