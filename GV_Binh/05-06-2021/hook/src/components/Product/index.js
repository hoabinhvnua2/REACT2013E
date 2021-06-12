import React, { useEffect, useState } from "react";

const Product = () => {
  // ở cladd khởi tạo state bắt buộc là 1 object
  const [count, setCount] = useState(0);
  const [products, setProduct] = useState([]);

  
  const getA = new Promise((res, rej) => {
      setTimeout(() => {
        res(1)
      }, 1000);
  })
  const getB = new Promise((res, rej) => {
      setTimeout(() => {
        res(2)
      }, 2000);
  })
  const getC = new Promise((res, rej) => {
      setTimeout(() => {
        res(3)
      }, 3000);
  })
  const getD = new Promise((res, rej) => {
      setTimeout(() => {
        res(4)
      }, 4000);
  })



  const showName = async () => {
    const a = await getA;
    const b = await getB;
    const c = await getC;
    const d = await getD;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    // return a;
  };
  useEffect(() => {
    showName();
  }, []);

  console.log(products);
  return <div></div>;
};

export default Product;

// stateless -> là những component ko có state
// statefull -> là nhưng component có state
