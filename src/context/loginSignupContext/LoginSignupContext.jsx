import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { API } from "../../../Api";

export const LoginSignupContext = createContext();

export const LoginSignupContextProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const location = useLocation();
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(false);
    const [loading,setLoading] = useState(false);
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
    const [loginFormdata, setLoginFormdata] = useState({
        email: "",
        password: "",
    });
    const [canGotoDashboard,setCanGotoDashboard] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
        const width = document.documentElement.clientWidth;
        setScreenSize(width);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const signupChangeHandler = (event) => {
        const { name, type, value, checked } = event.target;
        setSignupFormdata((prev) => {
        return {
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        };
        });
    };

    const signupSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            console.log("signupFormdata : ",signupFormdata);
            const createdUser = await API.post("/signup",signupFormdata);
            console.log("createdUser",createdUser.data.data);
            if(createdUser?.data?.success) {
                toast.success("email registered successfully 🎉");
                navigate("/login");
            }
        } catch (err) {
            console.log(err.message);
            toast.error(err.message);
        }
    };

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
            const createdUser = await API.post("/login", loginFormdata);
            console.log(createdUser.data.data);
            toast.success("Logged in successfully");
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

    const logoutSubmitHandler = () => {
        navigate("/");
        setCanGotoDashboard(false);
        toast.success("Logged out successfully");
    };

    const loginSignupHandler = () => {
        if (location.pathname === "/login") {
        setLogin(true);
        setSignup(false);
        }
        if (location.pathname === "/signup") {
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
        signupChangeHandler,
        signupSubmitHandler,
        loginFormdata,setLoginFormdata,
        loginChangeHandler,
        loginSubmitHandler,
        canGotoDashboard,setCanGotoDashboard,
        logoutSubmitHandler
    };

    return (
        <LoginSignupContext.Provider value={datas}>
        {children}
        </LoginSignupContext.Provider>
    );
};

export const useLoginSignupContext = () => useContext(LoginSignupContext);
