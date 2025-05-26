import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import HighlightedText from '../commonComponents/HighlightedText';
import Button from '../commonComponents/Button';
import Video from '../../assets/Images/banner.mp4'
import NormalText from '../commonComponents/NormalText';
import FadedText from '../commonComponents/FadedText';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EmpowerYourFuture = () => {

  const transition = {type: 'normal',duration: 1};
  const transitionTwo = {type: 'normal',duration: 2};

  return (
    <div className='w-screen flex flex-col justify-center items-center gap-[2rem] py-[5rem] md:py-[2rem] relative'>
        
        <Link to='/signup'>
          <button className='z-10 flex justify-center items-center gap-[1rem] shadow-2xl shadow-amber-400 bg-amber-400 text-black font-bold outline-3 outline-amber-50 cursor-pointer hover:scale-95 rounded-4xl px-[2rem] py-[1rem]'><motion.span initial={{scale:0}} whileInView={{scale:1}} transition={transitionTwo} className='flex justify-center items-center gap-[0.5rem]'>become an instructor <FaArrowRight/></motion.span></button>
        </Link>

        <div className='flex gap-[0.5rem]'>
          <NormalText text={'Empower Your Future with '}/>
          <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={transition}><HighlightedText text={"Coding Skills"}/></motion.div>
        </div>

        <FadedText justify={false} text={'With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.'}/>

        <div className='flex justify-center items-center gap-[5rem]'>
            <Button text={"Learn more"} outline={true} arrow={false} shadow={"white"}/>
            <Button text={"Book a demo"} outline={false} arrow={true}/>
        </div>

        <div className='flex justify-center items-center relative mt-[7rem] w-full'>
            <div className='absolute h-full w-1/2' style={{boxShadow: '0px 0px 30px rgb(34, 211, 238)'}}></div>
            <motion.div initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={transition} className='flex justify-center items-center'>
              <video className='md:w-1/2 w-[70%] h-full z-10' muted loop autoPlay style={{boxShadow: '10px 10px 1px white'}}>
                <source src={Video} type="video/mp4" />
              </video>
            </motion.div>
        </div>

    </div>
  )
}

export default EmpowerYourFuture