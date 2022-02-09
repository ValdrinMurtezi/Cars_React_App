import React from "react";
import "../styles/header.css";
import "../styles/header-mobile.css";

// react car app

const Header = () => {
  return (
    <div>
      <div className="logos sm">
        <img
          src={require("../imgs/logo.jpg")}
          alt=""
          width={"50%"}
          height={"100%"}
        />
      </div>
      <div className="navbar">
        <div className="icon"></div>
        <div className="links">
          <a href="#https://www.google.com.co/search" className="home">
            HOME
          </a>
          <a href="#https://www.google.com.co/search">ABOUT</a>
          <a href="#https://www.google.com.co/search">PARTNERS</a>
          <a href="#https://www.google.com.co/search">CONTACT</a>
          <a href="#https://www.google.com.co/search">FAQ</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
