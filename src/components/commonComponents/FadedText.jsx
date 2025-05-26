import React from 'react'

const FadedText = ({text,justify,size}) => {
  return (
    <p className={`w-[90%] text-gray-500 ${justify ? 'text-justify' : 'text-center'} text-[0.8rem] md:text-[${size}] font-semibold`}>{text}</p>
  )
}

export default FadedText