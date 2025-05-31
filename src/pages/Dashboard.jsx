import React from 'react'
import Navbar from '../components/commonComponents/Navbar'

const Dashboard = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-start items-center'>
        <Navbar/>
        <div className='w-screen flex flex-col justify-center items-center gap-[2rem] pt-[5rem] md:pt-[2rem] relative  z-10 text-black'>
          <div>Hello user, this is dashboard</div>
        </div>
    </div>
  )
}

export default Dashboard