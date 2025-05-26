import React from 'react'
import { FooterLink1,FooterLink2 } from '../../data/footer-links'
import Logo from '../../assets/Logo/Logo-Full-Light.png'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import FooterMapping from './FooterMapping';
import { motion } from 'framer-motion';


const Footer = () => {

  const transition = {type: 'normal',duration: 1};

  const icons = [<FaGoogle/>,<FaFacebook/>,<FaTwitter/>,<FaYoutube/>];

  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={transition} className='w-full flex flex-col justify-center items-center pt-[1rem] bg-gray-900'>
      <div className='flex w-full justify-center items-center px-4'>
        <img src={Logo} alt="" className='w-[30%] sm:w-[15%]'/>
      </div>


      <div className='flex flex-col sm:flex-row pb-[1rem] w-full justify-center items-center sm:items-start border-b-[1px] border-gray-600'>
        <div className='flex w-full sm:w-1/2 justify-around items-start'>
          <div className='flex flex-col justify-start items-start gap-[1rem]'>
            <FooterMapping heading={FooterLink1[0].title} arrayOfLinks={FooterLink1[0].links}/>
            <div className='flex justify-center items-center gap-[0.2rem] text-[0.5rem] sm:text-[1rem] sm:gap-[1rem]'>
              {
                icons.map((icon,index) => (
                  <span key={index} className='text-gray-500 hover:text-white cursor-pointer'>{icon}</span>
                ))
              }
            </div>
            <div className='flex flex-col justify-start items-start'>
              <FooterMapping heading={FooterLink1[3].title} arrayOfLinks={FooterLink1[3].links}/>
              <FooterMapping heading={FooterLink1[4].title} arrayOfLinks={FooterLink1[4].links}/>
            </div>
          </div>

          <div className='flex flex-col justify-start items-start'>
            <FooterMapping heading={FooterLink1[1].title} arrayOfLinks={FooterLink1[1].links}/>
            <FooterMapping heading={FooterLink1[2].title} arrayOfLinks={FooterLink1[2].links}/>
          </div>
          
        </div>

        <div className='flex w-full sm:w-1/2 justify-around items-start sm:border-l border-gray-700'>
            <FooterMapping heading={FooterLink2[0].title} arrayOfLinks={FooterLink2[0].links}/>
            <FooterMapping heading={FooterLink2[1].title} arrayOfLinks={FooterLink2[1].links}/>
            <FooterMapping heading={FooterLink2[2].title} arrayOfLinks={FooterLink2[2].links}/>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-[2rem] md:gap-0 justify-between items-center py-[1rem] sm:p-[1.5rem] text-gray-600'>
        <div className='flex justify-center items-center gap-[1rem]'>
          <span>Privacy Policy</span>
          <span> | </span>
          <span>Cookie Policy</span>
          <span> | </span>
          <span>Terms</span>
        </div>
        <div>Made with 🤍 by Tarun ©️ 2025 Studynotion</div>
      </div>
    </motion.div>
  )
}

export default Footer