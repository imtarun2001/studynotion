import React, { useState } from 'react'
import Navbar from '../commonComponents/Navbar'
import PatternImage from '../../assets/Images/frame.png'
import { useLoginSignupContext } from '../../context/loginSignupContext/LoginSignupContext'
import OneInput from '../commonComponents/OneInput';
import TwoInput from '../commonComponents/TwoInput';
import { Link, useNavigate } from 'react-router-dom';
import NormalText from '../commonComponents/NormalText';
import PhoneInput from '../commonComponents/PhoneInput';
import axios from 'axios';
import toast from "react-hot-toast";


const LoginSignup = ({headingText,loginBtn,image}) => {

    const {inLogin,signupFormdata,setSignupFormdata,signupChangeHandler,loginFormdata,loginChangeHandler,loginSubmitHandler} = useLoginSignupContext();
    const arr = ['Student','Instructor'];
    const [seeLoginPassword,setSeeLoginPassword] = useState(false);
    const [seeSignupPassword,setSeeSignupPassword] = useState(false);
    const [seeSignupConfirmPassword,setSeeSignupConfirmPassword] = useState(false);

    const navigate = useNavigate();

    const ToDoOnClickingCreateAccountButton = async () => {
        try {
            await axios.post(`/studynotion/v1/generateOtp`,{email: signupFormdata.email});
            toast.success(`Otp sent to your email`);
            navigate('/verify-email');
        }
        catch(err) {
            toast.error(err.message);
        }
    };





  return (
    <div className='h-screen relative bg-gray-900 flex flex-col justify-start items-center gap-[5rem] pb-[2rem] py-[10rem] overflow-y-scroll'>
        <Navbar/>
        <div className='flex flex-col sm:flex-row w-full justify-between items-center text-white gap-[2rem] sm:gap-0'>
            <div className='h-full w-full sm:w-1/2 flex flex-col justify-start items-center sm:items-start gap-[2rem] px-[0.5rem] sm:pl-[3rem]'>
                <div className='flex flex-col w-full justify-center items-start'>
                    <NormalText text={headingText}/>
                    <div className='font-semibold text-[1rem] text-gray-600'>Build skills for today, tomorrow, and beyond.</div>
                    <div className='font-semibold italic text-[1rem] text-cyan-500'>Education to future-proof your career.</div>
                </div>

                {
                    inLogin ?
                    <div className='flex w-full sm:w-3/4 flex-col justify-center items-start gap-[0.5rem]'>
                        <OneInput type={"email"} name={"email"} id={"email"} onChange={loginChangeHandler} value={loginFormdata.email} label={"Email Address"} placeholder={"enter email"} required={true}/>
                        <OneInput type={seeLoginPassword ? "text" : "password"} name={"password"} id={"loginPassword"} onChange={loginChangeHandler} value={loginFormdata.password} label={"Password"} placeholder={"enter password"} seePassword={seeLoginPassword} setSeePassword={setSeeLoginPassword} showPasswordIcon={true} required={true}/>       
                    </div>
                    :

                    <div className='flex w-full sm:w-3/4 flex-col justify-center items-start gap-[1rem]'>
                        <div className='flex justify-center items-center gap-[1rem] p-[0.2rem] border-b-[1px] border-gray-600 rounded-full bg-gray-800'>
                            {
                                arr.map((ele) => (
                                    <div key={ele} className={`flex justify-center font-semibold items-center p-[0.7rem] cursor-pointer rounded-full text-gray-500 hover:text-white ${signupFormdata.role === ele ? 'bg-black text-white' : ''}`}
                                    onClick={() => setSignupFormdata((prev) => {
                                        return {
                                            ...prev,
                                            role: ele
                                        };
                                    })}
                                    >
                                        {ele}
                                    </div>
                                ))
                            }
                        </div>
                        <TwoInput 
                                firstInputFieldData={{type: "text",name:"firstName",id:"firstName",label:"First Name",placeholder:"enter first name",required: true}}
                                secondInputFieldData={{type: "text",name:"lastName",id:"lastName",label:"Last Name",placeholder:"enter last name",required: true}}
                                onChange={signupChangeHandler}
                        />
                        <OneInput type={"email"} name={"email"} id={"email"} onChange={signupChangeHandler} value={signupFormdata.email} label={"Email Address"} placeholder={"enter email"} required={true}/>
                        <PhoneInput onChange={signupChangeHandler} value={signupFormdata.phoneNumber}/>
                        <TwoInput 
                            firstInputFieldData={{type: seeSignupPassword ? "text" : "password",name:"password",id:"signUpPassword",label:"Create Password",placeholder:"enter password",showPasswordIcon: true,seePassword: seeSignupPassword,setSeePassword: setSeeSignupPassword,required: true,value: signupFormdata.password}}
                            secondInputFieldData={{type: seeSignupConfirmPassword ? "text" : "password",name:"confirmPassword",id:"singupConfirmPassword",label:"Confirm Password",placeholder:"re-enter password",showPasswordIcon: true,seePassword: seeSignupConfirmPassword,setSeePassword: setSeeSignupConfirmPassword,required: true,value: signupFormdata.confirmPassword}}
                            onChange={signupChangeHandler}
                        />
                    </div>
                }

                <button className='bg-yellow-400 tracking-tight cursor-pointer w-3/4 flex justify-center items-center py-[0.7rem] text-[1.1rem] font-bold text-black rounded-xl' onClick={loginBtn ? loginSubmitHandler : ToDoOnClickingCreateAccountButton}>{loginBtn ? 'Log in' : 'Create Account'}</button>
                <div className='w-3/4 text-center font-semibold'>
                    {
                        loginBtn ?
                        <div className='flex justify-center items-center gap-[0.3rem]'>
                            Do not have an account?
                            <Link to='/signup'>
                                <span className='text-blue-500 hover:text-cyan-300 hover:underline'>
                                    Signup
                                </span>
                            </Link>
                        </div>
                        :
                        <div className='flex justify-center items-center gap-[0.3rem]'>
                            Already had an account?
                            <Link to='/login'>
                                <span className='text-blue-500 hover:text-cyan-300 hover:underline'>
                                    Login
                                </span>
                            </Link>
                        </div>
                    }
                </div>
            </div>
            <div className='flex w-full sm:w-1/2 justify-center items-center'>
                <div className='flex w-1/2 relative justify-center items-center'>
                    <img src={PatternImage} alt="" />
                    <img src={image} alt="" className='absolute -top-[1rem] -left-[1rem]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup