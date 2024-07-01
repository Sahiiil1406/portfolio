"use client"
import React from 'react'
import Image from 'next/image'
import Subtech from '../Subtech'
import Link from 'next/link'

const Card4 = () => {
  return (
    <div className='bg-slate-200 lg:w-[70%] lg:h-[35%] p-5 rounded-lg bg-custom-gradient shadow-lg shadow-slate-900'>
        <div className='relative lg:flex lg:gap-6'>
            <div className='w-auto lg:w-[75%]  p-2 h-auto lg:m-1'>
                <h1 className='text-xl  '><b><Link href='https://github.com/Sahiiil1406/npm-testforSolidityContract.git'>SolidityTestCraft</Link></b></h1>
                <div className='text-slate-200 border-b-2 border-slate-600 lg:div-2'>
                SolidityTestCraft is a comprehensive test generation tool designed specifically for Solidity smart contracts. It automates the creation of test cases, ensuring robust and secure contract deployment by identifying potential vulnerabilities and performance issues, enhancing the reliability of blockchain applications
                <li>Test generator for smart Contract</li>
                <li>Library like solc is use for smart Contract compilation</li>
                </div>
                
                <p className='p-2 '><b className='
                text-xl'>Tech</b></p>
          <div className='flex flex-wrap gap-4'>
          <Subtech logo='/solidity.svg' name='Solidity'/>
          <Subtech logo='/js.svg' name='JavaScript'/>
         
         
          
          </div>
          
            </div>
            <div className='p-3 items-center flex  justify-center'>
                <Image src='/github.png' title='logo' height={500} width={500}></Image>
            </div>
        </div>

    </div>
  )
}

export default Card4