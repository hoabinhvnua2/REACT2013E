import React, { useEffect, useState } from 'react';
import { Spinner, Table, Button } from 'react-bootstrap/';
import { useProduct } from '../../redux/hooks/Product';
import { Modal, Form, Col, Row } from 'react-bootstrap';


const Product = () => {
    const { products, action } = useProduct();

    useEffect(() => { action.getProduct() }, []);
    const [show, setShow] = useState(false);
    const [showFullFill, setShowFullFill] = useState(false);
    const [showRemindPrice, setShowRemindPrice] = useState(false);
    const [showRemindQty, setShowRemindQty] = useState(false);
    const initFormAddProductState = {
        product_name: "",
        price: "",
        quantity: ""
    };
    const [formAddProduct, setFormAddProduct] = useState(initFormAddProductState);
    const [showEdit, setShowEdit] = useState(false);
    const initFormEditProductState = {
        product_name: "",
        price: "",
        quantity: ""
    };
    const [formEditProduct, setFormEditProduct] = useState(initFormEditProductState);
    const [currentRowIndex, setCurrentRowIndex] = useState("");
    const [showYN, setShowYN] = useState(false);
    const [currentDelIndex, setCurrentDelIndex] = useState("");

    const handleAddProduct = () => {
        setShow(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setShowFullFill(false);
        setShowRemindPrice(false);
        setShowRemindQty(false);

        if (!formAddProduct.product_name || !formAddProduct.price || !formAddProduct.quantity) {
            setShowFullFill(true);
            return false;
        }

        if (!(Number.isFinite(+ formAddProduct.price)) && !(Number.isFinite(+ formAddProduct.quantity))) {
            setShowRemindPrice(true);
            setShowRemindQty(true);
            return false;
        }

        if (!(Number.isFinite(+ formAddProduct.price))) {
            setShowRemindPrice(true);
            return false;
        }

        if (!(Number.isFinite(+ formAddProduct.quantity))) {
            setShowRemindQty(true);
            return false;
        }

        action.addProduct({
            product_name: formAddProduct.product_name,
            price: formAddProduct.price,
            quantity: formAddProduct.quantity
        })


        setShow(false)
        setFormAddProduct(initFormAddProductState);

    }
    const handleEditing = (value, index) => {
        setShowEdit(true);
        setFormEditProduct({
            product_name: value.product_name,
            price: value.price,
            quantity: value.quantity
        })
        setCurrentRowIndex(index);
    }
    const handleSave = (e) => {
        e.preventDefault();

        setShowFullFill(false);
        setShowRemindPrice(false);
        setShowRemindQty(false);

        if (!formEditProduct.product_name || !formEditProduct.price || !formEditProduct.quantity) {
            setShowFullFill(true);
            return false;
        }

        if (!(Number.isFinite(+ formEditProduct.price)) && !(Number.isFinite(+ formEditProduct.quantity))) {
            setShowRemindPrice(true);
            setShowRemindQty(true);
            return false;
        }

        if (!(Number.isFinite(+ formEditProduct.price))) {
            setShowRemindPrice(true);
            return false;
        }

        if (!(Number.isFinite(+ formEditProduct.quantity))) {
            setShowRemindQty(true);
            return false;
        }
        action.editProduct({
            index: currentRowIndex,
            product: {
                product_name: formEditProduct.product_name,
                price: formEditProduct.price,
                quantity: formEditProduct.quantity
            }
        })

        setShowEdit(false);
        setFormEditProduct(initFormEditProductState);

    }
    const handleDelete = (index) => {
        setShowYN(true);
        setCurrentDelIndex(index)
    }
    const handleNo = ()=>{
        setShowYN(false);
    }
    const handleYes = () =>{
        action.deleteProduct(currentDelIndex);
        setShowYN(false);
    }

    return (
        <div>
            {products.loading && <Spinner animation="border" variant="primary" />}
            {products.data.length && (
                <div>
                    <Button variant="primary" className="my-2" onClick={handleAddProduct}>Add</Button>
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
                                products.data.map((product, index) => (
                                    <tr key={index.toString()}>
                                        <td>{index + 1}</td>
                                        <td>{product.product_name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>
                                            <Button variant="warning" className="ml-2" onClick={() => handleEditing(product, index)}>Edit</Button>
                                            <Button variant="danger" className="ml-2" onClick={() => { handleDelete(index) }}>Delete</Button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </Table>

                </div>
            )}
            <Modal show={show} animation={false} onHide={() => { setShow(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title>Vui lòng nhập thông tin sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {showFullFill && <div style={{ color: "red" }} className="mb-3">Vui lòng nhập đầy đủ cả 3 danh mục.</div>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Product Name:
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Tên sản phẩm"
                                    value={formAddProduct.product_name} onInput={(e) => setFormAddProduct({ ...formAddProduct, product_name: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Price:
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Giá sản phẩm"
                                    value={formAddProduct.price} onInput={(e) => setFormAddProduct({ ...formAddProduct, price: e.target.value })} />
                            </Col>
                            {showRemindPrice && <div style={{ color: "red" }} className="mb-3 ml-3">Vui lòng nhập số.</div>}
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Quantity:
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Số lượng sản phẩm"
                                    value={formAddProduct.quantity} onInput={(e) => setFormAddProduct({ ...formAddProduct, quantity: e.target.value })} />
                            </Col>
                            {showRemindQty && <div style={{ color: "red" }} className="mb-3 ml-3">Vui lòng nhập số.</div>}
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>

            </Modal>
            <Modal show={showEdit} animation={false} onHide={() => { setShowEdit(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title>Vui lòng nhập thông tin sản phẩm mới</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {showFullFill && <div style={{ color: "red" }} className="mb-3">Vui lòng nhập đầy đủ cả 3 danh mục.</div>}
                    <Form onSubmit={handleSave}>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Product Name:
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Tên sản phẩm"
                                    value={formEditProduct.product_name} onInput={(e) => setFormEditProduct({ ...formEditProduct, product_name: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Price:
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Giá sản phẩm"
                                    value={formEditProduct.price} onInput={(e) => setFormEditProduct({ ...formEditProduct, price: e.target.value })} />
                            </Col>
                            {showRemindPrice && <div style={{ color: "red" }} className="mb-3 ml-3">Vui lòng nhập số.</div>}
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Quantity:
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Số lượng sản phẩm"
                                    value={formEditProduct.quantity} onInput={(e) => setFormEditProduct({ ...formEditProduct, quantity: e.target.value })} />
                            </Col>
                            {showRemindQty && <div style={{ color: "red" }} className="mb-3 ml-3">Vui lòng nhập số.</div>}
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button type="submit">Save</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>

            </Modal>
            <Modal show={showYN} onHide={()=>{setShowYN(false)}}>
              <Modal.Body>Bạn có chắc chắn muốn Xóa sản phẩm này? </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleYes}>
                        Yes
                    </Button>
                    <Button variant="primary" onClick={handleNo}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>
    );
};

export default Product;