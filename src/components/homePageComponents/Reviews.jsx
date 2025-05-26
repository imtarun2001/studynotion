import React from 'react'
import NormalText from '../commonComponents/NormalText'
import HighlightedText from '../commonComponents/HighlightedText'
import { reviews } from '../../data/reviews'
import { FaUser } from "react-icons/fa";
import { motion } from 'framer-motion';

const Reviews = () => {

    const transition = {type: 'normal',duration: 1};
    const sortedReviews = reviews.sort((a,b) => {
        return b.rating - a.rating
    });
    
  return (
    <div className='w-full flex flex-col justify-center items-center gap-[5rem] p-[2rem]'>
        <div className='flex justify-center items-center gap-[10px]'>
            <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={transition}><HighlightedText text={"Reviews From"}/></motion.div>
            <NormalText text={"Other Learners"}/>
        </div>
        <div className='w-full flex justify-between gap-[5rem] px-[1rem] py-[2rem] overflow-x-scroll'>
            {
                sortedReviews.map((obj,index) => (
                    <motion.div initial={{opacity:0, y:-200}} whileInView={{opacity:1, y:0}} transition={transition} key={index} className={`flex flex-col justify-between items-start gap-[0.3rem] md:gap-[1rem] py-[1rem] px-[2rem] hover:scale-105 ${index % 2 === 0 ? 'bg-black text-white' : 'bg-white text-black'}`}>
                        <div className='flex justify-center items-center gap-[2rem] text-[1.5rem] font-bold'>{obj.username} <FaUser/></div>
                        <div className='flex flex-col items-start justify-center'>
                            <div className='text-[0.9rem] font-bold'>Comment</div>
                            <div className='text-[0.7rem] font-semibold'>{obj.comment}</div>
                        </div>
                        <div>{obj.rating} ⭐</div>
                    </motion.div>
                ))
            }
        </div>
    </div>
  )
}

export default Reviews