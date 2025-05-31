import React from 'react'
import { useLoginSignupContext } from '../context/loginSignupContext/LoginSignupContext'
import toast from 'react-hot-toast';

const Private = (props) => {

    const {canGotoDashboard} = useLoginSignupContext();

    return canGotoDashboard ? props.children : toast.error(`You've Logged out`);
}

export default Private