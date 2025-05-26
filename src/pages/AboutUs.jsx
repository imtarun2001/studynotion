import React from 'react'
import Navbar from '../components/commonComponents/Navbar'
import Reviews from '../components/homePageComponents/Reviews'
import Footer from '../components/homePageComponents/Footer'
import NormalText from '../components/commonComponents/NormalText'
import HighlightedText from '../components/commonComponents/HighlightedText'
import FadedText from '../components/commonComponents/FadedText'
import AboutUsPhoto1 from '../assets/Images/aboutus1.webp'
import AboutUsPhoto2 from '../assets/Images/aboutus2.webp'
import AboutUsPhoto3 from '../assets/Images/aboutus3.webp'
import AboutUsPhoto4 from '../assets/Images/FoundingStory.png'
import TwoInput from '../components/commonComponents/TwoInput'
import OneInput from '../components/commonComponents/OneInput'

import { motion } from 'framer-motion'
import PhoneInput from '../components/commonComponents/PhoneInput'
import TextInput from '../components/commonComponents/TextInput'

const AboutUs = () => {

  const transition = {type: 'normal',duration: 1};

  const arrOfPics = [AboutUsPhoto1,AboutUsPhoto2,AboutUsPhoto3];

  const arrOfContents = [
    {ch: '5K',cb: 'Active Students'},
    {ch: '10+',cb: 'Mentors'},
    {ch: '200+',cb: 'Courses'},
    {ch: '50+',cb: 'Awards'},
  ];

  return (
    <div className='text-white bg-black w-full overflow-x-hidden flex flex-col justify-start items-center pt-[5rem]'>
        <Navbar/>
        <div className='flex relative w-full flex-col justify-start items-center'>
          <div className='flex relative flex-col justify-start items-center pt-[4rem] bg-gray-800'>
            <div className='flex flex-col h-[12rem] md:h-[25rem] justify-start items-center'>
              <NormalText text={"Driving Innovation in Online Education for a"}/>
              <div className='flex justify-center items-center z-20 gap-[0.5rem]'>
                <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={transition}><HighlightedText color={true} text={"Brighter"}/></motion.div>
                <motion.div initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} transition={transition}><HighlightedText text={"Future"}/></motion.div>
              </div>
              <div className='flex justify-center items-center'>
                <FadedText text={"Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community."} justify={false} size={"0.7rem"}/>
              </div>
            </div>
            <div className='flex absolute top-[14rem] md:bottom-[15rem] justify-center items-center gap-[2rem] md:gap-0'>
              {
                arrOfPics.map((pic,index) => (
                  <img key={index} src={pic} alt="" className='w-[25%] md:w-[40%]'/>
                ))
              }
            </div>
            <div className='pt-[6rem] sm:pt-[8rem] pb-[2rem] px-[3.5rem] text-center border-b border-gray-500 bg-black'>
              <NormalText text={"We are passionate about revolutionizing the way we learn. Our innovative platform "}/><HighlightedText text={"combines technology,"}/><HighlightedText color={true} text={"expertise,"}/><NormalText text={"and community to create an "}/> <motion.div className='inline-block' initial={{opacity:0,y:300}} whileInView={{opacity:1,y:0}} transition={transition}><HighlightedText color={true} text={"unparalleled educational experience."}/></motion.div>
            </div>
          </div>
          <div className='flex px-[2rem] md:w-full gap-[3rem] md:gap-0 sm:gap-0 flex-col sm:flex-row md:flex-row justify-between items-center py-[2rem]'>
            <div className='flex flex-col sm:w-1/2 justify-start items-start gap-[2rem]'>
              <motion.div  initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} transition={transition}><HighlightedText color={true} text={"Our Founding Story"}/></motion.div>
              <FadedText justify={true} text={"Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world."}/>
              <FadedText justify={true} text={"As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential."}/>
            </div>
            <div className='flex justify-center sm:w-1/2 items-center relative'>
              <div className='absolute w-full h-full' style={{boxShadow: '0px 0px 30px fuchsia'}}></div>
              <img src={AboutUsPhoto4} alt="" className='w-full'/>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row px-[2rem] gap-[2rem] sm:gap-0 justify-between items-center sm:py-[3rem]'>
            <div className='flex sm:w-[40%] flex-col justify-start items-start gap-[2rem]'>
              <motion.div initial={{opacity:0,x:300}} whileInView={{opacity:1,x:0}} transition={transition}><HighlightedText color={true} text={"Our Vision"}/></motion.div>
              <FadedText justify={true} text={"With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience."}/>
            </div>
            <div className='flex sm:w-[40%] flex-col justify-start items-start gap-[2rem]'>
              <motion.div initial={{opacity:0,x:300}} whileInView={{opacity:1,x:0}} transition={transition}><HighlightedText text={"Our Mission"}/></motion.div>
              <FadedText justify={true} text={"Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities."}/>
            </div>
          </div>
          <div className='flex justify-center my-[2rem] items-center gap-[2rem] sm:gap-[5rem] md:gap-[15rem] py-[0.5rem] sm:py-[1rem] md:py-[2rem] bg-gray-600 w-full'>
              {
                arrOfContents.map((content,index) => (
                  <div key={index} className='flex flex-col justify-center items-center gap-[1rem]'>
                    <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={transition} className='text-[1rem] sm:text-[1.3rem] md:text-[1.6rem] font-bold'>{content.ch}</motion.div>
                    <motion.div initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} transition={transition} className='text-[0.7rem] sm:text-[1rem] md:text-[1.2rem] font-bold'>{content.cb}</motion.div>
                  </div>
                ))
              }
          </div>
          <div className='flex flex-col w-5/6 sm:w-auto justify-center items-center rounded-xl gap-[2rem] p-[1rem]' style={{boxShadow: '0px 0px 10px white'}}>
            <div className='flex flex-col justify-start items-center'>
              <NormalText text={"Get in Touch"}/>
              <FadedText text={"We'd love to here for you, Please fill out this form."}/>
            </div>
            <div className='flex flex-col justify-start items-center gap-[1rem]'>
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
        </div>
        <Reviews/>
        <Footer/>
    </div>
  )
}

export default AboutUs