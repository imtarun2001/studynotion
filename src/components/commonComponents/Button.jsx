import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Button = ({text,outline,arrow,shadow,navigateTo}) => {

    const navigate = useNavigate();

  return (
    outline ?
    <button className={`px-[1rem] py-[0.7rem] rounded-md font-bold z-10 cursor-pointer hover:scale-98 shadow-2xl shadow-${shadow} ${shadow === "black" ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={() => navigate(`/${navigateTo}`)}>{text}</button>
    :
    <button className={`px-[1rem] py-[0.7rem] bg-amber-300 text-black rounded-md font-bold cursor-pointer hover:scale-95 shadow-2xl shadow-amber-400`} onClick={() => navigate(`/${navigateTo}`)}>
      {
        arrow ? <span className='flex justify-center items-center gap-[0.5rem] '>{text} <FaArrowRight/></span> : <span>{text}</span>
      }
    </button>
  )
}

export default Button