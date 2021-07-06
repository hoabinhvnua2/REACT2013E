import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useProduct } from "../../redux/hooks/Prodcut";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button'

const Product = () => {
  const { products, action } = useProduct();

  useEffect(() => {
    action.getProduct();
  }, []);
  console.log("products", products);
  return (
    <div>
      {products.loading && <Spinner animation="border" variant="primary" />}
      {products.data.length && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {
                  products.data.map((p, index) => (
                    <tr key={index.toString()}>
                    <td>{index + 1}</td>
                    <td>{p.product_name}</td>
                    <td>{p.price}</td>
                    <td>{p.quantity}</td>
                    <td>
                      <Button variant="primary">Add</Button>
                      <Button variant="warning" className="ml-2">Edit</Button>
                      <Button variant="danger" className="ml-2">Delete</Button>
                    </td>
                  </tr>
                  ))
              }
            
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Product;
