import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner'

const FormRegister = () => {
// Gốp state thành 1 obj bao gồm email và passwword, sau đó thực hiện việc set lại state khi ng dùng nhập liệu
// delay 3s để show Spinner ra màn hình. Sau khi show đc kết quả thì ẩn Spinner đi 
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value)
  };

  const handlePasswword = (e) => {
    const { value } = e.target;
    setPassword(value)
  }

  const register = (e) => {
    e.preventDefault();
    const param = {
        email,
        password
    };

    setTimeout(() => {
        console.log(param)
    }, 3000)
    
  };
  return (
    <div>
      <Form onSubmit={register}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onInput={handleEmail}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onInput={handlePasswword}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>

      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default FormRegister;
