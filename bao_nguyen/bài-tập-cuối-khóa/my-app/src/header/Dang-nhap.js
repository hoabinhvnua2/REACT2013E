import React,{useState} from "react";
import "./Dang-nhap.scss"
import FromDn from "./From/From-dn";

import "reactjs-popup/dist/index.css";


import Button from "react-bootstrap/Button";


const Dn = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
   
  return (
      <>
 
    <FromDn show={modalShow} onHide={() => setModalShow(false)} />
      <Button variant="primary" onClick={() => setModalShow(true)}>
        <div className='Dangnhap' >
         
          <button className='link-dk' > <i class="fa fa-user-circle-o" aria-hidden="true"> Đăng Nhập</i></button>
        </div>
      </Button>

      <FromDn show={modalShow} onHide={() => setModalShow(false)} />
      </>
  );
};
export default Dn;
