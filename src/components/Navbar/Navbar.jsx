import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="fix-position padding-lr-0 hidden-xs hidden-sm hidden-md col-lg-7">
      <div className="main-menu hidden-xs hidden-sm hidden-md">
        <div id="nav">
          <nav className="main-nav">
            <ul className="clearfix">
              <li>
                <NavLink to="/">Thuốc</NavLink>
              </li>
              <li>
                <NavLink to="/">Thực phẩm chức năng</NavLink>
              </li>
              <li>
                <NavLink to="/">Thiết bị, dụng cụ y tế</NavLink>
              </li>
            </ul>
          </nav>
        </div>{" "}
      </div>
    </div>
  );
};

export default Navbar;
