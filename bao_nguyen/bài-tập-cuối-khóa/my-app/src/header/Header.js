import React from "react";
import "./header.scss";
import "font-awesome/css/font-awesome.min.css";

import Dk from "./Dang-ky";
import Dn from "./Dang-nhap";

const Header = () => {
  return (
    <div className="conten">
      <div className="link">
        <p>
          Thông Tin Các Hãng{" "}
          <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </p>

        <a href="https://www.apple.com/" target="example">
          Apple
        </a>
        <a href="https://www.samsung.com/vn/" target="example">
          Samsung
        </a>
        <a href="https://www.mi.com/vn/" target="example">
          Xiaomi
        </a>
        <a href="https://www.oppo.com/vn/" target="example">
          Oppo
        </a>
        <a href="https://consumer.huawei.com/vn/phones/" target="example">
          Huawei
        </a>
      </div>

      <div className="logIn">
        <Dn></Dn>
        <Dk></Dk>
      </div>
    </div>
  );
};

export default Header;
