import React from "react";
import { FaCaretDown } from "react-icons/fa";
export default function Progress({Progres}:{Progres : string}) {
  
  return (
    <div className="w-full" >
      <div className="w-full rounded-full h-1.5 mb-12 ">
        <div className={` flex flex-col justify-end items-end ml-5`} style={{width:Progres}}>
          <div className="flex justify-center items-center flex-col text-xs" >
          <h1 className="rounded-full  border-2 border-gray-500 p-2 justify-center items-center flex  ">
            You
          </h1>
          <FaCaretDown className="mb-4" />
          <h1 className=" justify-center items-center flex">{Progres}</h1>
          </div>
        </div>
      </div>
      <div className="w-full rounded-full h-1.5 bg-gray-300">
        <div className={`bg-emerald-500 h-1.5 rounded-full`} style={{width:Progres}} ></div>
      </div>
    </div>
  );
}
