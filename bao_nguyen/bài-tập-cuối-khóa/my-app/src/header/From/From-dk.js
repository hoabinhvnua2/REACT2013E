import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import FromDn from "./From-dn";
import "./From-dk.scss";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

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
          <div className="from-dk">
            <div className="from-next">
              <button>
               Đăng nhập
               mở đi
              </button>
              <button className="btn-color">
                <p>Đăng Ký</p>
              </button>
            </div>
            <div className="from-input">
              <input placeholder="Tên Đăng Nhập"></input>
              <input type='Password' placeholder="Password"></input>
              <input placeholder="Nhập lại Password "></input>
              <input type='Email' placeholder="Nhập Email"></input>
            </div>

            <div className="from-btn">
              <button onClick={props.onHide}> Trở Lại </button>
              <button className="btn-color"> Đăng Ký </button>
            </div>
            <div className="lien-ket">
              <button className="fb">
                <i class="fa fa-facebook-official" aria-hidden="true">
                  {" "}
                  Liên Kết Với Facebook
                </i>{" "}
              </button>
              <button className="gg">
                {" "}
                <i class="fa fa-google" aria-hidden="true">
                  {" "}
                  Liên Kết Với Google
                </i>{" "}
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default FromDk;
