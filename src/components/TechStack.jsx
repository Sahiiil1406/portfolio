import React from 'react'
import Image from 'next/image'
import Subtech from './Subtech'

const TechStack = () => {
  return (
    <div className='flex-column justify-center p-8 md:ml-32 md:mr-32 '>
        <div className='flex gap-2'>
            <Image src='about.svg' height={24} width={24} alt='logo'></Image>
            <p className='text-2xl'><b>TECH-STACK</b></p>
        </div>
      
          <p className='p-2 text-slate-400'>Languages</p>
          <div className='flex flex-wrap gap-8'>
          <Subtech logo='/c++.svg' name='C++'/>
          <Subtech logo='/js.svg' name='javascript'/>
          <Subtech logo='/ts.svg' name='javascript'/>
          
          <Subtech logo='/solidity.svg' name='solidity'/>
          </div>
          
          <p className='p-2  text-slate-400'>Framework</p>
          <div className='flex flex-wrap gap-8'>
          <Subtech logo='/node.png' name='Node js'/>
          <Subtech logo='/express.svg' name='Express js'/>
          <Subtech logo='/graphql.svg' name='Graph Ql'/>
          <Subtech logo='/redux.svg' name='Redux'/>
          <Subtech logo='/react.svg' name='React'/>
          <Subtech logo='/vite.svg' name='Vite js'/>
          <Subtech logo='/next.png' name='Next js'/>
          <Subtech logo='/hardhat.png' name='Hardhat'/>
          
          </div>
          <p className='p-2  text-slate-400'>Database</p>
          <div className='flex flex-wrap gap-8'>
          <Subtech logo='/mongo.png' name='Mongo Db'/>
          <Subtech logo='/psql.svg' name='Postgresql'/>
          <Subtech logo='/redis.svg' name='Redis'/>
          </div>
          <p className='p-2  text-slate-400'>Tools</p>
          <div className='flex flex-wrap gap-8'>
          <Subtech logo='/docker.svg' name='Docker'/>
          <Subtech logo='/k8.png' name='Kubernetes'/>
          <Subtech logo='/kafka.png' name='Kafka'/>
          <Subtech logo='/eth.svg' name='Ethereum'/>
          <Subtech logo='/github.png' name='Github'/>
          </div>
          
          
        
    </div>
  )
}

export default TechStack