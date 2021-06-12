import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner'

const Load = () => {
    return(
        <div>
            <Spinner animation="border" variant="primary"/>
        </div>
    )
}
const FormRegister = () => {
// Gốp state thành 1 obj bao gồm email và passwword, sau đó thực hiện việc set lại state khi ng dùng nhập liệu
// delay 3s để show Spinner ra màn hình. Sau khi show đc kết quả thì ẩn Spinner đi
  const [values, setValues] = useState({
    Email: '',
    Password: ''
  });
  const [but, setButton] = useState(false);
  const handleEmail = (e) => {
    e.persist();
    setValues((values) => ({
        ...values,
        Email: e.target.value
    }))
  };
  const handlePasswword = (e) => {
    e.persist();
    setValues((values) => ({
        ...values,
        Password: e.target.value
    }))
  }
  const register = (e) => {
    e.preventDefault();
    setButton(true);
    setTimeout(() => {
        for (const [key, value] of Object.entries(values)) {
            console.log(`${key}: ${value}`);
        }
        setButton(false)
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
      {but && <Load />}
    </div>
  );
};

export default FormRegister;
