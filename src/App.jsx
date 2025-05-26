import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import VerifyEmail from './pages/VerifyEmail'

const App = () => {
  return (
    <div className=''>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/verify-email' element={<VerifyEmail/>} />
        <Route path='*' element={<NotFound/>}/>
     </Routes>
    </div>
  )
}

export default App