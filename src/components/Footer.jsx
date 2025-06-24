import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='md:ml-32 md:mr-32 p-8'>
      {/* Header Section */}
      <div className='flex items-center gap-2 mb-6'>
        <Image src='/contact.svg' height={24} width={24} alt='contact icon' />
        <h2 className='text-2xl font-bold text-white'>
          Contact Me
        </h2>
      </div>

      {/* Social Links */}
      <div className='text-lg text-white/80 pl-5'>
        <div className='flex items-center gap-2 p-2 hover:text-white/60 transition-colors duration-200'>
          <Image src='/github.png' width={24} height={24} alt='GitHub' />
          <Link href='https://github.com/Sahiiil1406'>GitHub</Link>
        </div>
        
        <div className='flex items-center gap-4 p-2 hover:text-white/60 transition-colors duration-200'>
          <Image src='/discord.svg' width={24} height={24} alt='Discord' />
          <Link href='https://discordapp.com/users/1139117302575542305'>Discord</Link>
        </div>
        
        <div className='flex items-center gap-4 p-2 hover:text-white/60 transition-colors duration-200'>
          <Image src='/linkedin.svg' width={24} height={24} alt='LinkedIn' />
          <Link href='https://www.linkedin.com/in/sahil-kumar-396480280'>LinkedIn</Link>
        </div>
        
        <div className='flex items-center gap-4 p-2 hover:text-white/60 transition-colors duration-200'>
          <Image src='/X.svg' width={24} height={24} alt='X/Twitter' />
          <Link href='https://x.com/Sahiiil_1406'>X/Twitter</Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='mt-6 pt-4 border-t border-white/10'>
        <div className='text-center'>
          <p className='text-white/50 text-sm'>
            © 2024 Sahil Kumar. Let's connect and build something amazing together.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer