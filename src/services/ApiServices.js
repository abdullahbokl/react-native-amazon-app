import axios from "axios";

const API_URL = "https://fakestoreapi.com";

const ApiServices = {
  getProducts: () => axios.get(`${API_URL}/products?limit=5`),
  getProduct: (id) => axios.get(`${API_URL}/products/${id}`),
  createProduct: (product) => axios.post(`${API_URL}/products`, product),
  updateProduct: (product) =>
    axios.put(`${API_URL}/products/${product.id}`, product),
  deleteProduct: (id) => axios.delete(`${API_URL}/products/${id}`),
};

export default ApiServices;
