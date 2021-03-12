import React from "react";
import "./Car.css";
import { Link } from "react-router-dom";

const Car = (props) => {
  return (
    <div className="container-all">
      <div className="container-image-and-data">
        <div className="container-image">
          <Link className="car" to={`/cars/${props._id}`}>
            <img className="car-image" src={props.imgURL} alt={props.make} />
          </Link>
        </div>
        <div className="container-data-fp">
          <div className="car-title">
            {props.year} {props.make} {props.model}
          </div>
          <div className="car-description">{props.description}</div>
          <p className="car-price">${props.price}</p>
          <Link className="veiw-more-detail" to={`/cars/${props._id}`}>
            View More
          </Link>
        </div>
      </div>
      <div className="container-orange-card"></div>
    </div>
  );
};

export default Car;
