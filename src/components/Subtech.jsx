import React from 'react'
import Image from 'next/image'

const subTech = (props) => {
  return (
    <div className='border-b-2 p-2 rounded-lg flex gap-1 text-slate-300 items-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100'>
        <Image src={props.logo} height={28} width={28}></Image>
        <div>{props.name}</div>
    </div>
  )
}

export default subTech