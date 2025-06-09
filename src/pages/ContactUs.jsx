import React from 'react'
import Navbar from '../components/commonComponents/Navbar'
import Footer from '../components/homePageComponents/Footer'
import Reviews from '../components/homePageComponents/Reviews'
import NormalText from '../components/commonComponents/NormalText'
import FadedText from '../components/commonComponents/FadedText'
import OneInput from '../components/commonComponents/OneInput'
import TwoInput from '../components/commonComponents/TwoInput'
import PhoneInput from '../components/commonComponents/PhoneInput'
import TextInput from '../components/commonComponents/TextInput'
import { IoIosChatboxes } from "react-icons/io";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import HighlightedText from '../components/commonComponents/HighlightedText'
import { motion } from 'framer-motion'

const ContactUs = () => {

    const transition = {type: 'normal',duration: 1};

  return (
    <div className='w-full flex flex-col overflow-x-hidden justify-start items-center bg-black text-white'>
        <Navbar/>
        <div className='flex flex-col md:flex-row w-full justify-center sm:justify-around items-center md:items-start gap-[2rem] pt-[10rem] md:pt-[8rem]'>
          <div className='flex flex-col justify-center bg-gray-800 items-center rounded-xl gap-[0.8rem] md:gap-[2rem] px-[1rem] py-[0.7rem] md:py-[2rem]'>
            <div className='w-full flex flex-col items-center md:items-start justify-start'>
              <div className='flex justify-start items-center  gap-[0.5rem] font-bold md:text-[1.3rem]'><IoIosChatboxes/> Chat on us</div>
              <span>Our friendly team is here to help.</span>
              <span>info@studynotion.com</span>
            </div>
            <div className='w-full flex flex-col items-center md:items-start justify-start'>
              <div className='flex justify-start items-center  gap-[0.5rem] font-bold md:text-[1.3rem]'><FaGlobeAmericas/> Visit us</div>
              <span>Come and say hello at our office HQ.</span>
              <span>Choudwar,Talabazar road,</span>
              <span>Cuttack-754025</span>
            </div>
            <div className='w-full flex flex-col items-center md:items-start justify-start'>
              <div className='flex justify-start items-center  gap-[0.5rem] font-bold md:text-[1.3rem]'><IoCall/> Call us</div>
              <span>Mon - Fri From 8am to 5pm</span>
              <span>+123 456 7869</span>
            </div>
          </div>
          <div className='flex w-4/5 sm:w-4/7 flex-col justify-center items-start gap-[2rem] outline outline-gray-500 rounded-xl p-[2rem]'  style={{boxShadow: '0px 0px 20px purple'}}>
            <div className='flex flex-col justify-center items-start'>
              <NormalText text={"Got an Idea? We've got the skills."}/>
              <motion.div initial={{opacity:0,x:300}} whileInView={{opacity:1,x:0}} transition={transition}><HighlightedText color={true} text={"Let's team up"}/></motion.div>
              <FadedText justify={true} text={"Tell us more about yourself and what you've got in mind."}/>
            </div>
            <TwoInput 
              firstInputFieldData={{type: "text",name:"firstName",id:"firstName",label:"First Name",placeholder:"enter first name"}}
              secondInputFieldData={{type: "text",name:"lastName",id:"lastName",label:"Last Name",placeholder:"enter last name"}}
            />
            <OneInput type={"email"} name={"email"} id={"email"} label={"Email Address"} placeholder={"enter email"}/>
            <PhoneInput/>
            <TextInput/>
            <button className='bg-yellow-400 cursor-pointer w-full flex justify-center items-center py-[0.7rem] text-[1.1rem] font-bold text-black tracking-tight rounded-xl'>Send Message</button>
          </div>
        </div>
        <Reviews/>
        <Footer/>
    </div>
  )
}

export default ContactUs