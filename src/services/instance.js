import axios from 'axios';

const baseURL = 'https://be-hotel-a60l.onrender.com/api/v1';

const instance = axios.create({
    baseURL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Include credentials (cookies) in requests
});

export default instance;