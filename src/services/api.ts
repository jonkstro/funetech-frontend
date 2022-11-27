import axios from "axios";

export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        'Content-Type' : 'application/json',
        // 'Authorization' : 'Token 43b86434a382d727005069199f51439a2aa419db'
    }
})