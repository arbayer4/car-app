import React from "react";
import "./Car.css";
import { Link } from "react-router-dom";

const Car = (props) => {
  let newPrice = props.price.split(" ");
  let num = newPrice.length;
  console.log(newPrice);
  switch (num) {
    case num >= 4:
      newPrice.splice(3, 0, ",");
      break;
    case num >= 9:
      newPrice.splice(3, 0, ",");
      newPrice.splice();
    default:
      break;
  }

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
            <div className="car-price-fp">${newPrice}</div>
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
