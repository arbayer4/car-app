import React from "react";
import "./Car.css";
import { Link } from "react-router-dom";

const Car = (props) => {
  let newPrice = props.price.replace(/\d(?=(?:\d{3})+$)/g, "$&,"); //recieved from stackoverflow https://stackoverflow.com/questions/27311714/adding-commas-to-numbers-when-typing
  return (
    <div className="container-all">
      <div className="container-image-and-data">
        <div className="container-image-fp">
          <Link className="car" to={`/cars/${props._id}`}>
            <img
              className="car-image-fp"
              src={
                props.imgURL
                  ? props.imgURL
                  : "https://images.unsplash.com/photo-1606017116209-b1ed168465e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
              }
              alt={props.make}
            />
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
