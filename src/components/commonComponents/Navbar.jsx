import React, { useEffect, useState } from 'react'
import Logo from '../../assets/Logo/Logo-Full-Light.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavbarLinks } from '../../data/navbar-links';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { useLoginSignupContext } from '../../context/loginSignupContext/LoginSignupContext';
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { BsCart4 } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { apiConnector } from '../../services/ApiConnector';
import { category } from '../../services/Api';

const Navbar = () => {

    const {token} = useSelector((state) => state.auth);
    const {user} = useSelector((state) => state.profile);
    // console.log(user);
    const {totalItems} = useSelector((state) => state.cart);

    const [showCatalog,setShowCatalog] = useState(false);
    const {screenSize} = useLoginSignupContext();
    const [menuVisible,setMenuVisible] = useState(false);
    const location = useLocation();
    const [showProfileDropDown,setShowProfileDropDown] = useState(false);
    const [categories,setCategories] = useState([]);

    const activeTabHandler = (path) => {
        return matchPath({path: path},location.pathname);
    };

    const fetchCategories = async () => {
        try {
            const response = await apiConnector("get",category.CATEGORIES_API);
            // console.log("Printing categories : ",response);
            setCategories(response.data.data)
        }
        catch(err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchCategories();
    },[]);

  return (
    <div className={`w-full flex ${screenSize <= 760 ? `flex-col gap-[1rem]` : `flex row`} justify-between fixed top-0 z-100 items-center border-b-[1px] border-b-gray-600 py-[0.2rem] lg:py-[0.7rem] px-[2rem] font-semibold bg-gray-900 text-white`}>
        <div className={`${screenSize <= 760 && `flex flex-col justify-between items-center gap-[1rem]`}`}>
            <Link to='/'>
                <img src={Logo} alt=""/>
            </Link>
        </div>

        <div className='flex justify-center items-center gap-[2rem]'>
            {
                screenSize > 830 ?
                NavbarLinks.map((option) => (
                    <div key={option.title}>
                        {
                            option.title === "Catalog" ?
                            <div className='relative'>
                                {
                                    categories.length > 0 &&
                                    <div>
                                        <div className={`absolute top-[1.4rem] -right-[0.25rem] bg-white h-[2rem] w-[2rem] rotate-45 ${showCatalog ? `opacity-100` : `opacity-0`}`} onClick={() => setShowCatalog(prev => !prev)}></div>
                                        <div className={`absolute top-[2.4rem] -right-[2rem] bg-white text-black py-[0.4rem] px-[0.1rem] text-nowrap rounded-xl flex flex-col justify-center items-center gap-[0.5rem] ${showCatalog ? `opacity-100` : `opacity-0`}`}>
                                            {
                                                categories.map((category,index) => (
                                                    <span key={index} className='flex justify-center items-center p-[0.5rem] rounded-md hover:bg-gray-300 cursor-pointer' onClick={() => setShowCatalog(prev => !prev)}>{category.categoryName}</span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                }
                                <div className='flex cursor-pointer justify-center items-center gap-[5px] hover:text-yellow-400' onClick={() => setShowCatalog(prev => !prev)}>{option.title} <RiArrowDropDownLine className='text-2xl'/></div>
                            </div>
                            :
                            <Link to={option.path} onClick={() => activeTabHandler(option.path)}>
                                <span className={`cursor-pointer hover:text-yellow-400 ${activeTabHandler(option?.path) ? 'text-yellow-400' : 'text-white'}`}>{option.title}</span>
                            </Link>
                        }
                    </div>
                    ))

                :

                <div className='w-full flex justify-center items-center'>
                    <button className='p-[0.3rem] hover:border hover:border-gray-400 cursor-pointer'><TiThMenu onClick={() => setMenuVisible(true)}/></button>
                    {
                        menuVisible &&
                        <div className='absolute h-screen w-1/2 md:w-1/3 top-0 pt-[0.5rem] left-0 bg-gray-800 text-white flex flex-col justify-start items-start font-bold tracking-tight gap-[2rem]'>
                            {
                                NavbarLinks.map((option,index) => (
                                    option.title === "Catalog" ?
                                    <div className='w-full flex justify-between items-center border-b border-white px-[0.5rem] pb-[0.2rem] relative'>
                                        {
                                            categories.length > 0 &&
                                            <div>
                                                <div className={`absolute top-[1.4rem] z-1000 -right-[0.25rem] bg-white h-[2rem] w-[2rem] rotate-45 ${showCatalog ? `opacity-100` : `opacity-0`}`} onClick={() => setShowCatalog(prev => !prev)}></div>
                                                <div className={`absolute top-[2.4rem] z-1000 -right-[2rem] bg-white text-black py-[0.4rem] px-[0.1rem] text-nowrap rounded-xl flex flex-col justify-center items-center gap-[0.5rem] ${showCatalog ? `opacity-100` : `opacity-0`}`}>
                                                    {
                                                        categories.map((category,index) => (
                                                            <span key={index} className='flex justify-center items-center p-[0.5rem] rounded-md hover:bg-gray-300 cursor-pointer' onClick={() => setShowCatalog(prev => !prev)}>{category.categoryName}</span>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        }
                                        <div className='hover:text-yellow-400 hover:underline flex' onClick={() => setShowCatalog(prev => !prev)}>{option.title} <RiArrowDropDownLine className='text-2xl'/></div>
                                    </div>
                                    :
                                    <div key={index} className='w-full flex justify-between items-center border-b border-white px-[0.5rem] pb-[0.2rem]'>
                                        <Link to={option.path} className='hover:text-yellow-400 hover:underline'>{option.title}</Link>
                                        {index === 0 && <IoClose className='text-2xl cursor-pointer hover:border hover:scale-105 hover:border-white' onClick={() => setMenuVisible(false)}/>}
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>
            }
        </div>


        <div className='w-1/7 flex justify-center items-center gap-[2rem]'>
                {
                    token === null ?
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
                    :
                    <div className='flex justify-center relative items-center gap-[2rem]'>
                        {
                            user && user?.role === "Student" &&
                            <button className='px-[1rem] relative py-[0.5rem] border border-gray-700 text-white rounded-md cursor-pointer font-bold hover:border-gray-400'>
                                <Link to='/dashboard/cart'>
                                    <BsCart4/>
                                    {
                                        totalItems > 0 &&
                                        <span className='absolute p-[0.7rem] h-2.5 w-2.5 flex justify-center items-center -top-[0.5rem] right-0 text-[0.8rem] rounded-[100%] bg-red-500 text-white'>{totalItems}</span>
                                    }
                                </Link>
                            </button>
                        }
                        <button className='flex justify-center items-center gap-[0.5rem] px-[0.6rem] py-[0.3rem] border border-gray-700 text-white rounded-md cursor-pointer hover:border-gray-400 transition duration-500' onClick={() => setShowProfileDropDown(!showProfileDropDown)}>
                            <img src="" alt="UN" className='h-full w-full'/>
                            <div>
                                {
                                    showProfileDropDown ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>
                                }
                            </div>
                            <div className={`${showProfileDropDown ? `opacity-100` : `opacity-0`} absolute h-[12rem] w-full border border-gray-700 text-white rounded-md left-0 top-[2.5rem] bg-sky-50`}></div>
                        </button>
                    </div>
                }
        </div>
    </div>
  )
}

export default Navbar