import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useProduct } from "../../redux/hooks/product";

const Produc = () => {
  const { products, action } = useProduct();

  useEffect(() => {
    action.GET_PRODUC();
  }, []);
  console.log("products", products);
  return <div></div>;
};

export default Produc;
