import React from 'react'
import Navbar from '../components/commonComponents/Navbar'
import { IoArrowBackSharp } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import { useLoginSignupContext } from '../context/loginSignupContext/LoginSignupContext';
import OneInput from '../components/commonComponents/OneInput';

const VerifyEmail = () => {

    const {signupFormdata,signupChangeHandler,signupSubmitHandler} = useLoginSignupContext();

  return (
    <div className='flex bg-gray-800 flex-col justify-start items-center'>
        <Navbar/>
        <div className='flex justify-center items-center bg-black h-screen w-full'>
            <div className='flex w-full sm:w-[35%] mt-[4rem] flex-col justify-center items-start gap-[2rem] p-[2rem] rounded-xl border border-white'>
                <div className='flex flex-col justify-center items-start gap-[1rem]'>
                    <div className='text-[1.8rem] font-semibold text-white'>Verify Email</div>
                    <div className='text-[1.2rem] text-gray-500'>A verification code has been sent to you. Enter the code below</div>
                </div>
                <OneInput type={"text"} name={"otp"} id={"otp"} onChange={signupChangeHandler} value={signupFormdata.otp} label={"Enter OTP"} placeholder={"enter otp"}/>
                <div className='flex w-full justify-center items-center'>
                    <button className='bg-yellow-400 tracking-tight cursor-pointer w-full flex justify-center items-center py-[0.7rem] text-[1.1rem] font-bold text-black rounded-xl' onClick={signupSubmitHandler}>Verify Email</button>
                </div>
                <div className='flex justify-between items-center text-[1.2rem] w-full'>
                    <div className='flex justify-center items-center gap-[0.5rem] text-white cursor-pointer hover:underline'><IoArrowBackSharp/>Back to Signup</div>
                    <div className='flex justify-center items-center gap-[0.5rem] text-cyan-400 hover:text-cyan-500 underline cursor-pointer'><FaClockRotateLeft/>Resend it</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VerifyEmail