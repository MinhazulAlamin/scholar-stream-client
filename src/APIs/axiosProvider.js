import axios from "axios";

const axiosProvider = axios.create({
  baseURL: "https://scholar-stream-server-eight.vercel.app",

});

export default axiosProvider;