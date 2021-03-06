import "../styles/components.css";

const Component2 = (props) => {
  return (
    <div className="products">
      <div className="car1">
        <div className="title">
          <a href="#https://www.google.com.co/search">
            <img
              src={props.photo}
              alt={"randomimg"}
              width={"270px"}
              height={"150px"}
            />
            <div className="nameprice">
              <h1>{props.title}</h1>
              <span>{props.price}</span>
            </div>
          </a>
        </div>

        <div className="stats">
          <p>{props.engine}</p>
          <p>{props.speed}</p>
          <p>{props.year}</p>
        </div>
      </div>
    </div>
  );
};

export default Component2;
