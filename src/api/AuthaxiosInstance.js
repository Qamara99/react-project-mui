import axios from "axios";

const token=localStorage.getItem("accessToken");
console.log(token);
const AuthaxiosInstance=axios.create({
    baseURL:'https://knowledgeshop.runasp.net/api',
    headers: {
    "Accept-Language": "en",
    Authorization: `Bearer ${token}`
  },

});

export default AuthaxiosInstance;