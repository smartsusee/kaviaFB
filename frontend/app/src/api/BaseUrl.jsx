import axios from "axios";



// axios Instance 

export const BaseUrl_Api = axios.create({
    baseURL: `http://localhost:3000/api`,
    timeout: 10000,

})