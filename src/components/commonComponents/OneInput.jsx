import React from 'react'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const OneInput = ({type,name,id,label,placeholder,seePassword,setSeePassword,showPasswordIcon,required}) => {
  return (
    <div className='flex relative w-full flex-col justify-center items-start gap-[0.5rem]'>
        <div className='font-semibold text-[0.7rem] sm:[0.75rem] md:text-[1rem] lg:text-[1.2rem]'><label htmlFor={id}>{label} {required ? <sup className='text-red-500'>*</sup> : ''}</label></div>
        <input type={type} name={name} id={id} placeholder={placeholder} className='bg-gray-800 border-b-[1px] z-5 border-white w-full p-[0.7rem] rounded-md placeholder-gray-600'/>
        {
            showPasswordIcon &&
            <div className='absolute flex justify-end items-center top-[1.5rem] md:top-[2.4rem] w-full p-[0.7rem] text-[1.3rem] cursor-pointer'>
                {
                    seePassword ?
                    <IoEye onClick={() => setSeePassword(prev => !prev)} className='text-gray-400 z-6 hover:text-white'/>
                    :
                    <IoEyeOff onClick={() => setSeePassword(prev => !prev)} className='text-gray-400 z-6 hover:text-white'/>
                }
            </div>
        }
    </div>
  )
}

export default OneInput