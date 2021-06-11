import React from "react";
import "./header.scss";
import "font-awesome/css/font-awesome.min.css";
import samsung from './img/unnamed.jpg'
import Dk from './Dang-ky'


const Header = () => {
  return (
    <div className="conten">
      <div className="link">
        <p>Thông Tin Các Hãng   <i class="fa fa-angle-double-right" aria-hidden="true"></i></p>
     
     
          <a href="https://www.apple.com/" target ='_blank'>Apple</a>
          <a href="https://www.samsung.com/vn/" target ='_blank'>Samsung</a>
          <a href="https://www.mi.com/vn/" target ='_blank'>Xiaomi</a>
          <a href="https://www.oppo.com/vn/" target ='_blank'>Oppo</a>
          <a href="https://consumer.huawei.com/vn/phones/"target ='_blank'>Huawei</a>
      
      </div> 

      <div className="logIn">
          <Dk></Dk>

      </div>
    </div>
  );
};

export default Header;
