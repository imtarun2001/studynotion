import React from 'react'
import NormalText from '../commonComponents/NormalText'
import HighlightedText from '../commonComponents/HighlightedText'
import FadedText from '../commonComponents/FadedText'
import Button from '../commonComponents/Button'
import icon1 from '../../assets/TimeLineLogo/Logo1.svg'
import icon2 from '../../assets/TimeLineLogo/Logo2.svg'
import icon3 from '../../assets/TimeLineLogo/Logo3.svg'
import icon4 from '../../assets/TimeLineLogo/Logo4.svg'
import serySeryLady from '../../assets/Images/TimelineImage.png'
import { motion } from 'framer-motion';

const GetTheSkills = () => {

    const transition = {type: 'normal',duration: 1};

    const arr = [
        {
            title: "Leadership",
            desc: "Fully committed to the success company",
            icon: icon1
        },
        {
            title: "Responsibility",
            desc: "Students will always be our top priority",
            icon: icon2
        },
        {
            title: "Flexibility",
            desc: "The ability to switch is an important skills",
            icon: icon3
        },
        {
            title: "Solve the problem",
            desc: "Code your way to a solution",
            icon: icon4
        }
    ];

  return (
    <div className='w-full text-black bg-gray-100 mt-[9rem] py-[5rem] px-[1rem] flex flex-col justify-center items-center gap-[5rem]'>
        <div className='flex justify-between items-start'>
            <div className='flex w-[45%] flex-col justify-start items-start'>
                <NormalText text={"Get the skills you need for a"}/>
                <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={transition}><HighlightedText text={"job that is in demand"}/></motion.div>
            </div>
            <div className='flex w-[45%] flex-col justify-center items-start gap-[1rem]'>
                <FadedText justify={true} text={"The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills."}/>
                <Button text={"Learn more"} outline={false} arrow={false}/>
            </div>
        </div>



        <div className='flex flex-col md:flex-row w-full justify-between items-center px-[1rem]'>
            <div className='flex flex-col gap-[3rem] relative pl-[3rem] border-l-2 border-dotted border-gray-600'>
                {
                    arr.map((ele) => (
                        <div key={ele.title} className='flex justify-start items-center gap-[1rem]'>
                            <div className='h-[3rem] w-[3rem] rounded-full absolute -left-6 bg-white flex justify-center items-center'>
                                <img src={ele.icon} alt="" />
                            </div>
                            <div className='flex flex-col justify-center items-start gap-[0.4rem]'>
                                <p className='text-[1.3rem] font-bold'>{ele.title}</p>
                                <p>{ele.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='flex relative mt-[2rem] md:mt-0'>
                <div className='absolute flex justify-center items-end h-full w-full' style={{boxShadow: '-10px -10px 20px rgb(34, 211, 238)'}}>
                    <div className='absolute z-11 -bottom-[3rem] md:-bottom-[5rem] h-1/4 w-3/4 uppercase bg-emerald-600 right-0 flex justify-center items-center'>
                        <div className='w-1/2 flex justify-around items-center border-r-[1px] border-white'>
                            <div className='text-[1rem] md:text-[2rem] font-bold text-white'>10</div>
                            <div className='flex flex-col justify-between items-start text-[0.7rem] md:text-[1rem] text-gray-200'>
                                <div>years of</div>
                                <div>experience</div>
                            </div>
                        </div>
                        <div className='w-1/2 flex justify-around items-center border-l-[1px] border-white'>
                            <div className='text-[1rem] md:text-[2rem] font-bold text-white'>250</div>
                            <div className='flex flex-col justify-between items-start text-[0.7rem] md:text-[1rem] text-gray-200'>
                                <div>types of</div>
                                <div>courses</div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={serySeryLady} alt="" className='z-10' style={{boxShadow: '15px 15px 1px black'}}/>
            </div>
        </div>
    </div>
  )
}

export default GetTheSkills