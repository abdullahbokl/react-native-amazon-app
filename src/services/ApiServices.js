import axios from "axios";

const API_URL = "https://dummyjson.com";

const ApiServices = {
  getProducts: ({ limit = 5 }) =>
    axios.get(`${API_URL}/products?limit=${limit}`),
  getProductById: (id) => axios.get(`${API_URL}/products/${id}`),
};

export default ApiServices;
