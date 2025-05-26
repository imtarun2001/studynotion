import React from 'react'
import { FaUserGroup } from "react-icons/fa6";
import { SiLevelsdotfyi } from "react-icons/si";
import { motion } from 'framer-motion';

const Courses = ({courses,setClickedCard,clickedCard}) => {

    const transition = {type: 'normal',duration: 1};

  return (
    <div className='flex flex-col md:flex-row justify-center items-center px-[2rem] gap-[2rem] mt-[2rem] z-10'>
        {
            courses.map((course,index) => (
                <motion.div 
                initial={index === 0 ? {opacity:0, x:-200} : index === 1 ? {opacity:0, y:200} : index === 2 ? {opacity:0, x:200} : ''}
                whileInView={index === 0 ? {opacity:1, x:0} : index === 1 ? {opacity:1, y:0} : index === 2 ? {opacity:1, x:0} : ''}
                transition={transition} key={index} onClick={() => setClickedCard(course)}
                className={`flex flex-col justify-between items-start cursor-pointer w-[15rem] py-[0.5rem] h-[15rem] md:h-[17rem] ${clickedCard === course ? 'bg-white text-black shadow-2xl shadow-amber-400' : 'bg-black text-white outline-1 outline-cyan-300 shadow-2xl shadow-cyan-400'}`}>
                    <div className='flex flex-col gap-[0.5rem] px-[1rem]'>
                        <p className='text-[1.5rem] font-bold'>{course.heading}</p>
                        <p>{course.description}</p>
                    </div>
                    <div className='flex justify-between items-center w-full border-t-2 pt-1 px-[1rem]'>
                        <p className='flex justify-center items-center gap-[0.5rem]'><SiLevelsdotfyi/>{course.level}</p>
                        <p className='flex justify-center items-center gap-[0.5rem]'><FaUserGroup/> {course.lessonNumber} lessons</p>
                    </div>
                </motion.div>
            ))
        }
    </div>
  )
}

export default Courses