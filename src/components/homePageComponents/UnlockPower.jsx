import React, { useEffect, useState } from 'react'
import NormalText from '../commonComponents/NormalText'
import HighlightedText from '../commonComponents/HighlightedText'
import FadedText from '../commonComponents/FadedText'
import Filterbar from './Filterbar'
import { HomePageExplore } from '../../data/homepage-explore'
import Courses from './Courses'
import Button from '../commonComponents/Button'
import BackgroundPatternImage from '../../assets/Images/bghome.svg'
import { motion } from 'framer-motion';

const UnlockPower = () => {

    const transition = {type: 'normal',duration: 1};

    const [category,setCategory] = useState(HomePageExplore[0].tag);
    const [courses,setCourses] = useState(HomePageExplore[0].courses);
    const [clickedCard,setClickedCard] = useState(HomePageExplore[0].courses[0]);

    
    useEffect(() => {
        const newCourses = HomePageExplore.find((ele) => ele.tag === category);
        setCourses(newCourses.courses);
    },[category]);

  return (
    <div className='flex relative flex-col justify-center items-center gap-[1.5rem] mt-[5rem]'>
        <div className='flex gap-[0.5rem]'>
            <NormalText text={"Unlock the "}/>
            <motion.div initial={{opacity:0, y:-100}} whileInView={{opacity:1, y:0}} transition={transition}><HighlightedText text={"Power of Code"}/></motion.div>
        </div>
        <FadedText text={"Learn to Build Anything You Can Imagine."}/>
        <Filterbar HomePageExplore={HomePageExplore} category={category} setCategory={setCategory}/>
        <Courses courses={courses} clickedCard={clickedCard} setClickedCard={setClickedCard}/>
        <div className='flex justify-center items-end gap-[2rem] md:bg-white absolute w-full h-1/2 -bottom-[9rem] pb-[2rem]' 
        style={{
            backgroundImage: `url(${BackgroundPatternImage})`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: '45vw',
            backgroundPosition: 'center',
        }}>
            <Button text={"Explore Full Catalog"} outline={false} arrow={true}/>
            <Button text={"Learn more"} outline={true} arrow={false} shadow={"black"}/>
        </div>
    </div>
  )
}

export default UnlockPower