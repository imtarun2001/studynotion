const BASE_URL = import.meta.env.VITE_BASE_URL;

export const category = {
    CATEGORIES_API: BASE_URL + '/getCategories'
};
export const otp = {
    OTP_API: BASE_URL + '/generateOtp'
};
export const signup = {
    SIGNUP_API: BASE_URL + '/signup'
};
export const login = {
    LOGIN_API: BASE_URL + '/login'
};