import React from 'react'
import LoginSignup from '../components/loginNsignup/LoginSignup'
import LoginImage from '../assets/Images/login.webp'


const Login = () => {
  return (
    <LoginSignup headingText={'Welcome back'} loginBtn={true} image={LoginImage}/>
  )
}

export default Login