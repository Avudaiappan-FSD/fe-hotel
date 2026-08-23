import axios from 'axios';

const baseURL = 'http://localhost:3000/api/v1';

const instance = axios.create({
    baseURL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Include credentials (cookies) in requests
});

export default instance;