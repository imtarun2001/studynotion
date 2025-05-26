import React, { useState } from 'react'

const TextInput = () => {

    const [textAreaCharacters,setTextAreaCharacters] = useState('');

    const textAreaCharactersHandler = (event) => {
        setTextAreaCharacters(event.target.value);
    }

  return (
    <div className='flex w-full flex-col justify-center items-start gap-[0.5rem]'>
        <div className='text-[0.7rem] sm:[0.75rem] md:text-[1rem] lg:text-[1.2rem] font-semibold'><label htmlFor="message">Message</label></div>
        <textarea name="message" id="message" placeholder='enter your message' maxLength={1000} onChange={textAreaCharactersHandler} className='w-full bg-gray-800 p-[0.2rem] h-[10rem] border-b-[1px] rounded-md border-white placeholder-gray-600'></textarea>
        {
            textAreaCharacters.length === 1000 ? 
            <div className='w-full flex justify-end items-center text-red-600 font-semibold'>You have reached the maximum characters limit !</div>
            :
            <div className='w-full flex justify-end items-center text-gray-500'>{`${textAreaCharacters.length} / 1000`}</div>
        }
    </div>
  )
}

export default TextInput