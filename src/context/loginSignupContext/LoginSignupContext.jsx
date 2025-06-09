import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { apiConnector } from "../../services/ApiConnector";
import { login, otp, signup } from "../../services/Api";

export const LoginSignupContext = createContext();

export const LoginSignupContextProvider = ({ children }) => {



    const [screenSize, setScreenSize] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
        const width = document.documentElement.clientWidth;
        setScreenSize(width);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);





    const location = useLocation();
    const [inLogin, setInLogin] = useState(false);
    const loginSignupHandler = () => {
        if (location.pathname === "/login") {
        setInLogin(true);
        }
        if (location.pathname === "/signup") {
        setInLogin(false);
        }
    };

    useEffect(() => {
        loginSignupHandler();
    },[location]);


    
    
    const navigate = useNavigate();
    const [signupFormdata, setSignupFormdata] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        otp: "",
        role: "Student",
    });
    const signupChangeHandler = (event) => {
        const { name, type, value, checked } = event.target;
        setSignupFormdata((prev) => {
        return {
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        };
        });
    };

    const [otpInFrontend,setOtpInFrontend] = useState(null);
    const createAccountHandler = async (event) => {
        event.preventDefault();
        try {
            console.log("signupFormdata in signup : ",signupFormdata);
            const otpSent = await apiConnector("post",otp.OTP_API);
            setOtpInFrontend(otpSent);
            toast.success('OTP sent to email');
            navigate('/verify-email');
            console.log(otpSent);
        }
        catch(err) {
            console.log(err);
        }
    }

    const signupSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            console.log("signupFormdata in verify-email : ",signupFormdata);
            // signupFormdata.role === "Student" ? navigate('/student-dashboard') : navigate('/instructor-dashboard');
            const createdUser = await apiConnector("post",signup.SIGNUP_API,signupFormdata);
            console.log("createdUser",createdUser.data.data);
            if(signupFormdata.otp === otpInFrontend) {
                toast.success(`Hello ${createdUser.data.data.firstName} 👋`);
                toast.success(`Your email registered successfully 🎉`);
                navigate("/login");
            }
        } catch (err) {
            console.log(err.message);
            toast.error(err.message);
        }
    };




    
    
    const [canGotoDashboard,setCanGotoDashboard] = useState(false);
    const [loginFormdata, setLoginFormdata] = useState({
        email: "",
        password: "",
    });
    const loginChangeHandler = (event) => {
        const { name, type, checked, value } = event.target;
        setLoginFormdata((prev) => {
        return {
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        };
        });
    };

    const loginSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            console.log("loginFormdata : ",loginFormdata);
            const createdUser = await apiConnector("post",login.LOGIN_API,loginFormdata);
            console.log(createdUser.data.data);
            toast.success(`Logged in successfully 🥳`);
            toast.success(`Welcome ${createdUser.data.data.firstName} 😍`);
            setCanGotoDashboard(true);
            if (createdUser.data.data.role === "Student") {
                return navigate("/student-dashboard");
            }
            else if (createdUser.data.data.role === "Instructor") {
                return navigate("/instructor-dashboard");
            }
            else {
                return navigate("/admin-dashboard");
            }
        } catch (err) {
            console.log(err.message);
            toast.error(err.message);
        }
    };






    const datas = {
        inLogin,setInLogin,
        screenSize,setScreenSize,
        signupFormdata,setSignupFormdata,
        signupChangeHandler,
        createAccountHandler,
        signupSubmitHandler,
        loginFormdata,setLoginFormdata,
        loginChangeHandler,
        loginSubmitHandler,
        canGotoDashboard,setCanGotoDashboard,
    };

    return (
        <LoginSignupContext.Provider value={datas}>
        {children}
        </LoginSignupContext.Provider>
    );
};

export const useLoginSignupContext = () => useContext(LoginSignupContext);
