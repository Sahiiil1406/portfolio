import React from 'react'
import Image from 'next/image'
import Subtech from '../Subtech'

const ProjectCard = () => {
  return (
    <div className='bg-slate-200 lg:w-[70%] lg:h-[35%] p-5 rounded-lg bg-custom-gradient shadow-lg shadow-slate-900'>
        <div className='relative md:flex md:gap-5'>
            <div className='w-[65%]  md:p-2 h-[90%] md:m-1'>
                <h1 className='text-xl'><b>BlockBuzz</b></h1>
                <p className='text-slate-200 border-b-2 border-slate-600 lg:p-2'>
                BlockBuzz is a Web3 social media app that connects users through decentralized networks, offering enhanced privacy, security, and seamless interactions within a blockchain-powered community.
                <br />
                <li>Decentralized Network</li>
                <li>Smart Contract Integrations</li>
                 <li>Immutable Profiles/Post</li>
                </p>
                
                <p className='p-2 '><b className='
                text-xl'><b>Tech</b></b></p>
          <div className='flex flex-wrap gap-8'>
          <Subtech logo='/solidity.svg' name='Solidity'/>
          <Subtech logo='/hardhat.png' name='Hardhat'/>
          <Subtech logo='/next.png' name='Nextjs'/>
         
          
          </div>
          
            </div>
            <div className='p-3 items-center flex justify-center'>
                <Image src='/web3-p.png' title='logo' height={500} width={450}></Image>
            </div>
        </div>

    </div>
  )
}

export default ProjectCard