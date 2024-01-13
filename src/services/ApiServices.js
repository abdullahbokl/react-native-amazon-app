import axios from "axios";

const API_URL = "https://dummyjson.com";

// interceptors
axios.interceptors.request.use(
  (config) => {
    console.log("request", config.url);
    return config;
  },
  (error) => {
    // Do something with request error
    console.log("request error", error);
    return Promise.reject(error);
  }
);
const ApiServices = {
  getProducts: ({ limit = 5 }) =>
    axios.get(`${API_URL}/products?limit=${limit}`),
  getProductById: (id) => axios.get(`${API_URL}/products/${id}`),
};

export default ApiServices;
