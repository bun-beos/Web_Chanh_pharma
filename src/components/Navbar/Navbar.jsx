import React from "react";
import "./Navbar.css";
import {TfiAngleDown} from "react-icons/tfi";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fix-position padding-lr-0 hidden-xs hidden-sm hidden-md main-navbar">
      <div className="main-menu hidden-xs hidden-sm hidden-md">
        <div id="nav">
          <nav className="main-nav">
            <ul className="clearfix" >
              <li>
                <Link to="" >Thuốc<TfiAngleDown className="i_angle_down"/></Link>
              </li><li>
                <Link to="/collection" >Thực phẩm chức năng<TfiAngleDown className="i_angle_down"/></Link>
              </li><li>
                <Link to="" >Thiết bị, dụng cụ y tế<TfiAngleDown className="i_angle_down"/></Link>
              </li><li>
                <Link to="" >Mỹ phẩm<TfiAngleDown className="i_angle_down"/></Link>
              </li><li>
                <Link to="" >Chăm sóc cá nhân<TfiAngleDown className="i_angle_down"/></Link>
              </li>
            </ul>
          </nav>
        </div>{" "}
      </div>
    </div>
  );
};

export default Navbar;
