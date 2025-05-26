import React from 'react'
import NormalText from '../commonComponents/NormalText'
import HighlightedText from '../commonComponents/HighlightedText'
import KnowYourProgress from '../../assets/Images/Know_your_progress.png'
import CompareWithOthers from '../../assets/Images/Compare_with_others.png'
import PlanYourLessons from '../../assets/Images/Plan_your_lessons.png'
import Button from '../commonComponents/Button'
import { motion } from 'framer-motion';
import { useLoginSignupContext } from '../../context/loginSignupContext/LoginSignupContext'

const YourSwissKnife = () => {

  const transition = {type: 'normal',duration: 1};

  const {screenSize} = useLoginSignupContext();

  return (
    <div className='w-full bg-white text-black flex flex-col justify-center items-center pt-[2rem] gap-[0.5rem] pb-[5rem]'>
        <div className='flex gap-[0.5rem]'>
            <NormalText text={"Your swiss knife for"}/>
            <motion.div initial={{opacity:0, x:100}} whileInView={{opacity:1, x:0}} transition={transition}><HighlightedText text={"learning any language"}/></motion.div>
        </div>
        <p className='text-center text-[0.6rem] md:text-[1rem] w-full md:w-[70%]'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p>
        <div className='flex w-[85%] justify-center items-center relative'>
            <motion.div initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}} transition={transition} className='w-[40%] flex justify-center items-center absolute left-0'><img src={KnowYourProgress} alt="" className='w-[90%]'/></motion.div>
            <motion.div initial={{opacity:0, y:-100}} whileInView={{opacity:1, y:0}} transition={transition} className='w-[40%] flex justify-center items-center z-10'><img src={CompareWithOthers} alt="" className='w-full'/></motion.div>
            <motion.div initial={{opacity:0, x:100}} whileInView={{opacity:1, x:0}} transition={transition} className=' w-[40%] flex justify-center items-center absolute right-0'><img src={PlanYourLessons} alt="" className='w-full'/></motion.div>
        </div>
        <Button text={"Learn More"} outline={false} arrow={false}/>
    </div>
  )
}

export default YourSwissKnife