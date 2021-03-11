import React from "react";
import "./Car.css";
import { Link } from "react-router-dom";

const Car = (props) => {
  return (
    <>
      <Link className="car" to={`/cars/${props._id}`}>
        <div className="image-container">
          <img className="car-image" src={props.imgURL} alt={props.make} />
          <div className="car-details-fp">
            <div className="hidden"></div>
            <div className="details-fp">
              <div className="car-year">{props.year}</div>
              <div className="car-make">{props.make}</div>
              <div className="car-model">{props.model}</div>
              <div className="car-description">{props.description}</div>
              <div className="car-price">${props.price}</div>
              <div className="car-vin">{props.vin}</div>
              <div className="car-mileage">{props.mileage}</div>
              <div className="car-engine">{props.engine}</div>
              <div className="car-zipcode">{props.zipcode}</div>
              <div className="car-exterior-color">{props.exteriorColor}</div>
              <div className="car-interior-color">{props.interiorColor}</div>
              <div className="car-doors">{props.doors}</div>
              <div className="car-transmission">{props.transmission}</div>
              <Link className="veiw-more" to={`/cars/${props._id}`}>
                Veiw More
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Car;
