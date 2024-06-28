import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='  md:ml-32 md:mr-32  p-8 '>
        <div className='flex gap-2'>
            <Image src='/contact.svg' height={24} width={24} alt='logo'></Image>
            <p className='text-2xl'><b>Contact Me</b></p>
        </div>
        <div className='text-lg text-slate-200 p-5'>
        <div className='flex gap-2 p-2 hover:text-slate-400 w-auto'>
            <Image src='/github.png' width={24} height={24}></Image>
            <Link href='https://github.com/Sahiiil1406'>Github</Link>
        </div>
        
        <div className='flex gap-4 p-2 hover:text-slate-400'>
            <Image src='/discord.svg' width={24} height={24}></Image>
            <Link href='https://discordapp.com/users/1139117302575542305'>Discord</Link>
        </div>
        <div className='flex gap-4 p-2 hover:text-slate-400'>
            <Image src='/linkedin.svg' width={24} height={24}></Image>
            <Link href='https://www.linkedin.com/in/sahil-kumar-396480280'>LinkedIn</Link>
        </div>
        <div className='flex gap-4 p-2 hover:text-slate-400'>
            <Image src='/X.svg' width={24} height={24}></Image>
            <Link href='https://x.com/Sahiiil_1406'>X/Twitter</Link>
        </div>
        
        </div>
    </div>
  )
}

export default Footer