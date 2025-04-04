"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Hider() {
    const pathname = usePathname().split("/").map((x : string) => x.charAt(0).toUpperCase() + x.replace("-", " ").slice(1) ) 
    pathname.splice(0,1)
  return (
    <div className='w-full bg-blue-50 pb-5 p-2 px-8 flex text-black' >
        <div className='flex'>{pathname.map((e,i)=>pathname.length === i + 1 ? <div key={i} className='flex justify-center items-center font-semibold'><h1 >{e}</h1></div> : <div key={i} className='flex justify-center items-center font-medium'><h1 >{e}</h1><h1 className='m-2' >{">"}</h1></div>)}</div>
    </div>
  )
}
