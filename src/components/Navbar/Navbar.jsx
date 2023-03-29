import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {TfiAngleDown} from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className="fix-position padding-lr-0 hidden-xs hidden-sm hidden-md col-lg-7">
      <div className="main-menu hidden-xs hidden-sm hidden-md">
        <div id="nav">
          <nav className="main-nav">
            <ul className="clearfix" >
              <li>Thuốc<TfiAngleDown className="i_angle_down"/></li>
              <li>Thực phẩm chức năng<TfiAngleDown className="i_angle_down"/></li>
              <li>Thiết bị, dụng cụ y tế<TfiAngleDown className="i_angle_down"/></li>
              <li>Mỹ phẩm<TfiAngleDown className="i_angle_down"/></li>
              <li>Chăm sóc cá nhân<TfiAngleDown className="i_angle_down"/></li>
            </ul>
          </nav>
        </div>{" "}
      </div>
    </div>
  );
};

export default Navbar;
