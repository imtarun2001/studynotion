import React from 'react'
import Instructor from '../../assets/Images/Instructor.png'
import NormalText from '../commonComponents/NormalText'
import HighlightedText from '../commonComponents/HighlightedText'
import FadedText from '../commonComponents/FadedText'
import Button from '../commonComponents/Button'
import { motion } from 'framer-motion';

const BecomeInstructor = () => {

  const transition = {type: 'normal',duration: 1};

  return (
    <div className='bg-black w-full py-[5rem] flex flex-col md:flex-row justify-center items-start md:items-center gap-[1rem]'>
        <motion.div initial={{opacity:0, x:-300}} whileInView={{opacity:1, x:0}} transition={transition} className='w=1/2 flex justify-center items-center'>
            <img src={Instructor} alt="" className='w-[65%] md:w-[95%]' style={{boxShadow: '-20px -20px 1px white'}}/>
        </motion.div>

      <div className='w-full md:w-1/2 flex flex-col justify-center items-start gap-[2rem]'>
        {/* 1st item - always aligned to start */}
        <div className='flex flex-col justify-center items-start'>
          <NormalText text={"Become an"} />
          <motion.div initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} transition={transition}>
            <HighlightedText text={"Instructor"} />
          </motion.div>
        </div>

        {/* 2nd item - center on <md, start on md+ */}
        <div className='w-full flex justify-center md:justify-start'>
          <div className='w-3/4 md:w-full flex justify-center md:justify-start'>
            <FadedText
              justify={true}
              text={
                'Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.'
              }
              size={"0.8rem"}
            />
          </div>
        </div>

        {/* 3rd item - end on <md, start on md+ */}
        <div className='w-full flex justify-end md:justify-start'>
          <div className='w-3/4 md:w-full flex justify-end md:justify-start'>
            <Button text={"Start Teaching Today"} outline={false} arrow={true} navigateTo={'signup'} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default BecomeInstructor