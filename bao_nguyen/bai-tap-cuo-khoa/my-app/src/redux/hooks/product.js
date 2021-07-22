import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { productAciton } from "../constants/products";
export const useProduct = () => {
  const products = useSelector((state) => state.Products);

  const dispatch = useDispatch();
  const action = useMemo(
    () => bindActionCreators(productAciton, dispatch),
    [dispatch]
  );

  return useMemo(
    () => ({
      products,
      action,
    }),
    [products, action]
  );
};

export default useProduct;
