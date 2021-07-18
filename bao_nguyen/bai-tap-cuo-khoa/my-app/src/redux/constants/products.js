export const productAciton = {
  GET_PRODUCT: "GET_PRODUC",

  GET_PRODUCT_TRUE: "GET_PRODUCT_SUCCESS",

  GET_PRODUCT_FALSE: "GET_PRODUCT_FALSE",

  GET_PRODUCT_PAYLOAD: "GET_PRODUCT_PAYLOAD",
};

const PRODUCT_TRUE = () => ({
  type: productAciton.GET_PRODUCT_TRUE,
});
const GET_PRODUC = () => ({
  type: productAciton.GET_PRODUCT,
});
const PRODUCT_FALES = () => ({
  type: productAciton.GET_PRODUCT_FALSE,
});

const PRODUCT_PAYLOAD = (params) => ({
  type: productAciton.GET_PRODUCT_PAYLOAD,
  payload: params,
});
export default {
  PRODUCT_FALES,
  PRODUCT_PAYLOAD,
  PRODUCT_TRUE,
  GET_PRODUC,
};
