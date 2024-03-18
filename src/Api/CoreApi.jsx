import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://bloomify2-cc614ecf7708.herokuapp.com/",
});

export { axiosInstance };
