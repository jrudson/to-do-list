import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.0.0.102:4000/'
});

export default api;