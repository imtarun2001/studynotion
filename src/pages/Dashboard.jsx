import React, { useEffect } from 'react'
import Navbar from '../components/commonComponents/Navbar'
import { API } from '../../Api';

const Dashboard = () => {

  const fetchUser = async () => {
    try {
      const { data } = await API.get("/me");
      console.log(data);
        if (data.data.role === "Student") {
          navigate("/dashboard");
        } else {
          navigate("/about");
        }
    } catch(err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchUser();
  },[]);

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