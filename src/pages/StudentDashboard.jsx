import React, { useEffect } from 'react'
import Navbar from '../components/commonComponents/Navbar'
import { API } from '../../Api';
import toast from 'react-hot-toast';

const StudentDashboard = () => {

  console.log(document.cookie);

  const fetchUser = async () => {
    try {
        const response = await API.get("/student-dashboard");
        console.log("response : ",response);
    } catch(err) {
        console.log(err.response.data.message);
        toast.error(err.response.data.message);
    }
  };

  useEffect(() => {
    fetchUser();
  },[]);

  return (
    <div className='w-full min-h-screen flex flex-col justify-start items-center'>
        <Navbar/>
        <div className='w-screen flex flex-col justify-center items-center gap-[2rem] pt-[5rem] md:pt-[10rem] text-black'>
          <div>Hello user, this is student dashboard</div>
        </div>
    </div>
  )
}

export default StudentDashboard