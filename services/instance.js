import axios from "axios";

const baseURL = 'https://url-short-be-7ukh.onrender.com/';

const instance = axios.create({ baseURL });

const protectInstance = axios.create({ baseURL });

protectInstance.interceptors.request.use(config => {
    
    const loggedInUser = sessionStorage.getItem('loggedInUser');

    if (loggedInUser) {
        const token = JSON.parse(loggedInUser).token;
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
})
export { instance, protectInstance };