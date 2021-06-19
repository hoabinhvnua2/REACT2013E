import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { addNewUser } from "../../redux/constants/User";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";

const User = () => {
  const state = useSelector((state) => state.user);
  const { data, err, loading } = state;
  const dispatch = useDispatch();
  const [smShow, setSmShow] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const textInput = useRef("HTML");
  let inputAdd;

  const handleAdd = (e) => {
    e.preventDefault();
    const { value } = inputAdd;
    if (!inputAdd) return false;

    if (!data.some((v) => v.user === value)) {
      dispatch(addNewUser(value));
      inputAdd.value = "";
    } else {
      setSmShow(true);
      setTimeout(() => {
        setSmShow(false);
      }, 1000);
    }
    return false;
  };

  const handleEditing = (u) => {
    console.log("r", textInput);
    setEditUser(true);
  };

  return (
    <div>
      <Form onSubmit={handleAdd}>
        <Form.Row className="align-items-center">
          <Col sm={6} className="my-1">
            <Form.Control
              id="inlineFormInputName"
              placeholder="Username"
              ref={(val) => (inputAdd = val)}
            />
          </Col>
          <Col xs="auto" className="my-1">
            <Button type="submit">Add</Button>
          </Col>
        </Form.Row>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>User Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((val, index) => (
              <tr key={index.toString()}>
                <td>{index + 1}</td>
                <td>
                  {editUser ? (
                    <InputGroup size="sm" className="mb-3">
                      <Form.Control
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        ref={textInput}
                      />
                    </InputGroup>
                  ) : (
                    val.user
                  )}
                </td>
                <td>
                  <Button variant="primary" onClick={() => handleEditing(val)}>
                    Edit
                  </Button>
                  <Button className="ml-2" variant="danger">
                    DEL
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Body>Lỗi: User đã tồn tại!</Modal.Body>
      </Modal>
    </div>
  );
};

export default User;
