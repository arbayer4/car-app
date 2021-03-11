import React from "react";
import "./Car.css";
import { Link } from "react-router-dom";

const Car = (props) => {
  return (
    <Link className="car" to={`/cars/${props._id}`}>
          <div className="container-all">
            <div className="container-image-and-data">
              <div className="container-image">
                <img className="car-image" src={props.imgURL} alt={props.make} />
              </div>
              <div className="container-data">
                <div className="car-title">{props.year} {props.make} {props.model}</div>
                <div className="car-description">{props.description}</div>
                <div className="car-price">${props.price}</div>
              </div>
            </div>
            <div className="container-orange-card"></div>
          </div>
        </Link>
  );
};

export default Car;
