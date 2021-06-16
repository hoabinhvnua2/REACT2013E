import React, { useState } from "react";
import user from '../img/user2.jpg'
import Modal from "react-bootstrap/Modal";
import "./From-dn.scss";
const FromDk = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className='from-dn'>
        <div className="conten-From_Dk">
          <div className="logo"> 
          <div className='img'>
            <img src={user}/>
          </div>
           </div>
          <div className="dangnhap">
            <div className="title" >
              <h2>  Uses Login</h2>
            </div>
            <div className='input'>
              <input placeholder='Tên Người Dùng'></input>
              <input placeholder='Passwould'></input>
            </div>
            <div  className='btn-dn'><button>Login</button></div>
            
            <div className='go-out'>
               
                <button className='go-out2'>Đăng Ký</button>
          </div>
          </div>
          
        </div>
        </div>
        
      </Modal.Body>
    </Modal>
  );
};
export default FromDk;
