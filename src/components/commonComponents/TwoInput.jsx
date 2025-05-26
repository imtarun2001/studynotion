import React from 'react'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const TwoInput = ({firstInputFieldData,secondInputFieldData}) => {
    let arr = [firstInputFieldData,secondInputFieldData];
  return (
    <div className='flex w-full justify-between items-center'>
        {
            arr.map((ele,index) => (
                <div key={index} className='flex w-[45%] relative flex-col gap-[0.3rem] justify-start items-start'>
                    <div className='text-[0.7rem] sm:[0.75rem] md:text-[1rem] lg:text-[1.2rem] font-semibold'><label htmlFor={ele.id}>{ele.label} {ele.required ? <sup className='text-red-500'>*</sup> : ''}</label></div>
                    <input type={ele.type} name={ele.name} id={ele.id} placeholder={ele.placeholder} className='bg-gray-800 z-5 border-b-[1px] border-gray-400 w-full p-[0.7rem] rounded-md placeholder-gray-600'/>
                    {
                        ele.showPasswordIcon &&
                        <div className='absolute flex justify-end items-center w-full p-[0.5rem] top-[1.5rem] sm:top-[2.4rem] text-[1.3rem] cursor-pointer'>
                            {
                                ele.seePassword ?
                                <IoEye onClick={() => ele.setSeePassword(prev => !prev)} className='text-gray-400 z-6 hover:text-white'/>
                                :
                                <IoEyeOff onClick={() => ele.setSeePassword(prev => !prev)} className='text-gray-400 z-6 hover:text-white'/>
                            }
                        </div>
                    }
                </div>
            ))
        }
    </div>
  )
}

export default TwoInput