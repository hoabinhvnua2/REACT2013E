import React,{useState} from "react";
import "./Dang-ky.scss";
import FromDk from "./From/From-dk";


import "reactjs-popup/dist/index.css";
import Button from "react-bootstrap/Button";

const Dk = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <> 
     
    
     <FromDk show={modalShow} onHide={() => setModalShow(false)} />
      <Button variant="primary" onClick={() => setModalShow(true)}>
        <div className="conten-dk">
          <div className="boder"></div>
          <button className="link-dk"> Đăng Ký </button>
        </div>
      </Button>

      <FromDk show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Dk;
