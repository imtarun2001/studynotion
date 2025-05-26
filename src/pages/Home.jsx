import React from 'react'
import Navbar from '../components/commonComponents/Navbar'
import EmpowerYourFuture from '../components/homePageComponents/EmpowerYourFuture'
import UnlockCodingPotential from '../components/homePageComponents/UnlockCodingPotential'
import StartCoding from '../components/homePageComponents/StartCoding'
import UnlockPower from '../components/homePageComponents/UnlockPower'
import GetTheSkills from '../components/homePageComponents/GetTheSkills'
import YourSwissKnife from '../components/homePageComponents/YourSwissKnife'
import BecomeInstructor from '../components/homePageComponents/BecomeInstructor'
import Footer from '../components/homePageComponents/Footer'
import Reviews from '../components/homePageComponents/Reviews'

const Home = () => {
  return (
    <div className='text-white bg-gray-900 w-full overflow-x-hidden flex flex-col justify-start items-center pt-[5rem]'>
        <Navbar/>

        <EmpowerYourFuture/>

        <UnlockCodingPotential/>

        <StartCoding/>

        <UnlockPower/>

        <GetTheSkills/>

        <YourSwissKnife/>

        <BecomeInstructor/>

        <Reviews/>

        <Footer/>
    </div>
  )
}

export default Home