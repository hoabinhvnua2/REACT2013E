import { productAciton } from "../constants/products";

const data = {
  data: [],
  err: "",
  loading: false,
};

const Products = (state = data, actions) => {
  const { type, payload } = actions;

  switch ((type, payload)) {
    case productAciton.GET_PRODUCT:
      return { ...state, loading: true };

    case productAciton.GET_PRODUCT_TRUE:
      return { ...state, loading: false, data: payload };

    case productAciton.GET_PRODUCT_FALSE:
      return { ...state, loading: false, err: payload };

    default:
      return state;
  }
};

export default Products;
