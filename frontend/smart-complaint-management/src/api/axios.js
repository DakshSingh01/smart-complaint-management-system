import axios from "axios";

const API = axios.create({

  baseURL:
    "https://smart-complaint-management-system-yx9f.onrender.com/api",

});

export default API;