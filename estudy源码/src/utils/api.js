import axios from "axios";
import Vue from "vue";

const api = axios.create({
    baseURL: "https://sandbox-api.estudy.chanke.xyz"
})
api.defaults.withCredentials = true;
api.defaults.headers.post["Content-Type"] = "application/json";
api.interceptors.response.use(response => {
    return response.data.data;
}, error => {
    const config = error.config;
    const response = error.response;
    if (!config._slient) {
        Vue.$notification.error({
            message: "API Error",
            description: response.data.errorMessage
        })
    }    
    return Promise.reject(error)
})
export {api};