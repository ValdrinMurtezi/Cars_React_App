import React from "react";
import "../styles/article.css";

const Carinfo = (props) => {
  return (
    <div className="info">
      <span>
        {props.title}
        <li>{props.desc}</li>
      </span>
    </div>
  );
};



export default Carinfo;
