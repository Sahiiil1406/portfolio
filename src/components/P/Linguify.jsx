"use client"
import React from 'react'
import Subtech from '../Subtech'
import Image from 'next/image'
import Link from 'next/link'

const card2 = () => {
  return (
    <div className='bg-slate-200 lg:w-[70%] lg:h-[35%] p-5 rounded-lg bg-custom-gradient shadow-lg shadow-slate-900'>
    <div className='relative lg:flex gap-5'>
        <div className='w-auto lg:w-[80%]  lg:p-2 h-auto lg:m-1'>
            <h1 className='text-xl hover:text-slate-400'><b><Link href='https://github.com/Sahiiil1406/TRINIT_algorythms_dev02.git'>Linguify</Link></b></h1>
            <div className='text-slate-200 border-b-2 border-slate-600 lg:p-2'> 
            Linguify is an innovative language-learning app designed to make language acquisition engaging and accessible. It offers gamified lessons, interactive exercises.
            <br />
            <li>Video calling using WebRTC</li>
            <li>Payment Integration using Razorpay</li>
            <li>Gamified features like Flashcard,interactive sessions</li>
            </div>
            
            <p className='p-2 '><b className='
            text-xl'><b>Tech</b></b></p>
      <div className='flex flex-wrap gap-4'>
      <Subtech logo='/express.svg' name='Nodejs'/>
      <Subtech logo='/react.svg' name='Reactjs'/>
      <Subtech logo='/mongo.png' name='MongoDb'/>
      
      </div>
      
        </div>
        <div className='p-1 items-center flex justify-center '>
            <Image src='/linguify.png' title='logo' height={500} width={500}></Image>
        </div>
    </div>

</div>
  )
}

export default card2