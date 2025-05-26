import React from 'react'
import LoginSignup from '../components/loginNsignup/LoginSignup'
import SignupImage from '../assets/Images/signup.webp'

const Signup = () => {
  return (
    <LoginSignup headingText={'Join the millions learning to code with StudyNotion for free'} loginBtn={false} image={SignupImage}/>
  )
}

export default Signup