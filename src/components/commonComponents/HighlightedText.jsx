import React from 'react'

const HighlightedText = ({text,color}) => {
  return (
    <span className={`text-[1rem] sm:[1.5rem] md:text-[2rem] lg:text-[2rem] font-bold ${color ? `bg-gradient-to-b from-[#ff0077] to-[#ae0bff]` : `bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]`} text-transparent bg-clip-text`}>{text}</span>
  )
}

export default HighlightedText