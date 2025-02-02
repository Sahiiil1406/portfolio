"use client"
import React from 'react'
import Image from 'next/image'
import Subtech from '../Subtech'
import Link from 'next/link'

const ProjectCard = () => {
  return (
    <div className='bg-slate-200 lg:w-[70%] lg:h-[35%] p-5 rounded-lg bg-custom-gradient shadow-lg shadow-slate-900'>
        <div className='relative lg:flex lg:gap-6'>
            <div className='w-auto lg:w-[75%]  p-2 h-auto lg:m-1'>
                <h1 className='text-xl hover:text-slate-400'><b><Link href='https://github.com/Sahiiil1406/SocialMedia-Web3.0.git'>BLOCKBUZZ</Link></b></h1>
                <div className='text-slate-200 border-b-2 border-slate-600 lg:div-2'>
                BlockBuzz is a Web3 social media app that connects users through decentralized networks, offering enhanced privacy, security, and seamless interactions within a blockchain-powered community.
                <br />
                <li>Decentralized Network</li>
                <li>Smart Contract Integrations</li>
                 <li>Immutable Profiles/Post</li>
                </div>
                
                <p className='p-2 '><b className='
                text-xl'>Tech</b></p>
          <div className='flex flex-wrap gap-4'>
          <Subtech logo='/solidity.svg' name='Solidity'/>
          <Subtech logo='/hardhat.png' name='Hardhat'/>
          <Subtech logo='/next.png' name='Nextjs'/>
         
          
          </div>
          
            </div>
            <div className='p-3 items-center flex  justify-center'>
                <Image src='/web3-p.png' title='logo' height={500} width={500}></Image>
            </div>
        </div>

    </div>
  )
}

export default ProjectCard