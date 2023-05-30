import axios, { AxiosInstance } from "axios";
import { getCookie } from "../utils/constant";

const Service: AxiosInstance = axios.create({
  baseURL: "https://media-feed-app.vercel.app", // Replace with your API base URL
});

Service.interceptors.request.use((config) => {
  const userToken: string | undefined = getCookie("userToken"); // Assuming you have a function to retrieve the token from the cookie

  if (userToken) {
    config.headers.Authorization = `Bearer ${userToken}`; // Attach the token to the Authorization header for authenticated requests
  }

  return config;
});
export default Service;

