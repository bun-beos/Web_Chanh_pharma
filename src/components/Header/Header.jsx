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
  // const [cartCount, setCartCount] = useState([]);
  // const { token } = useToken();
  const [searchId, setSearchId] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/collections/" + searchId);
  };
  var image_Logo = require('../../assets/images/Elegant Beauty and Spa Studio Logo Template.png')
  
  return (
    <header id="header" className="clearfix">
      <div className="main-header hidden-xs"> 

        {/* logo  */}
        <div className="padding-lr-0 col-xs-12 col-sm-3 col-md-3 col-lg-1">
          <div className="logo-main">
              <img
                src={image_Logo}
              /> 
          </div> 
        </div>

        <Navbar />

        <div className="padding-lr-0 col-xs-12 col-sm-9 col-md-9 col-lg-3">
          
          <div className="rightHeader">
            <div className="bagHeader">
              <span>
                <Link to="/cart" title="Giỏ hàng">
                  <TfiShoppingCart size='30px'color='white'/>
                </Link>
              </span>
            </div>

            <div className="accountHeader">
              <Link to="/account/login" title="Tài khoản">
                <TfiUser size='30px' color='white'/>
              </Link>
            </div>

            <div className="searchHeader">
              <form
                action="/search"
                className="searchDesktop"
                onSubmit={(e) => handleSearch(e)}>
                <input type="hidden" name="type" value="product" />
                <input
                  required=""
                  type="text"
                  name="q"
                  id="searchInputDesktop"
                  className="searchInput"
                  placeholder="Tìm theo bệnh, tên thuốc..."
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                />
                <input type="submit" className="searchButton" value="" />
              </form>
              <div id="resultSearchDesktop" className="resultDesktop">
                <div className="innerResultDesktop"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
