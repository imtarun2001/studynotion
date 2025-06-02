import React from 'react'
import HighlightedText from '../commonComponents/HighlightedText'
import NormalText from '../commonComponents/NormalText'
import FadedText from '../commonComponents/FadedText'
import Button from '../commonComponents/Button'
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'

const UnlockCodingNStartCoding = ({color,reverse,unlockCoding,typingText,totalLines}) => {

    
    const transition = {type: 'normal',duration: 1};

  return (
    <div className={`w-full flex flex-col ${reverse ? `md:flex-row-reverse` : `md:flex-row`} justify-between md:justify-center items-center md:items-start gap-[5rem] mt-[5rem] md:px-[1rem]`}>
        {
            unlockCoding ?
            <div className='w-full md:w-[45%] flex flex-col justify-center items-center md:items-start gap-[2rem]'>
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
            :
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
        }
        <div className='w-[90%] sm:w-[50%] md:w-[400px] flex text-${color} gap-[1rem] pl-[1rem] py-[1rem]'
        style={{color: color,border: `2px solid ${color}`,boxShadow: `0px 0px 30px ${color}`}}
        >
            {/* <div className={`h-2/3 w-2/3 absolute top-0 left-0 rounded-full`} style={{boxShadow: `0px 0px 10px ${color}`}}></div> */}
            <div className='w-[3%] flex flex-col z-10'>
                {
                    totalLines.map((line) => (
                        <span key={line}>{line}</span>
                    ))
                }
            </div>
            <div className='w-[90%] flex flex-col z-10'>
                <TypeAnimation
                    key={typingText}
                    sequence={[
                        typingText,3000,"",500
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ whiteSpace: 'pre-line', fontFamily: 'monospace', fontSize: '1rem' }}
                    omitDeletionAnimation={true}
                />
            </div>
        </div>
    </div>
  )
}

export default UnlockCodingNStartCoding