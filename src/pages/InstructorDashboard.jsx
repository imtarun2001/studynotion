import React, { useEffect } from 'react'
import Navbar from '../components/commonComponents/Navbar';
import toast from 'react-hot-toast';
import { API } from '../../Api';

const InstructorDashboard = () => {
    const fetchUser = async () => {
        try {
            const response = await API.get("/instructor-dashboard");
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
            <div>Hello user, this is instructor dashboard</div>
            </div>
        </div>
    )
}

export default InstructorDashboard