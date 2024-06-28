import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <div className='border-b border-slate-700 h-48 flex justify-center text-slate-200 p-8 md:ml-48 md:mr-32'>
       <div className='flex p-4 gap-8 justify-center items-center'>
       <img src="/profile.jpg" alt="" className='w-32 md:w-24 h-auto rounded-full' />
       <div>
        <h4>Sahil Kumar</h4>
        <p className='text-slate-300'>Aspiring web2 + web3 developer</p>
        <p className='text-slate-400'>NITK,Surathkal</p>
        <br />
        
        <Link href='https:google.com' className='border-r border-b p-3 rounded-2xl hover:text-slate-300 hover:border-t hover:border-l hover:border-0 shadow-lg shadow-slate-700  lg:hidden text-wrap' > Resume</Link>
       </div>
       </div>
       <div className='flex-1 items-center text-white flex justify-center'>
        <Link href='https:google.com' className='border-r border-b p-3 rounded-2xl hover:text-slate-300 hover:border-t hover:border-l hover:border-0 shadow-lg shadow-slate-700 hidden lg:block' >Download Resume</Link>
       </div>
       
    </div>
    </>
  )
}

export default Header