import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import productActions from "../actions/Product";

export const useProduct = () => {
  const products = useSelector((state) => state.products);
  // @TODO handle state befor renderUI

  
  const dispatch = useDispatch();
  const action = useMemo(
    () => bindActionCreators(productActions, dispatch),
    [dispatch]
  );

  return useMemo(() => ({
    products, action
  }), [products, action])
};


