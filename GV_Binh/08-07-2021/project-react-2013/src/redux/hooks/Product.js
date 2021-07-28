import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import productActions from "../constants/Product";
import { productSclector } from "../selectors/Product";

export const useProduct = () => {
  const products = useSelector(productSclector);
  const dispatch = useDispatch();
  const action = useMemo(
    () => bindActionCreators(productActions, dispatch),
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
