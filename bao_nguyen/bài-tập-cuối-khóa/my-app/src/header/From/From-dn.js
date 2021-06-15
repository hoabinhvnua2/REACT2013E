import React,{useState} from "react";

import Modal from "react-bootstrap/Modal";
import "./From-dk.scss";
const FromDk = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="conten-From_Dk">
       
        
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default FromDk;
