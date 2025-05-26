import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const LoginSignupContext = createContext();

export const LoginSignupContextProvider = ({children}) => {
    const [login,setLogin] = useState(false);
    const [signup,setSignup] = useState(false);

    const [screenSize,setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            const width = document.documentElement.clientWidth;
            setScreenSize(width)
        };
        window.addEventListener('resize',handleResize);
        return () => window.removeEventListener('resize',handleResize);
    },[]);

    console.log(screenSize);

    const location = useLocation();

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
        screenSize,setScreenSize
    };

    return <LoginSignupContext.Provider value={datas}>
        {children}
    </LoginSignupContext.Provider>;
};

export const useLoginSignupContext = () => useContext(LoginSignupContext);