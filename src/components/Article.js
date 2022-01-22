import React, { useState } from "react";
import "../styles/article.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Carinfo from "./Carinfo";
import Cars from "./Data";
import Shopbtn from "./Shopbtn";

function Article() {
  const [car, setCar] = useState(0);
  const { engine, speed, model, price, img } = Cars[car];

  const checkCar = (number) => {
    if (number > Cars.length - 1) {
      return 0;
    }
    if (number < 0) {
      return Cars.length - 1;
    }
    return number;
  };

  const nextCar = () => {
    setCar((car) => {
      let newCar = car + 1;
      return checkCar(newCar);
    });
  };

  const prevCar = () => {
    setCar((car) => {
      let newCar = car - 1;
      return checkCar(newCar);
    });
  };

  return (
    <div className="article col-sm-12">
      <div className="cartitle">
        <img src={img} alt="" />
      </div>
      <div className="btns">
        <button id="left">
          <i className="bi bi-arrow-left-circle" onClick={prevCar}></i>
        </button>
        <button id="right">
          <i className="bi bi-arrow-right-circle" onClick={nextCar}></i>
        </button>
      </div>

      <Shopbtn />

      <div className="carinfo">
        <Carinfo title={"ENGINE"} desc={engine} />
        <Carinfo title={"MAX.SPEED"} desc={speed} />
        <Carinfo title={"MODEL"} desc={model} />
        <span className="price">
          PRICE <li>{price}</li>
        </span>
      </div>
    </div>
  );
}

export default Article;
