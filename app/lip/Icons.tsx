import React from 'react'
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GrCircleQuestion } from "react-icons/gr";

export default function Icons() {
  return (
    <div className='flex justify-start items-center' >
        <div className='m-3 p-3 bg-gray-50 text-gray-700 rounded-full shadow-sm shadow-gray-700 hover:text-white hover:bg-gray-900' ><BiMessageSquareDetail /></div>
        <div className='m-3 p-3 bg-gray-50 text-gray-700 rounded-full shadow-sm shadow-gray-700 hover:text-white hover:bg-gray-900' ><AiOutlineInfoCircle /></div>
        <div className='m-3 p-3 bg-gray-50 text-gray-700 rounded-full shadow-sm shadow-gray-700 hover:text-white hover:bg-gray-900' ><IoMdCheckmarkCircleOutline /></div>
        <div className='m-3 p-3 bg-gray-50 text-gray-700 rounded-full shadow-sm shadow-gray-700 hover:text-white hover:bg-gray-900' ><AiOutlineInfoCircle /></div>
        <div className='m-3 p-3 bg-gray-50 text-gray-700 rounded-full shadow-sm shadow-gray-700 hover:text-white hover:bg-gray-900' ><GrCircleQuestion /></div>
    </div>
  )
}
