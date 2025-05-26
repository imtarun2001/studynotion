import React from 'react'
import { Link } from 'react-router-dom';

const FooterMapping = ({heading,arrayOfLinks}) => {
  return (
    <div className='flex flex-col justify-center items-start gap-[0.7rem]'>
        <div className='font-bold mt-[1rem] text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] text-gray-300'>{heading}</div>

        <div className='flex flex-col text-[0.5rem] sm:text-[0.7rem] md:text-[0.9rem] gap-[0.4rem]'>
            {
              arrayOfLinks.map((link,index) => (
                <Link to={`/${link.link}`} key={index} className='text-gray-500 hover:text-white cursor-pointer'>{link.title}</Link>
              ))
            }
        </div>
    </div>
  )
}

export default FooterMapping