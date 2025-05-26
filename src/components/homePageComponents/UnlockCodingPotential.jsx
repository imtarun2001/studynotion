import React, { useEffect, useState } from 'react'
import HighlightedText from '../commonComponents/HighlightedText'
import NormalText from '../commonComponents/NormalText'
import FadedText from '../commonComponents/FadedText'
import Button from '../commonComponents/Button'
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'

const UnlockCodingPotential = () => {

    const transition = {type: 'normal',duration: 1};

    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    const arrOfTexts = [
                        '<!DOCTYPE html>',
                        '<html lang="en">',
                        '<head>',
                        '<title>This is myPage</title>',
                        '</head>',
                        '<body>',
                        '<h1><a href="/">Header</a></h1>',
                        '<nav>',
                        '<a href="/one">One</a>',
                        '<a href="/two">Two</a>',
                        '<a href="/three">Three</a>',
                        '</nav>',
                        '</body>',
                    ];

  return (
    <div className='w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-[5rem] mt-[5rem] md:px-[1rem]'>
        <div className='w-full md:w-[55%] flex flex-col justify-center items-center md:items-start gap-[2rem]'>
            <div>
                <div className='flex gap-[0.5rem]'>
                    <NormalText text={'Unlock your '}/>
                    <motion.div initial={{opacity:0, x:100}} whileInView={{opacity:1, x:0}} transition={transition}><HighlightedText text={'coding potential'}/></motion.div>
                </div>
                <NormalText text={'with our online courses.'}/>
            </div>
            <FadedText justify={true} text={'Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.'}/>
            <div className='flex justify-start items-start gap-[2rem]'>
                <Button text={"Try it yourself"} outline={false} arrow={true}/>
                <Button text={"Learn more"} outline={true} arrow={true} shadow={"white"}/>
            </div>
        </div>
        <div className='md:w-[35%] border border-amber-300 flex text-amber-300 gap-[1rem] pl-[1rem] py-[1rem]'>
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
                        <TypeAnimation key={index}
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
    </div>
  )
}

export default UnlockCodingPotential