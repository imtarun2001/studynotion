import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";
import { API } from "../../../Api";

export const LoginSignupContext = createContext();

export const LoginSignupContextProvider = ({children}) => {

    const [screenSize,setScreenSize] = useState(window.innerWidth);
    const location = useLocation();
    const [login,setLogin] = useState(false);
    const [signup,setSignup] = useState(false);
    const [signupFormdata,setSignupFormdata] = useState({
    
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        otp: "",
        role: "Student"
    });
    const [loginFormdata,setLoginFormdata] = useState({
        email: "",
        password: ""
    });
    const [canGotoDashboard,setCanGotoDashboard] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {
        const handleResize = () => {
            const width = document.documentElement.clientWidth;
            setScreenSize(width)
        };
        window.addEventListener('resize',handleResize);
        return () => window.removeEventListener('resize',handleResize);
    },[]);

    
    const signupChangeHandler = (event) => {
        const {name,type,value,checked} = event.target;
        setSignupFormdata((prev) => {
            return {
                ...prev,
                [name]:type === 'checkbox' ? checked : value
            }
        });
    };
    
    const signupSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            console.log(signupFormdata);
            const createdUser = await API.post('/studynotion/v1/signup',signupFormdata);
            toast.success('email registered successfully 🎉');
            await navigate('/login');
            console.log(createdUser);
        } catch(err) {
            console.log(err.message);
            toast.error(err.message);
        }
    };


    const loginChangeHandler = (event) => {
        const {name,type,checked,value} = event.target;
        setLoginFormdata((prev) => {
            return {
                ...prev,
                [name]:type === "checkbox" ? checked : value
            };
        });
    };


    const loginSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            console.log(loginFormdata);
            const createdUser = await API.post('/studynotion/v1/login',loginFormdata);
            toast.success('Logged in successfully');
            setCanGotoDashboard(true);
            await navigate('/dashboard');
            console.log(createdUser);
        } catch(err) {
            console.log(err.message);
            toast.error(err.message);
        }
    };

    const loginSignupHandler = () => {
        if(location.pathname === '/login') {
            setLogin(true);
            setSignup(false);
        }
        if(location.pathname === '/signup') {
            setLogin(false);
            setSignup(true);
        }
    };

    useEffect(() => {
        loginSignupHandler();
    },[location]);

    const datas = {
        login,setLogin,
        signup,setSignup,
        screenSize,setScreenSize,
        signupFormdata,setSignupFormdata,
        signupChangeHandler,signupSubmitHandler,
        loginFormdata,setLoginFormdata,
        canGotoDashboard,setCanGotoDashboard,
        loginChangeHandler,loginSubmitHandler
    };

    return <LoginSignupContext.Provider value={datas}>
        {children}
    </LoginSignupContext.Provider>;
};

export const useLoginSignupContext = () => useContext(LoginSignupContext);