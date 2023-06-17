import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import useToken from "../../hooks/useToken";
import { CheckError } from "../../utils/CheckError";
import "./Header.css";
import {TfiShoppingCart} from "react-icons/tfi";
import {TfiUser} from "react-icons/tfi";
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
  // const [searchId, setSearchId] = useState("");
  // const navigate = useNavigate();
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   navigate("/collections/" + searchId);
  // };
  var image_logo = require('../../assets/images/Elegant Beauty and Spa Studio Logo Template.png')
  
  return (
    <header id="header" className="clearfix">
      <div className="main-header hidden-xs"> 

        {/* logo  */}
        {/* <div className="padding-lr-0 col-xs-12 col-sm-3 col-md-3 col-lg-1"> */}
          <div className="logo">
              <img src={image_logo}/> 
          </div> 
        {/* </div> */}

        <Navbar />

        {/* <div className="padding-lr-0"> */}
          <div className="right-header">
            <div className="cartHeader">
              <span>
                <Link to="/cart" title="Giỏ hàng">
                  <TfiShoppingCart size='30px'color='white'/>
                </Link>
              </span>
            </div>

            <div className="accountHeader">
              <span>
                <Link to="/account/login" title="Tài khoản">
                  <TfiUser size='30px' color='white'/>
                </Link>
              </span>
            </div>

            <div className="searchHeader">
              <form
                action="/search"
                className="searchDesktop"
                // onSubmit={(e) => handleSearch(e)}
                >
                {/* <input type="hidden" name="type" value="product" /> */}
                {/* <input
                  required=""
                  type="text"
                  name="q"
                  id="searchInputDesktop"
                  className="searchInput"
                  placeholder="Tìm theo bệnh, tên thuốc..."
                  value=""
                  // onChange={(e) => setSearchId(e.target.value)}
                /> */}
                <input type="text" className="searchInput" require placeholder="Tìm theo bệnh, tên thuốc..."/>
                <input type="submit" className="searchButton" value="" />
              </form>

              <div id="resultSearchDesktop" className="resultDesktop">
                <div className="innerResultDesktop">
                </div>
              </div>

            </div>
          </div>
        {/* </div> */}
      </div>
    </header>
  );
};

export default Header;
