import axios from "axios";

const USE_API = "https://60f244826d44f300177885d9.mockapi.io/";

const getProduct = () => {
  return axios.get(`${USE_API}products`);
};

export default {
  getProduct,
};
