import Header from "./components/Header";
import "./styles/body.css";
import Article from "./components/Article";
import Quote from "./components/Quote";
import Component2 from "./components/Component2";
import { Icon } from "@iconify/react";
import Carousel from "react-elastic-carousel";

function App() {
  const breakPoints = [
    { width: 300, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 700, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
    { width: 1500, itemsToShow: 5 },
  ];
  return (
    <div className="App ">
      <div className="section1">
        <div className="header">
          <Header />
        </div>
        <div className="container">
          <Article />
          <Quote />
        </div>
      </div>

      <div className="section2">
        <div className="items">
          <h1 className="bmwh1">
            BMW <Icon className="icon" icon="simple-icons:bmw" height="45" />
          </h1>

          <div className="bmw">
            <Carousel breakPoints={breakPoints}>
              <Component2
                photo={"/images/newbmw.png"}
                title={"BMW M8 222"}
                price={"42.000$"}
                engine={"ENGINE : v4 turbo-diesel v.1 "}
                speed={"SPEED : 320 km/h"}
                year={"YEAR : 2015"}
              />
              <Component2
                photo={"/images/blacbmw.png"}
                title={"BMW (F40)"}
                price={"50.000$"}
                engine={"ENGINE : v4 turbo-diesel v.1 "}
                speed={"SPEED : 320 km/h"}
                year={"YEAR : 2015"}
              />
              <Component2
                photo={"/images/bmwm40.png"}
                title={"BMW M4 "}
                price={"39.000$"}
                engine={"ENGINE : v4 turbo-diesel v.1 "}
                speed={"SPEED : 320 km/h"}
                year={"YEAR : 2015"}
              />

              <Component2
                photo={"/images/bmwx7.png"}
                title={"BMW x7 "}
                price={"40.100$"}
                engine={"ENGINE : v4 turbo-diesel v.1 "}
                speed={"SPEED : 320 km/h"}
                year={"YEAR : 2015"}
              />
              <Component2
                photo={"/images/blacbmw.png"}
                title={"BMW (F40)"}
                price={"50.000$"}
                engine={"ENGINE : v4 turbo-diesel v.1 "}
                speed={"SPEED : 320 km/h"}
                year={"YEAR : 2015"}
              />

              <Component2
                photo={"/images/bmwx7.png"}
                title={"BMW x7 "}
                price={"40.100$"}
                engine={"ENGINE : v4 turbo-diesel v.1 "}
                speed={"SPEED : 320 km/h"}
                year={"YEAR : 2015"}
              />
            </Carousel>
          </div>

          <h1 className="mercedesh1">
            MERCEDES{" "}
            <Icon className="icon" icon="simple-icons:mercedes" height="45" />
          </h1>
          <div className="merc">
            <Carousel breakPoints={breakPoints}>
              <Component2
                photo={"/images/mercedes4.png"}
                title={"Mercedes "}
                price={"29.900$"}
                engine={"ENGINE : v4 turbo-diesel v.1 "}
                speed={"MAX. SPEED : 320 km/h"}
                year={"YEAR : 2015"}
              />
              <Component2
                photo={"/images/mercedes1.png"}
                title={"MERCEDES BENZ "}
                price={"42.500$"}
                engine={"ENGINE : v4 turbo-diesel v.1 "}
                speed={"SPEED : 320 km/h"}
                year={"YEAR : 2015"}
              />
              <Component2
                photo={"/images/mercedes2.png"}
                title={"Mercedes CLA-4"}
                price={"34.000$"}
                engine={"ENGINE : v4 turbo-diesel v.1 "}
                speed={"SPEED : 320 km/h"}
                year={"YEAR : 2015"}
              />

              <Component2
                photo={"/images/mercedes3.png"}
                title={"Mercedes AMG"}
                price={"39.200$"}
                engine={"ENGINE : v4 turbo-diesel v.1 "}
                speed={"SPEED : 320 km/h"}
                year={"YEAR : 2015"}
              />
              <Component2
                photo={"/images/mercedes4.png"}
                title={"Mercedes "}
                price={"29.900$"}
                engine={"ENGINE : v4 turbo-diesel v.1 "}
                speed={"MAX. SPEED : 320 km/h"}
                year={"YEAR : 2015"}
              />
              <Component2
                photo={"/images/mercedes2.png"}
                title={"Mercedes CLA-4"}
                price={"34.000$"}
                engine={"ENGINE : v4 turbo-diesel v.1 "}
                speed={"SPEED : 320 km/h"}
                year={"YEAR : 2015"}
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
