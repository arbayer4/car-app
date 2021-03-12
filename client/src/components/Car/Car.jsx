import React from "react";
import "./Car.css";
import { Link } from "react-router-dom";

const Car = (props) => {
  return (
    <div className="container-all">
      <div className="container-image-and-data">
        <div className="container-image-fp">
          <Link className="car" to={`/cars/${props._id}`}>
            <img className="car-image-fp" src={props.imgURL} alt={props.make} />
          </Link>
        </div>
        <div className="container-data-fp">
          <div className="car-title-fp">
            {props.year} {props.make} {props.model}
          </div>
          <div className="car-description-fp">{props.description}</div>
          <div className="price-and-viewmore">
            <div className="car-price-fp">${props.price}</div>
            <Link className="view-more-detail" to={`/cars/${props._id}`}>
              View More
            </Link>
          </div>
        </div>
      </div>
      <div className="container-orange-card"></div>
    </div>
  );
};

export default Car;
