import React from 'react'

const Filterbar = ({HomePageExplore,setCategory,category}) => {
  return (
    <div className='flex justify-center items-center md:gap-[0.5rem] text-gray-400 font-semibold bg-gray-700 p-[0.1rem] rounded-full text-[0.5rem] md:text-[1rem]'>
        {
            HomePageExplore.map((option) => (
                <button key={option.tag} onClick={() => setCategory(option.tag)} className={`cursor-pointer hover:text-white py-[0.5rem] px-[1rem] md:px-[2rem] rounded-full ${category === option.tag ? 'bg-black text-white' : ''}`}>{option.tag}</button>
            ))
        }
    </div>
  )
}

export default Filterbar