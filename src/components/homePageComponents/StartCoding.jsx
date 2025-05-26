import React from 'react'
import HighlightedText from '../commonComponents/HighlightedText'
import NormalText from '../commonComponents/NormalText'
import FadedText from '../commonComponents/FadedText'
import Button from '../commonComponents/Button'
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'

const StartCoding = () => {

    const transition = {type: 'normal',duration: 1};

    const arr = [1,2,3,4,5,6,7,8,9,10];
    const arrOfTexts = [
                        'import React from "react";',
                        'import CTAButton from "./Button";',
                        'import TypeAnimation from "react-type";',
                        'import { FaArrowRight } from "react-icons/fa";',
                        'const Home = () => {',
                        'return (',
                        '<div>Home</div>',
                        ')',
                        '}',
                        'export default Home;'
                    ];

  return (
        <div className='w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-[5rem] mt-[5rem] md:px-[1rem]'>
            <div className='md:w-[35%] border border-cyan-300 text-cyan-300 flex gap-[1rem] pl-[1rem] py-[1rem]'>
                <div className='flex flex-col'>
                    {
                        arr.map((ele) => (
                            <span key={ele}>{ele}</span>
                        ))
                    }
                </div>
                <div className='flex flex-col'>
                    {
                        arrOfTexts.map((ele,index) => (
                            // <span key={index}>{ele}</span>
                            <TypeAnimation
                                key={index}
                                sequence={[
                                   ele,1000
                                ]}
                                wrapper="div"
                                cursor={true}
                                repeat={Infinity}
                                style={{ whiteSpace: 'pre-line', fontFamily: 'monospace', fontSize: '1rem' }}
                            />
                        ))
                    }
                </div>
            </div>
            <div className='w-full md:w-[45%] flex flex-col gap-[1.5rem] justify-center items-center md:items-start'>
                <div className='flex flex-row md:flex-col justify-center items-center md:justify-start md:items-start w-full gap-[0.3rem] md:gap-0'>
                    <div className='flex gap-[0.5rem]'>
                        <NormalText text={'Start '}/>
                        <motion.div initial={{opacity:0, y:-100}} whileInView={{opacity:1, y:0}} transition={transition}><HighlightedText text={'coding in'}/></motion.div>
                    </div>
                    <motion.div initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}} transition={transition}><HighlightedText text={'seconds'}/></motion.div>
                </div>
                <FadedText justify={true} text={'Go ahead, give it a try. Our hands-on learning environment means you will be writing real code from your very first lesson.'}/>

                <div className='flex justify-start items-start gap-[2rem]'>
                    <Button text={"Continue lesson "} outline={false} arrow={true}/>
                    <Button text={"Learn more"} outline={true} arrow={false} shadow={"white"}/>
                </div>
            </div>
    </div>
  )
}

export default StartCoding