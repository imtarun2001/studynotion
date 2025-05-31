import React, { useState } from 'react'
import countryCode from '../../data/countrycode.json'
import { MdArrowDropDown } from "react-icons/md";

const PhoneInput = ({value,onChange}) => {

    const [country,setCountry] = useState(countryCode[0]);
    const [showCountryList,setShowCountryList] = useState(false);

  return (
    <div className='w-full flex flex-col justify-center items-start gap-[0.5rem]'>
        <div className='text-[0.7rem] sm:[0.75rem] md:text-[1rem] lg:text-[1.2rem] font-semibold'><label htmlFor="phoneNumber">Phone Number</label></div>
        <div className='w-full flex justify-between items-start relative'>
            {
                showCountryList &&
                <div className={`flex absolute bottom-[3rem] z-10 flex-col justify-center items-start gap-[0.5rem] px-[0.4rem] py-[0.5rem] bg-gray-800 max-h-[20rem] rounded-xl overflow-y-scroll`}>
                    {
                    countryCode.map((country,index) => (
                        <div key={index} className='flex justify-start cursor-pointer hover:bg-white hover:text-black items-center gap-[0.5rem] py-[0.2rem] w-full' onClick={() => {setCountry(country);setShowCountryList(false)}}>
                        <span>{country.code} - </span>
                        <span>{country.country}</span>
                        </div>
                    ))
                    }
                </div>
            }
            <div className='flex w-1/5 justify-between items-center p-[0.7rem] bg-gray-800 cursor-pointer border-b-[1px] rounded-md border-white font-semibold' onClick={() => setShowCountryList(prev => !prev)}>{country.code}<MdArrowDropDown className='text-xl'/></div>
            <input type="tel" name="phoneNumber" id="phoneNumber" onChange={onChange} value={value} placeholder='enter phone number' className='flex justify-center w-3/4 items-center p-[0.7rem] bg-gray-800 border-b-[1px] rounded-md border-white placeholder-gray-600'/>
        </div>
    </div>
  )
}

export default PhoneInput