import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <div className="main-body">
      <Header />
      <div className="clear-fix"></div>
      <main className="main-container">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
