import React from "react";
import "../styles/header.css";

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
          <a href="#" className="home">
            HOME
          </a>
          <a href="#">ABOUT</a>
          <a href="#">PARTNERS</a>
          <a href="#">CONTACT</a>
          <a href="#">FAQ</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
