import React, { useState } from 'react'
import Logo from '../../assets/Logo/Logo-Full-Light.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavbarLinks } from '../../data/navbar-links';
import { Link } from 'react-router-dom';
import { useLoginSignupContext } from '../../context/loginSignupContext/LoginSignupContext';
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

    const [showCatalog,setShowCatalog] = useState(false);
    const {screenSize,canGotoDashboard,setCanGotoDashboard} = useLoginSignupContext();
    const [menuVisible,setMenuVisible] = useState(false);

  return (
    <div className={`w-full flex ${screenSize <= 830 ? `flex-col gap-[1rem]` : `flex row`} justify-between fixed top-0 z-100 items-center border-b-[1px] border-b-gray-800 py-[0.2rem] lg:py-[0.7rem] px-[2rem] font-semibold bg-gray-900 text-white`}>
        <div className={`${screenSize <= 830 ? `flex flex-col justify-between items-center gap-[1rem]` : ``}`}>
            <Link to='/'>
                <img src={Logo} alt=""/>
            </Link>
            {
                screenSize <= 830 &&
                <div className='w-full flex justify-between md:justify-around items-center'>
                    <button className='p-[0.3rem] hover:border hover:border-gray-400 cursor-pointer'><TiThMenu onClick={() => setMenuVisible(true)}/></button>
                    {
                        menuVisible &&
                        <div className='absolute h-screen w-1/2 md:w-1/3 top-0 pt-[0.5rem] left-0 bg-gray-800 text-white flex flex-col justify-start items-start font-bold tracking-tight gap-[2rem]'>
                            {
                                NavbarLinks.map((ele,index) => (
                                    <div key={index} className='w-full flex justify-between items-center border-b border-white px-[0.5rem] pb-[0.2rem]'>
                                        <Link to={ele.path}>{ele.title}</Link>
                                        {index === 0 && <IoClose className='text-2xl cursor-pointer hover:border hover:scale-105 hover:border-white' onClick={() => setMenuVisible(false)}/>}
                                    </div>
                                ))
                            }
                        </div>
                    }
                    {
                        canGotoDashboard ?
                        <div className='flex justify-center items-center gap-[1rem]'>
                            <Link to='/'>
                                <button className='px-[0.6rem] py-[0.3rem] border border-gray-700 text-white rounded-md cursor-pointer hover:border-gray-400' onClick={() => setCanGotoDashboard(false)}>
                                    Logout
                                </button>
                            </Link>
                        </div>

                        :

                        <div className='flex justify-center items-center gap-[1rem]'>
                            <Link to='/login'>
                                <button className='px-[0.6rem] py-[0.3rem] border border-gray-700 text-white rounded-md cursor-pointer hover:border-gray-400'>
                                    Login
                                </button>
                            </Link>
                            <Link to='/signup'>
                                <button className='px-[0.6rem] py-[0.3rem] border border-gray-700 text-white rounded-md cursor-pointer hover:border-gray-400'>
                                    Signup
                                </button>
                            </Link>
                        </div>
                    }
                </div>
            }
        </div>
        <div className='flex justify-center items-center gap-[2rem]'>
            {
                screenSize > 830 ?
                NavbarLinks.map((option) => (
                    <div key={option.title}>
                        {
                            option.title === "Catalog" ? 
                            <div className='relative'>
                                <div className={`absolute top-[1.4rem] -right-[0.25rem] bg-white h-[2rem] w-[2rem] rotate-45 ${showCatalog ? `opacity-100 visible` : `opacity-0 hidden`}`} onMouseEnter={() => setShowCatalog(true)} onMouseLeave={() => setShowCatalog(false)}></div>
                                <div className={`absolute top-[2.4rem] -right-[2rem] bg-white text-black h-[3rem] w-[10rem] rounded-xl flex justify-center items-center ${showCatalog ? `opacity-100 visible` : `opacity-0 hidden`}`} onMouseEnter={() => setShowCatalog(true)} onMouseLeave={() => setShowCatalog(false)}>No courses found !</div>
                                <div className='flex cursor-pointer justify-center items-center gap-[5px] hover:text-yellow-400' onMouseEnter={() => setShowCatalog(true)} onMouseLeave={() => setShowCatalog(false)}>{option.title} <RiArrowDropDownLine className='text-2xl'/></div>
                            </div>
                            :
                            <Link to={option.path}>
                                <span className='cursor-pointer hover:text-yellow-400'>{option.title}</span>
                            </Link>
                        }
                    </div>
                ))
                :
                <div></div>
            }
        </div>
        {
            screenSize > 830 &&
            canGotoDashboard ?
                        <div className='flex justify-center items-center gap-[1rem]'>
                            <Link to='/'>
                                <button className='px-[0.6rem] py-[0.3rem] border border-gray-700 text-white rounded-md cursor-pointer hover:border-gray-400' onClick={() => setCanGotoDashboard(false)}>
                                    Logout
                                </button>
                            </Link>
                        </div>

                        :

                        <div className='flex justify-center items-center gap-[1rem]'>
                            <Link to='/login'>
                                <button className='px-[0.6rem] py-[0.3rem] border border-gray-700 text-white rounded-md cursor-pointer hover:border-gray-400'>
                                    Login
                                </button>
                            </Link>
                            <Link to='/signup'>
                                <button className='px-[0.6rem] py-[0.3rem] border border-gray-700 text-white rounded-md cursor-pointer hover:border-gray-400'>
                                    Signup
                                </button>
                            </Link>
                        </div>
        }
    </div>
  )
}

export default Navbar