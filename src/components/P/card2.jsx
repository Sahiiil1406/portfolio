import React from 'react'
import Subtech from '../Subtech'
import Image from 'next/image'

const card2 = () => {
  return (
    <div className='bg-slate-200 md:w-[70%] md:h-[35%] p-5 rounded-lg bg-custom-gradient shadow-lg shadow-slate-900'>
    <div className='relative md:flex gap-5'>
        <div className='w-[65%]  md:p-2 h-[90%] md:m-1'>
            <h1 className='text-xl'><b>Linguify</b></h1>
            <p className='text-slate-200 border-b-2 border-slate-600 md:p-2'> 
            Linguify is an innovative language-learning app designed to make language acquisition engaging and accessible. It offers gamified lessons, interactive exercises.
            <br />
            <li>Video calling using WebRTC</li>
            <li>Payment Integration using Razorpay</li>
            <li>Gamified features like Flashcard,interactive sessions</li>
            </p>
            
            <p className='p-2 '><b className='
            text-xl'><b>Tech</b></b></p>
      <div className='flex flex-wrap gap-8'>
      <Subtech logo='/express.svg' name='Nodejs'/>
      <Subtech logo='/react.svg' name='Reactjs'/>
      <Subtech logo='/mongo.png' name='MongoDb'/>
      
      </div>
      
        </div>
        <div className='p-1 items-center flex justify-center '>
            <Image src='/github.png' title='logo' height={260} width={260}></Image>
        </div>
    </div>

</div>
  )
}

export default card2